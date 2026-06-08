"use client";

import { useUser } from "@/components/user-context";
import Link from "next/link";
import { Zap } from "lucide-react";

interface ProGateProps {
  children: React.ReactNode;
  feature?: string;
}

export function ProGate({ children, feature }: ProGateProps) {
  const { isPro, loading } = useUser();

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center py-24">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-stone-200 border-t-orange-500" />
      </div>
    );
  }

  if (isPro) return <>{children}</>;

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24" style={{ background: "var(--bg-base)" }}>
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-950/50">
          <Zap size={24} className="text-orange-500" />
        </div>
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          Pro feature
        </h2>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          {feature ? `${feature} is part of Admit Pro.` : "This feature is part of Admit Pro."}{" "}
          Upgrade for $9/month and get AI counseling, essay review, EC strategy, and admissions predictor.
        </p>
        <Link
          href="/subscribe"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
        >
          <Zap size={14} /> Upgrade to Pro
        </Link>
        <p className="mt-3 text-xs text-stone-400 dark:text-stone-500">
          Start with a free trial · Cancel anytime
        </p>
      </div>
    </div>
  );
}
