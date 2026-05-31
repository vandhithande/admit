"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    monthly: 9,
    yearly: 72,
    monthlyPrice: "price_1TdCTfL6mUMJ86yrNUYMP9T0",
    yearlyPrice: "price_1TdCTfL6mUMJ86yrEiNJ8Wxn",
    color: "border-stone-200 dark:border-stone-700",
    activeColor: "border-orange-500",
    badge: null,
    perks: [
      "AI counselor (50 messages/month)",
      "School list builder — unlimited schools",
      "Acceptance rate data for 640+ colleges",
      "Essay review (5 reviews/month)",
      "Activity tracker",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 19,
    yearly: 152,
    monthlyPrice: "price_1TdCTgL6mUMJ86yrISzDmLxh",
    yearlyPrice: "price_1TdCTgL6mUMJ86yrMYcEUx9s",
    color: "border-stone-200 dark:border-stone-700",
    activeColor: "border-orange-500",
    badge: "Most Popular",
    perks: [
      "Everything in Basic",
      "Unlimited AI counselor messages",
      "Unlimited essay reviews",
      "Advanced essay feedback with rewrites",
      "Admissions predictor (early access)",
      "Deadline timeline tracker",
      "Priority support",
    ],
  },
];

export default function SubscribePage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    const plan = PLANS.find((p) => p.id === selectedPlan)!;
    const priceId = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const activePlan = PLANS.find((p) => p.id === selectedPlan)!;
  const price = billing === "yearly" ? activePlan.yearly / 12 : activePlan.monthly;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16" style={{ background: "var(--bg-base)" }}>
      <div className="w-full max-w-2xl">
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
          admit
        </Link>

        <div className="mt-8 text-center">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            Start your free trial
          </h1>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            No charge until your trial ends. Cancel anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center rounded-xl border border-stone-200 dark:border-stone-700 p-1" style={{ background: "var(--bg-card)" }}>
            {(["monthly", "yearly"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  billing === b
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                }`}
              >
                {b === "yearly" ? (
                  <><span className="capitalize">{b}</span><span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${billing === "yearly" ? "bg-white/20 text-white" : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400"}`}>-33%</span></>
                ) : (
                  <span className="capitalize">{b}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PLANS.map((plan) => {
            const active = selectedPlan === plan.id;
            const displayPrice = billing === "yearly" ? plan.yearly / 12 : plan.monthly;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex flex-col rounded-2xl border-2 p-6 text-left transition-all ${
                  active ? plan.activeColor + " shadow-[0_0_0_1px] shadow-orange-500/30" : plan.color + " hover:border-stone-300 dark:hover:border-stone-600"
                }`}
                style={{ background: "var(--bg-card)" }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
                    <Zap size={10} /> {plan.badge}
                  </span>
                )}
                <div className={`mb-1 text-xs font-semibold uppercase tracking-widest ${active ? "text-orange-500" : "text-stone-400"}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                    ${displayPrice % 1 === 0 ? displayPrice : displayPrice.toFixed(2)}
                  </span>
                  <span className="mb-1.5 text-sm text-stone-400">/mo{billing === "yearly" ? "*" : ""}</span>
                </div>
                {billing === "yearly" && (
                  <p className="text-xs text-stone-400 dark:text-stone-500">${plan.yearly}/year — save ${plan.monthly * 12 - plan.yearly}</p>
                )}
                <ul className="mt-4 space-y-2">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${active ? "text-orange-500" : "text-stone-400"}`} />
                      <span className="text-xs text-stone-600 dark:text-stone-400">{perk}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">
                {activePlan.name} · {billing === "yearly" ? "Annual" : "Monthly"}
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                ${price % 1 === 0 ? price : price.toFixed(2)}/month{billing === "yearly" ? ` · billed $${activePlan.yearly}/year` : ""}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-stone-400">Due today</p>
              <p className="font-heading text-xl font-bold text-stone-900 dark:text-stone-100">$0</p>
              <p className="text-[10px] text-stone-400">after free trial</p>
            </div>
          </div>

          {error && (
            <p className="mt-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-800 dark:text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={() => void startCheckout()}
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Redirecting…" : "Start free trial →"}
          </button>
          <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
            Cancel anytime. No hidden fees. Card required to hold your spot.
          </p>
        </div>
      </div>
    </div>
  );
}
