"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ACTIVE_STATUSES = new Set(["active", "trialing"]);
const MAX_ATTEMPTS = 8;
const DELAY_MS = 1500;

export default function SubscribeSuccessPage() {
  const router = useRouter();
  const [attempt, setAttempt] = useState(0);
  const [message, setMessage] = useState("Setting up your account…");

  useEffect(() => {
    let cancelled = false;

    async function syncWithRetry() {
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
        if (cancelled) return;
        if (i > 0) {
          setMessage(`Confirming your subscription${".".repeat((i % 3) + 1)}`);
          await new Promise((r) => setTimeout(r, DELAY_MS));
        }
        if (cancelled) return;

        try {
          const res = await fetch("/api/stripe/sync", { method: "POST" });
          const data = await res.json();

          if (ACTIVE_STATUSES.has(data.status)) {
            setMessage("You're all set! Redirecting…");
            await new Promise((r) => setTimeout(r, 600));
            if (!cancelled) router.replace("/dashboard");
            return;
          }

          // status is "none" or error — keep retrying
          setAttempt(i + 1);
        } catch {
          setAttempt(i + 1);
        }
      }

      // After all retries, redirect anyway (webhook may still come through)
      if (!cancelled) {
        setMessage("Almost there — redirecting…");
        await new Promise((r) => setTimeout(r, 600));
        router.replace("/dashboard");
      }
    }

    void syncWithRetry();
    return () => { cancelled = true; };
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: "var(--bg-base)" }}>
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-stone-200 dark:border-stone-700 border-t-orange-500" />
        <div className="absolute inset-2 animate-ping rounded-full bg-orange-500/20" />
      </div>
      <p className="text-sm font-medium text-stone-700 dark:text-stone-300">{message}</p>
      {attempt > 2 && (
        <p className="text-xs text-stone-400 dark:text-stone-500">
          This is taking a moment — hang tight.
        </p>
      )}
    </div>
  );
}
