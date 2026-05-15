"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SubscribeSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    async function sync() {
      try {
        await fetch("/api/stripe/sync", { method: "POST" });
      } catch {
        // best effort
      }
      router.replace("/dashboard");
    }
    void sync();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: "var(--bg-base)" }}>
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-orange-500" />
      <p className="text-sm text-stone-500 dark:text-stone-400">Setting up your account…</p>
    </div>
  );
}
