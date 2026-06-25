"use client";

import {
  CollegeScorecardCombobox,
  type PickedSchool,
} from "@/components/college-scorecard-combobox";
import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ExternalLink, Check } from "lucide-react";

export type SchoolCategory = "reach" | "target" | "safety";
export type AppStatus = "not_started" | "in_progress" | "submitted" | "decision_received";
export type AppType = "rd" | "ea" | "ed" | "rea" | "scea";
export type Decision = "accepted" | "rejected" | "waitlisted" | "deferred";

export type SchoolRow = {
  id: string;
  user_id: string;
  name: string;
  category: SchoolCategory;
  location: string;
  notes: string;
  acceptance_rate?: number | null;
  deadline?: string | null;
  app_status: AppStatus;
  decision?: Decision | null;
  portal_url?: string;
  app_type: AppType;
  created_at: string;
};

const categoryOrder: SchoolCategory[] = ["reach", "target", "safety"];

const categoryLabels: Record<SchoolCategory, string> = {
  reach: "Reaches",
  target: "Targets",
  safety: "Safeties",
};

const badgeStyles: Record<SchoolCategory, string> = {
  reach:  "border border-rose-200 dark:border-rose-800/60 text-rose-600 dark:text-rose-400",
  target: "border border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400",
  safety: "border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400",
};

const decisionStyles: Record<Decision, string> = {
  accepted:  "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60",
  waitlisted: "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60",
  deferred:  "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60",
  rejected:  "bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700",
};

const STATUS_STEPS: { value: AppStatus; label: string }[] = [
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "submitted", label: "Submitted" },
  { value: "decision_received", label: "Decision" },
];

const APP_TYPES: { value: AppType; label: string }[] = [
  { value: "rd", label: "RD" },
  { value: "ea", label: "EA" },
  { value: "ed", label: "ED" },
  { value: "rea", label: "REA" },
  { value: "scea", label: "SCEA" },
];

const DECISIONS: { value: Decision; label: string }[] = [
  { value: "accepted", label: "Accepted" },
  { value: "waitlisted", label: "Waitlisted" },
  { value: "deferred", label: "Deferred" },
  { value: "rejected", label: "Rejected" },
];

function isSchoolCategory(v: string): v is SchoolCategory {
  return v === "reach" || v === "target" || v === "safety";
}

function isAppStatus(v: string): v is AppStatus {
  return ["not_started", "in_progress", "submitted", "decision_received"].includes(v);
}

function isAppType(v: string): v is AppType {
  return ["rd", "ea", "ed", "rea", "scea"].includes(v);
}

function daysUntil(dateStr: string): number | null {
  const diff = Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86_400_000);
  return diff < 0 ? null : diff;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function sortByDeadline(a: SchoolRow, b: SchoolRow) {
  if (a.deadline && b.deadline) return a.deadline.localeCompare(b.deadline);
  if (a.deadline) return -1;
  if (b.deadline) return 1;
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}

const selectCls = "rounded-lg border border-stone-200 dark:border-stone-700 px-2 py-1 text-xs font-medium text-stone-700 dark:text-stone-300 outline-none focus:border-orange-400 dark:focus:border-orange-500";

type Props = {
  useScorecardSearch?: boolean;
};

export function MySchoolsSection({ useScorecardSearch = false }: Props) {
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [schools, setSchools] = useState<SchoolRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [newCategory, setNewCategory] = useState<SchoolCategory>("target");
  const [newAppType, setNewAppType] = useState<AppType>("rd");
  const [picked, setPicked] = useState<PickedSchool | null>(null);

  const clearPicked = useCallback(() => setPicked(null), []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!u) { setUser(null); setSchools([]); setLoading(false); return; }
      setUser(u);
      const { data, error: qErr } = await supabase
        .from("schools")
        .select("id, user_id, name, category, location, notes, acceptance_rate, deadline, app_status, decision, portal_url, app_type, created_at")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (qErr) { setError(qErr.message); setSchools([]); }
      else {
        setError(null);
        const rows = (data ?? []).map((row) => ({
          ...row,
          category: isSchoolCategory(row.category) ? row.category : ("target" as SchoolCategory),
          app_status: isAppStatus(row.app_status ?? "") ? (row.app_status as AppStatus) : "not_started",
          app_type: isAppType(row.app_type ?? "") ? (row.app_type as AppType) : "rd",
        }));
        setSchools(rows as SchoolRow[]);
      }
      setLoading(false);
    }
    void load();
    return () => { cancelled = true; };
  }, [supabase]);

  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const all = q
      ? schools.filter((s) => s.name.toLowerCase().includes(q) || (s.location ?? "").toLowerCase().includes(q))
      : schools;
    const map: Record<SchoolCategory, SchoolRow[]> = { reach: [], target: [], safety: [] };
    for (const s of all) map[s.category].push(s);
    for (const cat of categoryOrder) map[cat].sort(sortByDeadline);
    return map;
  }, [schools, search]);

  async function patchSchool(id: string, fields: Partial<SchoolRow>) {
    setSchools((prev) => prev.map((s) => s.id === id ? { ...s, ...fields } : s));
    const { error: pErr } = await supabase.from("schools").update(fields).eq("id", id);
    if (pErr) console.error("[patch school]", pErr.message);
  }

  async function addSchool(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const name = picked?.name.trim() ?? "";
    const location = picked?.location.trim() ?? "";
    if (!name) return;
    setSaving(true);
    setError(null);
    const { data, error: insErr } = await supabase
      .from("schools")
      .insert({
        user_id: user.id,
        name,
        category: newCategory,
        location,
        notes: "",
        app_status: "not_started",
        app_type: newAppType,
        ...(picked?.acceptanceRate != null ? { acceptance_rate: picked.acceptanceRate } : {}),
      })
      .select("id, user_id, name, category, location, notes, acceptance_rate, deadline, app_status, decision, portal_url, app_type, created_at")
      .single();
    setSaving(false);
    if (insErr) { setError(insErr.message); return; }
    if (data) {
      setSchools((prev) => [{
        ...data,
        category: isSchoolCategory(data.category) ? data.category : "target",
        app_status: isAppStatus(data.app_status ?? "") ? data.app_status as AppStatus : "not_started",
        app_type: isAppType(data.app_type ?? "") ? data.app_type as AppType : "rd",
      } as SchoolRow, ...prev]);
      setPicked(null);
    }
  }

  async function removeSchool(id: string) {
    setError(null);
    const { error: delErr } = await supabase.from("schools").delete().eq("id", id);
    if (delErr) { setError(delErr.message); return; }
    setSchools((prev) => prev.filter((s) => s.id !== id));
  }

  if (loading) {
    return (
      <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
        <p className="text-sm text-stone-500 dark:text-stone-400">Loading…</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
        <p className="text-sm text-stone-500 dark:text-stone-400">Sign in to build your school list.</p>
      </section>
    );
  }

  const totalSchools = schools.length;
  const submitted = schools.filter((s) => s.app_status === "submitted" || s.app_status === "decision_received").length;
  const accepted = schools.filter((s) => s.decision === "accepted").length;

  return (
    <div className="space-y-6">
      {/* Add form */}
      {useScorecardSearch && (
        <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
          <h2 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100 mb-4">Add a school</h2>
          <form onSubmit={addSchool} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
            <CollegeScorecardCombobox picked={picked} onPicked={setPicked} onClear={clearPicked} />
            <div className="flex gap-2 flex-wrap">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as SchoolCategory)}
                  className="rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20"
                  style={{ background: "var(--bg-base)" }}
                >
                  <option value="reach">Reach</option>
                  <option value="target">Target</option>
                  <option value="safety">Safety</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1">App type</label>
                <select
                  value={newAppType}
                  onChange={(e) => setNewAppType(e.target.value as AppType)}
                  className="rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20"
                  style={{ background: "var(--bg-base)" }}
                >
                  {APP_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={saving || !picked}
                  className="rounded-xl bg-orange-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving ? "Adding…" : "Add School"}
                </button>
              </div>
            </div>
          </form>
          {error && (
            <p className="mt-3 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3 py-2 text-sm text-red-700 dark:text-red-400">{error}</p>
          )}
        </section>
      )}

      {/* Progress summary */}
      {totalSchools > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Schools", value: totalSchools, color: "text-stone-900 dark:text-stone-100" },
            { label: "Submitted", value: submitted, color: "text-blue-600 dark:text-blue-400" },
            { label: "Accepted", value: accepted, color: "text-emerald-600 dark:text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 px-4 py-3" style={{ background: "var(--bg-card)" }}>
              <p className={`text-2xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
              <p className="text-xs text-stone-400 dark:text-stone-500">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* School list grouped by category */}
      <div className="space-y-10">
        {categoryOrder.map((cat) => {
          const list = grouped[cat];
          if (!useScorecardSearch && list.length === 0) return null;
          return (
            <div key={cat}>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                  {categoryLabels[cat]}
                </h3>
                <span className="text-xs text-stone-400 dark:text-stone-500">{list.length}</span>
              </div>
              {list.length === 0 ? (
                <p className="rounded-xl border border-dashed border-stone-200 dark:border-stone-700/60 px-4 py-6 text-center text-sm text-stone-400 dark:text-stone-500">
                  No schools yet.
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {list.map((school) => (
                    <SchoolCard
                      key={school.id}
                      school={school}
                      onPatch={(fields) => void patchSchool(school.id, fields)}
                      onRemove={() => void removeSchool(school.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {totalSchools === 0 && useScorecardSearch && (
        <div className="rounded-2xl border border-dashed border-stone-200 dark:border-stone-700/60 px-6 py-16 text-center" style={{ background: "var(--bg-card)" }}>
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Your list is empty.</p>
          <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">Search for a college above to get started.</p>
        </div>
      )}
    </div>
  );
}

function SchoolCard({
  school,
  onPatch,
  onRemove,
}: {
  school: SchoolRow;
  onPatch: (fields: Partial<SchoolRow>) => void;
  onRemove: () => void;
}) {
  const currentStep = STATUS_STEPS.findIndex((s) => s.value === school.app_status);
  const days = school.deadline && school.app_status !== "submitted" && school.app_status !== "decision_received"
    ? daysUntil(school.deadline)
    : null;
  const isUrgent = days !== null && days <= 14;

  return (
    <div
      className="group flex flex-col rounded-2xl border border-stone-200/80 dark:border-stone-700/60 overflow-hidden shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Decision banner — shown only when decision is received */}
      {school.app_status === "decision_received" && school.decision && (
        <div className={`px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide ${decisionStyles[school.decision]}`}>
          {school.decision === "accepted" && "🎉 "}{school.decision}
        </div>
      )}

      <div className="flex flex-col gap-3 p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-semibold leading-snug text-stone-900 dark:text-stone-100 truncate">{school.name}</p>
            {school.location && (
              <p className="text-xs text-stone-400 dark:text-stone-500 truncate">{school.location}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <select
              value={school.app_type}
              onChange={(e) => onPatch({ app_type: e.target.value as AppType })}
              className={`${selectCls} font-semibold uppercase`}
              style={{ background: "var(--bg-card)" }}
            >
              {APP_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
            <span className={`rounded-md px-2 py-0.5 text-xs font-medium capitalize ${badgeStyles[school.category]}`}>
              {school.category}
            </span>
          </div>
        </div>

        {/* Deadline + acceptance rate row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="flex items-center gap-1">
            <label className="text-xs text-stone-400 dark:text-stone-500 shrink-0">Due:</label>
            <input
              type="date"
              value={school.deadline ?? ""}
              onChange={(e) => onPatch({ deadline: e.target.value || null })}
              className="rounded-lg border border-stone-200 dark:border-stone-700 px-2 py-0.5 text-xs text-stone-700 dark:text-stone-300 outline-none focus:border-orange-400 dark:focus:border-orange-500 [color-scheme:light] dark:[color-scheme:dark]"
              style={{ background: "var(--bg-card)" }}
            />
          </div>
          {days !== null && (
            <span className={`text-xs font-semibold ${isUrgent ? "text-red-500 dark:text-red-400" : "text-stone-400 dark:text-stone-500"}`}>
              {days === 0 ? "Due today!" : days === 1 ? "1 day left" : `${days} days`}
            </span>
          )}
          {school.acceptance_rate != null && (
            <span className="text-xs text-stone-400 dark:text-stone-500">{school.acceptance_rate}% admit rate</span>
          )}
        </div>

        {/* Status stepper */}
        <div className="flex items-center gap-0.5">
          {STATUS_STEPS.map((step, i) => {
            const isDone = i < currentStep;
            const isCurrent = i === currentStep;
            return (
              <button
                key={step.value}
                type="button"
                onClick={() => onPatch({ app_status: step.value, ...(step.value !== "decision_received" ? { decision: null } : {}) })}
                title={step.label}
                className={`flex-1 py-1.5 text-[10px] font-semibold leading-none transition-all first:rounded-l-lg last:rounded-r-lg border ${
                  isDone
                    ? "bg-orange-500 dark:bg-orange-600 border-orange-500 dark:border-orange-600 text-white"
                    : isCurrent
                    ? "bg-orange-100 dark:bg-orange-950/60 border-orange-400 dark:border-orange-600 text-orange-700 dark:text-orange-400"
                    : "border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 hover:border-stone-300 dark:hover:border-stone-600"
                }`}
                style={!isDone && !isCurrent ? { background: "var(--bg-card)" } : undefined}
              >
                {isDone ? <Check size={10} className="mx-auto" /> : step.label.split(" ")[0]}
              </button>
            );
          })}
        </div>

        {/* Decision selector — only shown once "Decision" step is active */}
        {school.app_status === "decision_received" && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 dark:text-stone-500">Decision:</span>
            <select
              value={school.decision ?? ""}
              onChange={(e) => onPatch({ decision: (e.target.value as Decision) || null })}
              className={`${selectCls} flex-1`}
              style={{ background: "var(--bg-card)" }}
            >
              <option value="">Select…</option>
              {DECISIONS.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
            </select>
          </div>
        )}

        {/* Portal URL */}
        <div className="flex items-center gap-2">
          <input
            type="url"
            value={school.portal_url ?? ""}
            onChange={(e) => onPatch({ portal_url: e.target.value })}
            placeholder="Portal URL (optional)"
            className="flex-1 rounded-lg border border-stone-200 dark:border-stone-700 px-2 py-1 text-xs text-stone-600 dark:text-stone-400 outline-none focus:border-orange-400 dark:focus:border-orange-500 placeholder:text-stone-300 dark:placeholder:text-stone-600"
            style={{ background: "var(--bg-card)" }}
          />
          {school.portal_url && (
            <a href={school.portal_url} target="_blank" rel="noopener noreferrer"
              className="shrink-0 rounded-lg border border-stone-200 dark:border-stone-700 p-1.5 text-stone-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              style={{ background: "var(--bg-card)" }}
            >
              <ExternalLink size={12} />
            </a>
          )}
          <button
            type="button"
            onClick={onRemove}
            className="shrink-0 rounded-lg border border-stone-200 dark:border-stone-700 px-2.5 py-1 text-xs text-stone-400 dark:text-stone-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
            style={{ background: "var(--bg-card)" }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
