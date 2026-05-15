import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

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

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single();

  if (!profile?.stripe_customer_id) {
    return NextResponse.json({ error: "No customer" }, { status: 400 });
  }

  // Fetch latest subscription from Stripe directly
  const subscriptions = await stripe.subscriptions.list({
    customer: profile.stripe_customer_id,
    limit: 1,
    status: "all",
  });

  const sub = subscriptions.data[0];
  if (!sub) return NextResponse.json({ status: "none" });

  await supabase.from("profiles").update({
    stripe_subscription_id: sub.id,
    subscription_status: sub.status,
    trial_ends_at: sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null,
  }).eq("user_id", user.id);

  return NextResponse.json({ status: sub.status });
}
