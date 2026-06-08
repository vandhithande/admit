import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

// Service role client — bypasses RLS, safe for server-only webhook handler
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  if (!sig || !webhookSecret || webhookSecret === "whsec_placeholder") {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getAdminClient();

  async function updateByCustomer(customerId: string, fields: Record<string, unknown>) {
    const { error } = await supabase
      .from("profiles")
      .update(fields)
      .eq("stripe_customer_id", customerId);
    if (error) console.error("[webhook] DB update error:", error.message);
  }

  try {
    switch (event.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        console.log(`[webhook] ${event.type} — status: ${sub.status}`);
        await updateByCustomer(sub.customer as string, {
          stripe_subscription_id: sub.id,
          subscription_status: sub.status,
          trial_ends_at: sub.trial_end
            ? new Date(sub.trial_end * 1000).toISOString()
            : null,
        });
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        console.log(`[webhook] subscription deleted`);
        await updateByCustomer(sub.customer as string, {
          stripe_subscription_id: null,
          subscription_status: "canceled",
          trial_ends_at: null,
        });
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.customer) {
          await updateByCustomer(invoice.customer as string, {
            subscription_status: "past_due",
          });
        }
        break;
      }
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        if (invoice.customer && invoice.subscription) {
          await updateByCustomer(invoice.customer as string, {
            subscription_status: "active",
          });
        }
        break;
      }
      default:
        console.log(`[webhook] unhandled event: ${event.type}`);
    }
  } catch (err) {
    console.error("[webhook] handler error:", err);
    return NextResponse.json({ error: "Handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
