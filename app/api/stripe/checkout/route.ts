import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { stripe, PRICE_ID, FOUNDING_MEMBER_LIMIT, FOUNDING_TRIAL_DAYS, STANDARD_TRIAL_DAYS } from "@/lib/stripe";

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

  // Get or create Stripe customer
  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id, name")
    .eq("user_id", user.id)
    .single();

  let customerId = profile?.stripe_customer_id as string | undefined;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: profile?.name || undefined,
      metadata: { user_id: user.id },
    });
    customerId = customer.id;
    await supabase.from("profiles").update({ stripe_customer_id: customerId }).eq("user_id", user.id);
  }

  // Count total signups to determine trial length
  const { count } = await supabase.from("profiles").select("*", { count: "exact", head: true });
  const trialDays = (count ?? 0) <= FOUNDING_MEMBER_LIMIT ? FOUNDING_TRIAL_DAYS : STANDARD_TRIAL_DAYS;

  const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    line_items: [{ price: PRICE_ID, quantity: 1 }],
    subscription_data: { trial_period_days: trialDays },
    payment_method_collection: "always",
    success_url: `${origin}/subscribe/success`,
    cancel_url: `${origin}/subscribe`,
  });

  return NextResponse.json({ url: session.url });
}
