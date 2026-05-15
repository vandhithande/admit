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
  academic:   "bg-violet-50 text-violet-800 ring-1 ring-inset ring-violet-200/80",
  arts:       "bg-pink-50 text-pink-800 ring-1 ring-inset ring-pink-200/80",
  athletics:  "bg-sky-50 text-sky-800 ring-1 ring-inset ring-sky-200/80",
  career:     "bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200/80",
  community:  "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200/80",
  leadership: "bg-orange-50 text-orange-900 ring-1 ring-inset ring-orange-200/80",
  research:   "bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200/80",
  technology: "bg-blue-50 text-blue-800 ring-1 ring-inset ring-blue-200/80",
  other:      "bg-neutral-100 text-neutral-700 ring-1 ring-inset ring-neutral-200/80",
};

function categoryLabel(value: string) {
  return CATEGORIES.find((c) => c.value === value)?.label ?? value;
}

const DESC_LIMIT = 150;

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

      if (!u) {
        setUser(null);
        setActivities([]);
        setLoading(false);
        return;
      }

      setUser(u);
      const { data, error: qErr } = await supabase
        .from("activities")
        .select("*")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (qErr) {
        setError(qErr.message);
      } else {
        setActivities((data ?? []) as ActivityRow[]);
      }
      setLoading(false);
    }

    void load();
    return () => { cancelled = true; };
  }, [supabase]);

  const resetForm = useCallback(() => {
    setName("");
    setRole("");
    setDescription("");
    setCategory("other");
    setHoursPerWeek("");
    setWeeksPerYear("");
    nameRef.current?.focus();
  }, []);

  async function addActivity(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !name.trim()) return;

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

    if (insErr) {
      setError(insErr.message);
      return;
    }
    if (data) {
      setActivities((prev) => [data as ActivityRow, ...prev]);
      resetForm();
    }
  }

  async function removeActivity(id: string) {
    setError(null);
    const { error: delErr } = await supabase
      .from("activities")
      .delete()
      .eq("id", id);
    if (delErr) {
      setError(delErr.message);
      return;
    }
    setActivities((prev) => prev.filter((a) => a.id !== id));
  }

  if (loading) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <p className="text-sm text-neutral-500">Loading activities…</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <h2 className="font-heading text-lg font-semibold text-neutral-900">Activities</h2>
        <p className="mt-2 text-sm text-neutral-600">Sign in to track your activities.</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <h2 className="font-heading text-lg font-semibold text-neutral-900">Activities</h2>
      <p className="mt-1 text-sm text-neutral-600">
        Log your extracurriculars. Descriptions are capped at {DESC_LIMIT} characters — the Common App limit.
      </p>

      <form onSubmit={addActivity} className="mt-6 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Activity name <span className="text-red-500">*</span>
            </label>
            <input
              ref={nameRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Science Olympiad"
              required
              className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Role / Position
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Team Captain"
              className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Description
            </label>
            <span className={`text-xs ${description.length > DESC_LIMIT ? "text-red-600" : "text-neutral-400"}`}>
              {description.length}/{DESC_LIMIT}
            </span>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            placeholder="Led team of 12 to regional finals; designed test strategies for 4 events"
            className="mt-1 w-full resize-none rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Hrs / week
            </label>
            <input
              type="number"
              min={1}
              max={168}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              placeholder="5"
              className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-neutral-500">
              Weeks / year
            </label>
            <input
              type="number"
              min={1}
              max={52}
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(e.target.value)}
              placeholder="40"
              className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving || !name.trim() || description.length > DESC_LIMIT}
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Adding…" : "Add Activity"}
          </button>
        </div>
      </form>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}

      <div className="mt-8">
        {activities.length === 0 ? (
          <p className="rounded-lg border border-dashed border-neutral-200 bg-neutral-50/50 px-4 py-8 text-center text-sm text-neutral-500">
            No activities yet. Add your first one above.
          </p>
        ) : (
          <ul className="space-y-3">
            {activities.map((activity, i) => (
              <li
                key={activity.id}
                className="flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-neutral-400">#{i + 1}</span>
                      <p className="font-medium text-neutral-900">{activity.name}</p>
                      {activity.role && (
                        <span className="text-sm text-neutral-500">{activity.role}</span>
                      )}
                      <span
                        className={`rounded-md px-2 py-0.5 text-xs font-medium ${categoryBadge[activity.category] ?? categoryBadge.other}`}
                      >
                        {categoryLabel(activity.category)}
                      </span>
                    </div>
                    {activity.description && (
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                        {activity.description}
                      </p>
                    )}
                    {(activity.hours_per_week || activity.weeks_per_year) && (
                      <p className="mt-1 text-xs text-neutral-400">
                        {[
                          activity.hours_per_week ? `${activity.hours_per_week} hrs/wk` : null,
                          activity.weeks_per_year ? `${activity.weeks_per_year} wks/yr` : null,
                        ]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => void removeActivity(activity.id)}
                    className="shrink-0 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
