import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export const PRICE_ID = process.env.STRIPE_PRICE_ID!;
export const FOUNDING_MEMBER_LIMIT = 25;
export const FOUNDING_TRIAL_DAYS = 30;
export const STANDARD_TRIAL_DAYS = 7;
