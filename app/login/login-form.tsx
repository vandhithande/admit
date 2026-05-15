"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

const inputCls =
  "mt-1.5 w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-3.5 py-2.5 text-sm text-stone-900 dark:text-stone-100 shadow-sm outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) { setError(signInError.message); return; }

      // Send first-time users to onboarding
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("grade, intended_major, name")
          .eq("user_id", user.id)
          .single();
        const isNew = !profile || (!profile.grade && !profile.intended_major && !(profile as Record<string, unknown>).name);
        router.push(isNew ? "/onboarding" : redirect);
      } else {
        router.push(redirect);
      }
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1" style={{ background: "var(--bg-base)" }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between bg-stone-900 dark:bg-stone-950 p-12">
        <Link href="/" className="font-heading text-xl font-bold text-white">admit</Link>
        <div>
          <p className="font-heading text-2xl font-semibold leading-snug text-white">
            &ldquo;The most organized I&apos;ve ever felt about college apps.&rdquo;
          </p>
          <p className="mt-4 text-sm text-stone-400">— A student heading to MIT</p>
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
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
            Sign in to pick up where you left off.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@school.edu" />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required value={password}
                onChange={(e) => setPassword(e.target.value)} className={inputCls} placeholder="••••••••" />
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-800 dark:text-red-400">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading}
              className="flex w-full items-center justify-center rounded-xl bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-6 flex flex-col items-center gap-2.5 text-sm text-stone-500 dark:text-stone-400">
            <Link href="/forgot-password" className="hover:text-stone-800 dark:hover:text-stone-200 hover:underline underline-offset-4">
              Forgot your password?
            </Link>
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-orange-600 dark:text-orange-400 hover:underline underline-offset-4">
                Sign up free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
