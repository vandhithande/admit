"use client";

import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type ActivityRow = {
  id: string;
  user_id: string;
  name: string;
  role: string;
  description: string;
  category: string;
  hours_per_week: number | null;
  weeks_per_year: number | null;
  created_at: string;
};

const CATEGORIES = [
  { value: "academic",    label: "Academic / Honor Society" },
  { value: "arts",        label: "Arts" },
  { value: "athletics",   label: "Athletics / Sports" },
  { value: "career",      label: "Career / Professional" },
  { value: "community",   label: "Community Service" },
  { value: "leadership",  label: "Leadership / Student Govt" },
  { value: "research",    label: "Research / Science" },
  { value: "technology",  label: "Technology" },
  { value: "other",       label: "Other" },
] as const;

type CategoryValue = (typeof CATEGORIES)[number]["value"];

const categoryBadge: Record<CategoryValue | string, string> = {
  academic:   "bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 ring-1 ring-inset ring-violet-200/80 dark:ring-violet-800/60",
  arts:       "bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 ring-1 ring-inset ring-pink-200/80 dark:ring-pink-800/60",
  athletics:  "bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 ring-1 ring-inset ring-sky-200/80 dark:ring-sky-800/60",
  career:     "bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 ring-1 ring-inset ring-amber-200/80 dark:ring-amber-800/60",
  community:  "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 ring-1 ring-inset ring-emerald-200/80 dark:ring-emerald-800/60",
  leadership: "bg-orange-50 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 ring-1 ring-inset ring-orange-200/80 dark:ring-orange-800/60",
  research:   "bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-200/80 dark:ring-teal-800/60",
  technology: "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-200/80 dark:ring-blue-800/60",
  other:      "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 ring-1 ring-inset ring-stone-200/80 dark:ring-stone-700/60",
};

function categoryLabel(value: string) {
  return CATEGORIES.find((c) => c.value === value)?.label ?? value;
}

const SLOT_LIMIT = 10;
const DESC_LIMIT = 150;

const inputCls = "mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";
const labelCls = "block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400";

export function ActivitiesSection() {
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<ActivityRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("other");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [weeksPerYear, setWeeksPerYear] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!u) { setUser(null); setActivities([]); setLoading(false); return; }
      setUser(u);
      const { data, error: qErr } = await supabase
        .from("activities")
        .select("id, user_id, name, role, description, category, hours_per_week, weeks_per_year, created_at")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });
      if (cancelled) return;
      if (qErr) setError(qErr.message);
      else setActivities((data ?? []) as ActivityRow[]);
      setLoading(false);
    }
    void load();
    return () => { cancelled = true; };
  }, [supabase]);

  const resetForm = useCallback(() => {
    setName(""); setRole(""); setDescription(""); setCategory("other");
    setHoursPerWeek(""); setWeeksPerYear("");
    nameRef.current?.focus();
  }, []);

  async function addActivity(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !name.trim() || activities.length >= SLOT_LIMIT) return;
    setSaving(true);
    setError(null);
    const { data, error: insErr } = await supabase
      .from("activities")
      .insert({
        user_id: user.id,
        name: name.trim(),
        role: role.trim(),
        description: description.trim(),
        category,
        hours_per_week: hoursPerWeek ? parseInt(hoursPerWeek, 10) : null,
        weeks_per_year: weeksPerYear ? parseInt(weeksPerYear, 10) : null,
      })
      .select()
      .single();
    setSaving(false);
    if (insErr) { setError(insErr.message); return; }
    if (data) { setActivities((prev) => [data as ActivityRow, ...prev]); resetForm(); }
  }

  async function removeActivity(id: string) {
    setError(null);
    const { error: delErr } = await supabase.from("activities").delete().eq("id", id);
    if (delErr) { setError(delErr.message); return; }
    setActivities((prev) => prev.filter((a) => a.id !== id));
  }

  const slotsUsed = activities.length;
  const slotsLeft = SLOT_LIMIT - slotsUsed;
  const atLimit = slotsUsed >= SLOT_LIMIT;

  if (loading) {
    return (
      <div className="space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-20 animate-pulse rounded-2xl border border-stone-200/80 dark:border-stone-700/60" style={{ background: "var(--bg-card)" }} />
        ))}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
        <p className="text-sm text-stone-500">Sign in to track your activities.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Slot tracker */}
      <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5" style={{ background: "var(--bg-card)" }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">Common App slots</p>
          <p className={`text-xs font-semibold ${atLimit ? "text-red-500" : slotsUsed >= 8 ? "text-amber-500" : "text-stone-500 dark:text-stone-400"}`}>
            {slotsUsed} / {SLOT_LIMIT} used
          </p>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: SLOT_LIMIT }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all ${
                i < slotsUsed
                  ? i < 8 ? "bg-orange-500" : "bg-red-400"
                  : "bg-stone-100 dark:bg-stone-700/60"
              }`}
            />
          ))}
        </div>
        {atLimit ? (
          <p className="mt-2 text-xs text-red-500">You've used all 10 slots — the Common App maximum.</p>
        ) : (
          <p className="mt-2 text-xs text-stone-400 dark:text-stone-500">
            {slotsLeft} slot{slotsLeft !== 1 ? "s" : ""} remaining. Colleges see your activities in the order you list them — put your most meaningful ones first.
          </p>
        )}
      </div>

      {/* Add form */}
      {!atLimit && (
        <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
          <h2 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100 mb-4">Add activity</h2>
          <form onSubmit={addActivity} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls}>Activity name <span className="text-red-400">*</span></label>
                <input
                  ref={nameRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Science Olympiad"
                  required
                  className={inputCls}
                  style={{ background: "var(--bg-base)" }}
                />
              </div>
              <div>
                <label className={labelCls}>Role / Position</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Team Captain"
                  className={inputCls}
                  style={{ background: "var(--bg-base)" }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label className={labelCls}>Description</label>
                <span className={`text-xs font-medium ${description.length > DESC_LIMIT ? "text-red-500" : description.length > 120 ? "text-amber-500" : "text-stone-400 dark:text-stone-500"}`}>
                  {description.length} / {DESC_LIMIT}
                </span>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="Led team of 12 to regional finals; designed test strategies for 4 events"
                className={`${inputCls} mt-1 resize-none`}
                style={{ background: "var(--bg-base)" }}
              />
              <p className="mt-1 text-[11px] text-stone-400 dark:text-stone-500">This is the exact text that goes into your Common App (150 char max).</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className={labelCls}>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputCls}
                  style={{ background: "var(--bg-base)" }}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Hrs / week</label>
                <input
                  type="number" min={1} max={168}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  placeholder="5"
                  className={inputCls}
                  style={{ background: "var(--bg-base)" }}
                />
              </div>
              <div>
                <label className={labelCls}>Weeks / year</label>
                <input
                  type="number" min={1} max={52}
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(e.target.value)}
                  placeholder="40"
                  className={inputCls}
                  style={{ background: "var(--bg-base)" }}
                />
              </div>
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3 py-2 text-xs text-red-800 dark:text-red-400">{error}</p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving || !name.trim() || description.length > DESC_LIMIT}
                className="rounded-xl bg-orange-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving ? "Adding…" : "Add activity"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Activity list */}
      <div>
        {activities.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-200 dark:border-stone-700/60 px-6 py-12 text-center" style={{ background: "var(--bg-card)" }}>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">No activities yet.</p>
            <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">Add your first one above. The order here is the order colleges see on your application.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {activities.map((activity, i) => {
              const totalHours = activity.hours_per_week && activity.weeks_per_year
                ? activity.hours_per_week * activity.weeks_per_year
                : null;
              return (
                <div
                  key={activity.id}
                  className="group flex items-start gap-4 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-4 shadow-[0_1px_3px_rgba(28,25,23,0.04)] dark:shadow-none"
                  style={{ background: "var(--bg-card)" }}
                >
                  {/* Slot number */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800 text-xs font-bold text-stone-400 dark:text-stone-500">
                    {i + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{activity.name}</p>
                      {activity.role && (
                        <span className="text-xs text-stone-500 dark:text-stone-400">· {activity.role}</span>
                      )}
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${categoryBadge[activity.category] ?? categoryBadge.other}`}>
                        {categoryLabel(activity.category)}
                      </span>
                    </div>

                    {activity.description && (
                      <p className="mt-1 text-xs leading-relaxed text-stone-600 dark:text-stone-400">{activity.description}</p>
                    )}

                    <div className="mt-1.5 flex flex-wrap gap-3">
                      {activity.hours_per_week && (
                        <span className="text-[11px] text-stone-400 dark:text-stone-500">{activity.hours_per_week} hrs/wk</span>
                      )}
                      {activity.weeks_per_year && (
                        <span className="text-[11px] text-stone-400 dark:text-stone-500">{activity.weeks_per_year} wks/yr</span>
                      )}
                      {totalHours && (
                        <span className="text-[11px] text-stone-400 dark:text-stone-500">≈ {totalHours} hrs total</span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => void removeActivity(activity.id)}
                    className="shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-medium text-stone-400 dark:text-stone-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
