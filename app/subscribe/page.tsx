"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const perks = [
  "Unlimited AI counselor conversations",
  "Build and manage your full school list",
  "Acceptance rate data for 640+ colleges",
  "Essay and activity tracking (coming soon)",
  "Deadline timeline (coming soon)",
  "Admissions predictor (coming soon)",
];

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16" style={{ background: "var(--bg-base)" }}>
      <div className="w-full max-w-md">
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">
          admit
        </Link>

        <div className="mt-8 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-8 shadow-[0_1px_3px_rgba(28,25,23,0.06)]" style={{ background: "var(--bg-card)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Admit Premium
          </p>
          <div className="mt-2 flex items-end gap-1">
            <span className="font-heading text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">$20</span>
            <span className="mb-2 text-sm text-stone-400">/month</span>
          </div>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Start with a free trial — no charge until it ends.
          </p>

          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-orange-500" />
                <span className="text-sm text-stone-700 dark:text-stone-300">{perk}</span>
              </li>
            ))}
          </ul>

          {error && (
            <p className="mt-4 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-800 dark:text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={() => void startCheckout()}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-orange-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Redirecting…" : "Start free trial →"}
          </button>

          <p className="mt-3 text-center text-xs text-stone-400 dark:text-stone-500">
            Cancel anytime. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
}
