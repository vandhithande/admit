import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { stripe, FOUNDING_MEMBER_LIMIT, FOUNDING_TRIAL_DAYS, STANDARD_TRIAL_DAYS } from "@/lib/stripe";

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (c) => c.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in to subscribe." }, { status: 401 });

  // Resolve price ID server-side — never trust a price ID from the client
  let priceId: string | undefined;
  try {
    const body = await request.json();
    priceId = body.plan === "yearly"
      ? process.env.STRIPE_PRO_YEARLY
      : process.env.STRIPE_PRO_MONTHLY;
  } catch {
    priceId = process.env.STRIPE_PRO_MONTHLY;
  }

  if (!priceId) {
    console.error("[checkout] price ID not configured");
    return NextResponse.json({ error: "Subscription not configured. Contact support." }, { status: 500 });
  }

  // Use admin client so profile operations bypass RLS reliably
  const admin = getAdminClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("stripe_customer_id, name")
    .eq("user_id", user.id)
    .single();

  let customerId = profile?.stripe_customer_id as string | undefined;
  if (!customerId) {
    try {
      const customer = await stripe.customers.create({
        email: user.email,
        name: (profile?.name as string) || undefined,
        metadata: { user_id: user.id },
      });
      customerId = customer.id;
    } catch (err) {
      console.error("[checkout] customer create error:", err);
      return NextResponse.json({ error: "Failed to set up billing. Try again." }, { status: 500 });
    }

    const { error: upsertErr } = await admin.from("profiles").upsert(
      { user_id: user.id, stripe_customer_id: customerId, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
    if (upsertErr) console.error("[checkout] profile upsert error:", upsertErr.message);
  }

  const { count } = await admin.from("profiles").select("*", { count: "exact", head: true });
  const trialDays = (count ?? 0) <= FOUNDING_MEMBER_LIMIT ? FOUNDING_TRIAL_DAYS : STANDARD_TRIAL_DAYS;

  const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: { trial_period_days: trialDays },
      payment_method_collection: "always",
      success_url: `${origin}/subscribe/success`,
      cancel_url: `${origin}/subscribe`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] session create error:", err);
    return NextResponse.json({ error: "Failed to start checkout. Try again." }, { status: 500 });
  }
}
