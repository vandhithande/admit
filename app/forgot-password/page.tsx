"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        email,
        { redirectTo: `${window.location.origin}/reset-password` }
      );
      if (resetError) {
        setError(resetError.message);
        return;
      }
      setSent(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white">
      <header className="border-b border-neutral-200/80 bg-white">
        <div className="mx-auto flex h-14 max-w-lg items-center px-6">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-neutral-900"
          >
            Admit
          </Link>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-heading text-center text-3xl font-semibold tracking-tight text-neutral-900">
            Reset your password
          </h1>
          <p className="mt-2 text-center text-sm text-neutral-600">
            Enter your email and we&apos;ll send you a reset link.
          </p>

          {sent ? (
            <div className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-5 text-center">
              <p className="text-sm font-medium text-emerald-900">Check your inbox</p>
              <p className="mt-1 text-sm text-emerald-800">
                We sent a password reset link to <strong>{email}</strong>.
              </p>
              <Link
                href="/login"
                className="mt-4 inline-block text-sm font-medium text-emerald-900 underline-offset-4 hover:underline"
              >
                Back to sign in
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wide text-neutral-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
                  placeholder="you@school.edu"
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-lg bg-neutral-900 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send reset link"}
              </button>

              <p className="text-center text-sm text-neutral-600">
                <Link
                  href="/login"
                  className="font-medium text-neutral-900 underline-offset-4 hover:underline"
                >
                  Back to sign in
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
