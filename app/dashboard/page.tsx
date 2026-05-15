"use client";

import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  School,
  MessageSquare,
  FileText,
  ListChecks,
  Calendar,
  ChevronRight,
  BarChart2,
} from "lucide-react";

type SchoolCounts = { reach: number; target: number; safety: number };

const features = [
  {
    href: "/dashboard/schools",
    icon: School,
    title: "My Schools",
    description: "Build and organize your college list by reach, target, and safety.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    href: "/dashboard/counselor",
    icon: MessageSquare,
    title: "AI Counselor",
    description: "Get specific program, competition, and course recommendations.",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
  {
    href: "/dashboard/activities",
    icon: ListChecks,
    title: "Activities",
    description: "Track your extracurriculars and build a compelling storyline.",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    href: "/dashboard/essays",
    icon: FileText,
    title: "Essays",
    description: "Draft and refine your Common App and supplemental essays.",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
    comingSoon: true,
  },
  {
    href: "/dashboard/timeline",
    icon: Calendar,
    title: "Timeline",
    description: "Stay on top of deadlines and milestones for every school.",
    color: "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400",
    comingSoon: true,
  },
  {
    href: "/dashboard/predictor",
    icon: BarChart2,
    title: "Admissions Predictor",
    description: "See your estimated chances at any school based on your real profile.",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",
    comingSoon: true,
  },
];

export default function DashboardPage() {
  const supabase = useMemo(() => createClient(), []);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [counts, setCounts] = useState<SchoolCounts | null>(null);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: profile }, { data: schools }] = await Promise.all([
        supabase.from("profiles").select("name").eq("user_id", user.id).single(),
        supabase.from("schools").select("category").eq("user_id", user.id),
      ]);

      const name = profile?.name?.trim();
      setDisplayName(name || user.email?.split("@")[0] || null);

      const data = schools;

      if (data) {
        const c = { reach: 0, target: 0, safety: 0 };
        for (const row of data) {
          if (row.category === "reach") c.reach++;
          else if (row.category === "target") c.target++;
          else if (row.category === "safety") c.safety++;
        }
        setCounts(c);
      }
    }
    void load();
  }, [supabase]);

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
        {counts !== null && totalSchools !== null && (
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total", value: totalSchools, color: "text-stone-900 dark:text-stone-100", tag: "schools" },
              { label: "Reaches", value: counts.reach, color: "text-rose-600 dark:text-rose-400", tag: "schools" },
              { label: "Targets", value: counts.target, color: "text-amber-600 dark:text-amber-400", tag: "schools" },
              { label: "Safeties", value: counts.safety, color: "text-emerald-600 dark:text-emerald-400", tag: "schools" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none"
                style={{ background: "var(--bg-card)" }}
              >
                <p className={`text-xs font-semibold uppercase tracking-wide ${stat.color}`}>
                  {stat.label}
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-500">{stat.tag}</p>
              </div>
            ))}
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
