"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-3.5 py-2.5 text-sm text-stone-900 dark:text-stone-100 shadow-sm outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (signUpError) { setError(signUpError.message); return; }
      if (data.session) { router.push("/onboarding"); router.refresh(); return; }
      setNotice("Check your email for a confirmation link to finish creating your account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1" style={{ background: "var(--bg-base)" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between bg-stone-900 dark:bg-stone-950 p-12">
        <Link href="/" className="font-heading text-xl font-bold text-white">admit</Link>
        <div className="space-y-6">
          {[
            "Build a balanced school list with acceptance rates built in.",
            "Get AI counselor advice grounded in real programs and deadlines.",
            "Track essays, activities, and timelines in one place.",
          ].map((line) => (
            <div key={line} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600/20 text-orange-400 text-xs">✓</span>
              <p className="text-sm text-stone-300">{line}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-600">© {new Date().getFullYear()} Admit</p>
      </div>

      {/* Form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100 lg:hidden">
            admit
          </Link>
          <h1 className="font-heading mt-8 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 lg:mt-0">
            Create your account
          </h1>
          <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">Free forever. No credit card needed.</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@school.edu" />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required minLength={8} value={password}
                onChange={(e) => setPassword(e.target.value)} className={inputCls} placeholder="At least 8 characters" />
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-800 dark:text-red-400">{error}</p>
            )}
            {notice && (
              <p className="rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-2.5 text-sm text-emerald-900 dark:text-emerald-400">{notice}</p>
            )}

            <button type="submit" disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Creating account…" : "Create free account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-stone-500 dark:text-stone-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-orange-600 dark:text-orange-400 hover:underline underline-offset-4">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
