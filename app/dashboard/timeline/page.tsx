"use client";

import { useUser } from "@/components/user-context";
import { CheckCircle2, Circle, Clock } from "lucide-react";

type DeadlineType = "system" | "warning" | "milestone";

const DEADLINES: {
  date: string;
  label: string;
  detail: string;
  type: DeadlineType;
}[] = [
  {
    date: "2026-08-01",
    label: "Common App opens",
    detail: "The application portal opens for the 2026–27 cycle. Start filling in your activities and awards sections.",
    type: "milestone",
  },
  {
    date: "2026-10-01",
    label: "FAFSA opens",
    detail: "File your FAFSA as early as possible. Aid is first-come, first-served at many schools.",
    type: "warning",
  },
  {
    date: "2026-10-15",
    label: "QuestBridge National College Match",
    detail: "For high-achieving, low-income students. Schools include Yale, Princeton, Stanford, MIT, and 40+ others.",
    type: "system",
  },
  {
    date: "2026-11-01",
    label: "Early Action / SCEA / REA deadlines",
    detail: "Harvard SCEA, Yale SCEA, Princeton SCEA, Stanford REA, MIT EA, Georgetown EA, Notre Dame EA. Apply to your top school early.",
    type: "system",
  },
  {
    date: "2026-11-15",
    label: "Second EA wave",
    detail: "Carnegie Mellon EA, UChicago EA, Caltech EA. Check each school — dates shift year to year.",
    type: "system",
  },
  {
    date: "2026-12-01",
    label: "Third EA / ED II wave",
    detail: "UVA EA, Georgia Tech EA, Tulane ED II, many other schools. Double-check portals.",
    type: "system",
  },
  {
    date: "2026-12-15",
    label: "EA decisions released",
    detail: "Most Early Action and SCEA decisions arrive mid-December. Check your portals and email.",
    type: "milestone",
  },
  {
    date: "2027-01-01",
    label: "Regular Decision deadline — most schools",
    detail: "The Common App RD deadline for the majority of colleges. Check your specific list — some are Jan 2, Jan 5, or Jan 15.",
    type: "system",
  },
  {
    date: "2027-01-15",
    label: "RD wave 2",
    detail: "Johns Hopkins, Rice, and several others. UC schools had an Oct 31 deadline — don't miss it.",
    type: "system",
  },
  {
    date: "2027-02-01",
    label: "Rolling / late RD schools",
    detail: "Penn State, Indiana, Michigan State, and many rolling-admissions schools close or fill up fast after this date.",
    type: "system",
  },
  {
    date: "2027-03-01",
    label: "CSS Profile priority deadline",
    detail: "Many schools require CSS Profile for institutional aid. File before March to maximize your aid package.",
    type: "warning",
  },
  {
    date: "2027-04-01",
    label: "Regular decisions released",
    detail: "Most RD decisions arrive April 1. Some schools release earlier. Check each school's decision date.",
    type: "milestone",
  },
  {
    date: "2027-05-01",
    label: "National Reply Date — enrollment deposit due",
    detail: "You must commit to one school and pay your enrollment deposit by May 1. This is the hard deadline — missing it forfeits your spot.",
    type: "warning",
  },
];

function getStatus(dateStr: string): "past" | "soon" | "upcoming" {
  const now = new Date();
  const d = new Date(dateStr);
  const diffDays = Math.ceil((d.getTime() - now.getTime()) / 86_400_000);
  if (diffDays < 0) return "past";
  if (diffDays <= 30) return "soon";
  return "upcoming";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function daysUntil(dateStr: string) {
  const diff = Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86_400_000);
  if (diff < 0) return null;
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff <= 30) return `${diff} days`;
  return null;
}

const typeColor: Record<DeadlineType, string> = {
  system: "bg-blue-500",
  warning: "bg-amber-500",
  milestone: "bg-emerald-500",
};

const typeDot: Record<DeadlineType, string> = {
  system: "border-blue-400 dark:border-blue-500",
  warning: "border-amber-400 dark:border-amber-500",
  milestone: "border-emerald-400 dark:border-emerald-500",
};

export default function TimelinePage() {
  const { profile } = useUser();
  const grade = profile?.grade ?? null;

  const upcoming = DEADLINES.filter((d) => getStatus(d.date) !== "past");
  const past = DEADLINES.filter((d) => getStatus(d.date) === "past");
  const nextDeadline = upcoming[0] ?? null;

  return (
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Timeline</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Key dates for the 2026–27 admissions cycle.
          {grade && grade < 12 && " You're ahead of most — use this time well."}
        </p>
      </header>

      <div className="px-8 py-8 max-w-2xl">
        {/* Next up banner */}
        {nextDeadline && getStatus(nextDeadline.date) === "soon" && (
          <div className="mb-8 flex items-start gap-4 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 px-5 py-4">
            <Clock size={16} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">Coming up soon</p>
              <p className="mt-0.5 text-sm font-semibold text-stone-900 dark:text-stone-100">{nextDeadline.label}</p>
              <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                {formatDate(nextDeadline.date)} — {daysUntil(nextDeadline.date)}
              </p>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          {[
            { color: "bg-blue-500", label: "Application deadline" },
            { color: "bg-amber-500", label: "Financial aid" },
            { color: "bg-emerald-500", label: "Milestone" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${l.color}`} />
              <span className="text-xs text-stone-400 dark:text-stone-500">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Upcoming deadlines */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-stone-200 dark:bg-stone-700/60" />

          <div className="space-y-1">
            {upcoming.map((item) => {
              const status = getStatus(item.date);
              const countdown = daysUntil(item.date);
              return (
                <div key={item.date} className="relative pl-8">
                  {/* Dot */}
                  <div className={`absolute left-0 top-[18px] flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 ${status === "soon" ? typeDot[item.type] : "border-stone-300 dark:border-stone-600"} bg-white dark:bg-stone-900`}>
                    {status === "soon" && (
                      <div className={`h-[5px] w-[5px] rounded-full ${typeColor[item.type]}`} />
                    )}
                  </div>

                  <div className={`rounded-2xl border p-4 mb-3 transition-all ${
                    status === "soon"
                      ? "border-stone-200 dark:border-stone-700 shadow-[0_2px_8px_rgba(28,25,23,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      : "border-stone-100 dark:border-stone-800/60"
                  }`} style={{ background: "var(--bg-card)" }}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <div className={`h-2 w-2 shrink-0 rounded-full ${typeColor[item.type]}`} />
                          <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.label}</p>
                        </div>
                        <p className="text-xs text-stone-400 dark:text-stone-500">{formatDate(item.date)}</p>
                        <p className="mt-2 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{item.detail}</p>
                      </div>
                      {countdown && (
                        <span className="shrink-0 rounded-lg bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 whitespace-nowrap">
                          {countdown}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Past deadlines */}
        {past.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">Past</p>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-stone-100 dark:bg-stone-800" />
              <div className="space-y-1">
                {past.map((item) => (
                  <div key={item.date} className="relative pl-8">
                    <div className="absolute left-0 top-[18px] flex h-[15px] w-[15px] items-center justify-center">
                      <CheckCircle2 size={13} className="text-stone-300 dark:text-stone-600" />
                    </div>
                    <div className="mb-2 rounded-2xl border border-stone-100 dark:border-stone-800/40 px-4 py-3 opacity-50" style={{ background: "var(--bg-card)" }}>
                      <p className="text-xs font-medium text-stone-500 dark:text-stone-400">{item.label}</p>
                      <p className="text-[11px] text-stone-400 dark:text-stone-500">{formatDate(item.date)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <p className="mt-8 text-xs text-stone-400 dark:text-stone-500">
          Dates are for the 2026–27 admissions cycle. Always verify deadlines on each school&apos;s official website — they shift year to year.
        </p>
      </div>
    </div>
  );
}
