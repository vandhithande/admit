import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST() {
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
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = getAdminClient();

  // Always use admin client to read profile — bypasses RLS so it works even if no row exists
  let { data: profile } = await admin
    .from("profiles")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single();

  if (!profile?.stripe_customer_id) {
    // No customer ID in DB yet — look up Stripe by email as a fallback
    try {
      const customers = await stripe.customers.list({ email: user.email!, limit: 1 });
      const customer = customers.data[0];
      if (!customer) return NextResponse.json({ status: "no_customer" });

      await admin.from("profiles").upsert(
        { user_id: user.id, stripe_customer_id: customer.id, updated_at: new Date().toISOString() },
        { onConflict: "user_id" }
      );
      profile = { stripe_customer_id: customer.id };
    } catch (err) {
      console.error("[sync] customer lookup error:", err);
      return NextResponse.json({ status: "no_customer" });
    }
  }

  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: profile.stripe_customer_id,
      limit: 1,
      status: "all",
    });

    const sub = subscriptions.data[0];
    if (!sub) return NextResponse.json({ status: "none" });

    await admin.from("profiles").update({
      stripe_subscription_id: sub.id,
      subscription_status: sub.status,
      trial_ends_at: sub.trial_end
        ? new Date(sub.trial_end * 1000).toISOString()
        : null,
    }).eq("user_id", user.id);

    return NextResponse.json({ status: sub.status });
  } catch (err) {
    console.error("[sync] subscription fetch error:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
