"use client";

import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useUser } from "@/components/user-context";
import {
  School,
  MessageSquare,
  FileText,
  ListChecks,
  Calendar,
  ChevronRight,
  BarChart2,
  Sparkles,
} from "lucide-react";

type SchoolCounts = { reach: number; target: number; safety: number };

const features = [
  {
    href: "/dashboard/schools",
    icon: School,
    title: "My Schools",
    description: "Build your college list. Add reach, target, and safety schools with live acceptance rates.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    free: true,
  },
  {
    href: "/dashboard/activities",
    icon: ListChecks,
    title: "Activities",
    description: "Log your extracurriculars, roles, and hours. Build a complete picture of your profile.",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    free: true,
  },
  {
    href: "/dashboard/timeline",
    icon: Calendar,
    title: "Timeline",
    description: "Key dates for the 2026–27 cycle — EA, RD, financial aid deadlines.",
    color: "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400",
    free: true,
  },
  {
    href: "/dashboard/counselor",
    icon: MessageSquare,
    title: "AI Counselor",
    description: "Named programs, real deadlines, and personalized strategy — grounded in your profile.",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
  {
    href: "/dashboard/essays",
    icon: FileText,
    title: "Essay Review",
    description: "Line-by-line AI feedback on every draft. Score, strengths, and what to fix.",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
  },
  {
    href: "/dashboard/predictor",
    icon: BarChart2,
    title: "Admissions Predictor",
    description: "Grounded admit odds based on your real stats, not generic calculators.",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",
    comingSoon: true,
  },
];

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-xl bg-stone-200 dark:bg-stone-700/60 ${className}`} />;
}

function getAiTip(counts: SchoolCounts | null): string {
  if (!counts) return "Fill in your profile in Settings so your AI counselor can give you personalized program recommendations.";
  const total = counts.reach + counts.target + counts.safety;
  if (total === 0) return "Start by adding schools to your list — the AI counselor will analyze your balance and suggest adjustments.";
  if (counts.safety === 0 && total >= 3) return `You have ${counts.reach} reach school${counts.reach !== 1 ? "s" : ""} but no safeties — that's a risky list. The AI counselor can help you find the right balance.`;
  if (counts.reach === 0 && total >= 3) return "Your list has no reach schools. Unlock the AI counselor to find ambitious schools that match your profile.";
  if (counts.reach > counts.target + counts.safety) return "Your list is reach-heavy — statistically risky. The AI counselor can help you build a safer, smarter list.";
  return "Your school list is taking shape. The AI counselor can suggest programs, competitions, and next steps based on your profile.";
}

export default function DashboardPage() {
  const supabase = useMemo(() => createClient(), []);
  const { user, profile: userProfile, isPro } = useUser();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [counts, setCounts] = useState<SchoolCounts | null>(null);
  const [loadingCounts, setLoadingCounts] = useState(true);

  useEffect(() => {
    if (!user) return;
    const name = userProfile?.name?.trim();
    setDisplayName(name || user.email?.split("@")[0] || null);
  }, [user, userProfile]);

  useEffect(() => {
    async function load() {
      if (!user) return;

      const { data: schools, error } = await supabase
        .from("schools")
        .select("category")
        .eq("user_id", user.id);

      const data = schools;

      if (schools) {
        const c = { reach: 0, target: 0, safety: 0 };
        for (const row of schools) {
          if (row.category === "reach") c.reach++;
          else if (row.category === "target") c.target++;
          else if (row.category === "safety") c.safety++;
        }
        setCounts(c);
      } else if (error) {
        setCounts({ reach: 0, target: 0, safety: 0 });
      }
      setLoadingCounts(false);
    }
    void load();
  }, [supabase, user]);

  const totalSchools = counts ? counts.reach + counts.target + counts.safety : null;

  return (
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      {/* Gradient header */}
      <header className="relative overflow-hidden border-b border-stone-200/60 dark:border-stone-700/50 bg-gradient-to-br from-orange-50 via-amber-50/30 dark:from-stone-800/60 dark:via-stone-900/30 px-8 py-8" style={{ background: undefined }}>
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/30 to-transparent dark:from-stone-800/60 dark:via-stone-900/40 dark:to-transparent"
        />
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-orange-100/60 dark:bg-orange-900/20 blur-2xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
            Dashboard
          </p>
          <h1 className="font-heading mt-1 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            {displayName ? `Hey, ${displayName}.` : "Welcome back."}
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Here&apos;s everything in one place.
          </p>
        </div>
      </header>

      <div className="px-8 py-8 space-y-8">
        {/* School stats */}
        <div className="grid grid-cols-4 gap-4">
          {loadingCounts ? (
            [0,1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5" style={{ background: "var(--bg-card)" }}>
                <Skeleton className="h-3 w-14" />
                <Skeleton className="mt-3 h-8 w-10" />
                <Skeleton className="mt-1.5 h-2.5 w-12" />
              </div>
            ))
          ) : counts !== null ? (
            [
              { label: "Total", value: counts.reach + counts.target + counts.safety, color: "text-stone-900 dark:text-stone-100", tag: "schools" },
              { label: "Reaches", value: counts.reach, color: "text-rose-600 dark:text-rose-400", tag: "schools" },
              { label: "Targets", value: counts.target, color: "text-amber-600 dark:text-amber-400", tag: "schools" },
              { label: "Safeties", value: counts.safety, color: "text-emerald-600 dark:text-emerald-400", tag: "schools" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${stat.color}`}>{stat.label}</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">{stat.value}</p>
                <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">{stat.tag}</p>
              </div>
            ))
          ) : null}
        </div>

        {/* AI tip teaser — shown only to free users */}
        {!isPro && !loadingCounts && (
          <div className="rounded-2xl border border-orange-200/70 dark:border-orange-900/40 overflow-hidden shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none">
            <div className="flex items-start gap-4 p-5" style={{ background: "var(--bg-card)" }}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/60">
                <Sparkles size={16} className="text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">AI Counselor tip</p>
                  <span className="rounded-full bg-orange-100 dark:bg-orange-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400">Pro</span>
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-snug">
                  {getAiTip(counts)}
                </p>
              </div>
              <Link
                href="/subscribe"
                className="shrink-0 rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
              >
                Unlock AI →
              </Link>
            </div>
            <div className="border-t border-orange-100 dark:border-orange-900/30 bg-orange-50/60 dark:bg-orange-950/10 px-5 py-2.5">
              <p className="text-[11px] text-orange-700/70 dark:text-orange-400/60">
                Pro includes unlimited AI counselor, essay review, and EC strategy — 7-day free trial, cancel anytime.
              </p>
            </div>
          </div>
        )}

        {/* Feature cards */}
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
            Tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              const card = (
                <div
                  className={`group relative flex flex-col rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none transition-all ${
                    f.comingSoon
                      ? "opacity-50"
                      : "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(28,25,23,0.10)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] cursor-pointer"
                  }`}
                  style={{ background: "var(--bg-card)" }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${f.color}`}>
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {f.free && !f.comingSoon && (
                        <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                          Free
                        </span>
                      )}
                      {!f.free && !f.comingSoon && (
                        <span className="rounded-full bg-orange-100 dark:bg-orange-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-400">
                          Pro
                        </span>
                      )}
                      {f.comingSoon ? (
                        <span className="rounded-full bg-stone-100 dark:bg-stone-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-400 dark:text-stone-500">
                          Soon
                        </span>
                      ) : (
                        <ChevronRight
                          size={15}
                          className="mt-0.5 text-stone-300 dark:text-stone-600 transition-transform group-hover:translate-x-0.5 group-hover:text-stone-500 dark:group-hover:text-stone-400"
                        />
                      )}
                    </div>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-stone-900 dark:text-stone-100">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{f.description}</p>
                </div>
              );

              return f.comingSoon ? (
                <div key={f.href}>{card}</div>
              ) : (
                <Link key={f.href} href={f.href} className="block">
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
