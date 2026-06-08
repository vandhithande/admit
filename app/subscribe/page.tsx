"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";

const FREE_PERKS = [
  "School list builder — unlimited schools",
  "Acceptance rate data for 640+ colleges",
  "Basic timeline tracker",
];

const PRO_PERKS = [
  "Everything in Free",
  "Unlimited AI counselor conversations",
  "Essay review with line-by-line feedback",
  "EC strategy & activity tracker",
  "Admissions predictor (early access)",
  "Priority support",
];

export default function SubscribePage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const monthlyPrice = 19;
  const yearlyPrice = 149;
  const displayPrice = billing === "yearly" ? +(yearlyPrice / 12).toFixed(2) : monthlyPrice;
  const priceId = billing === "yearly"
    ? "price_1Tg9F3L6mUMJ86yrdhxj1bsd"
    : "price_1Tg9F3L6mUMJ86yrURFF5o4b";

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) { window.location.href = data.url; }
      else { setError("Something went wrong. Please try again."); }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16" style={{ background: "var(--bg-base)" }}>
      <div className="w-full max-w-2xl">
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">admit</Link>

        <div className="mt-8 text-center">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            Upgrade to Pro
          </h1>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            Start free. Upgrade when you&apos;re ready to get serious.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center rounded-xl border border-stone-200 dark:border-stone-700 p-1" style={{ background: "var(--bg-card)" }}>
            {(["monthly", "yearly"] as const).map((b) => (
              <button key={b} onClick={() => setBilling(b)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  billing === b ? "bg-orange-600 text-white shadow-sm" : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
                }`}>
                {b === "yearly"
                  ? <><span className="capitalize">{b}</span><span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${billing === "yearly" ? "bg-white/20 text-white" : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400"}`}>-33%</span></>
                  : <span className="capitalize">{b}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Plan comparison */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Free */}
          <div className="rounded-2xl border-2 border-stone-200 dark:border-stone-700 p-6" style={{ background: "var(--bg-card)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Free</p>
            <div className="mt-1 flex items-end gap-1">
              <span className="font-heading text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">$0</span>
              <span className="mb-1.5 text-sm text-stone-400">/forever</span>
            </div>
            <ul className="mt-4 space-y-2">
              {FREE_PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-stone-400" />
                  <span className="text-xs text-stone-600 dark:text-stone-400">{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/dashboard"
              className="mt-5 flex w-full items-center justify-center rounded-xl border border-stone-200 dark:border-stone-700 py-2.5 text-sm font-medium text-stone-600 dark:text-stone-400 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800"
              style={{ background: "var(--bg-base)" }}>
              Continue with Free
            </Link>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-orange-500 shadow-[0_0_0_1px] shadow-orange-500/20 p-6" style={{ background: "var(--bg-card)" }}>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
              <Zap size={10} /> Recommended
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">Pro</p>
            <div className="mt-1 flex items-end gap-1">
              <span className="font-heading text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                ${displayPrice % 1 === 0 ? displayPrice : displayPrice.toFixed(2)}
              </span>
              <span className="mb-1.5 text-sm text-stone-400">/mo{billing === "yearly" ? "*" : ""}</span>
            </div>
            {billing === "yearly" && (
              <p className="text-xs text-stone-400">${yearlyPrice}/year — save ${monthlyPrice * 12 - yearlyPrice} vs monthly</p>
            )}
            <ul className="mt-4 space-y-2">
              {PRO_PERKS.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-xs text-stone-600 dark:text-stone-400">{p}</span>
                </li>
              ))}
            </ul>

            {error && (
              <p className="mt-3 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3 py-2 text-xs text-red-800 dark:text-red-400">{error}</p>
            )}

            <button onClick={() => void startCheckout()} disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:opacity-60">
              {loading ? "Redirecting…" : "Start free trial →"}
            </button>
            <p className="mt-2 text-center text-[10px] text-stone-400">$0 due today · Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
