"use client";

import {
  CollegeScorecardCombobox,
  type PickedSchool,
} from "@/components/college-scorecard-combobox";
import { getAcceptanceRateByName } from "@/lib/colleges";
import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useMemo, useState } from "react";

export type SchoolCategory = "reach" | "target" | "safety";

export type SchoolRow = {
  id: string;
  user_id: string;
  name: string;
  category: SchoolCategory;
  location: string;
  notes: string;
  created_at: string;
};

const categoryOrder: SchoolCategory[] = ["reach", "target", "safety"];

const categoryLabels: Record<SchoolCategory, string> = {
  reach: "Reaches",
  target: "Targets",
  safety: "Safeties",
};

const badgeStyles: Record<SchoolCategory, string> = {
  reach:
    "bg-rose-50 text-rose-800 ring-1 ring-inset ring-rose-200/80",
  target:
    "bg-amber-50 text-amber-900 ring-1 ring-inset ring-amber-200/80",
  safety:
    "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200/80",
};

function isSchoolCategory(v: string): v is SchoolCategory {
  return v === "reach" || v === "target" || v === "safety";
}

type Props = {
  /** College Scorecard search combobox + full list (dashboard uses plain search + filter). */
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
  const [picked, setPicked] = useState<PickedSchool | null>(null);

  const clearPicked = useCallback(() => setPicked(null), []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const {
        data: { user: u },
      } = await supabase.auth.getUser();
      if (cancelled) return;

      if (!u) {
        setUser(null);
        setSchools([]);
        setError(null);
        setLoading(false);
        return;
      }

      setUser(u);
      const { data, error: qErr } = await supabase
        .from("schools")
        .select("*")
        .eq("user_id", u.id)
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (qErr) {
        setError(qErr.message);
        setSchools([]);
      } else {
        setError(null);
        const rows = (data ?? []).map((row) => ({
          ...row,
          category: isSchoolCategory(row.category)
            ? row.category
            : ("target" as SchoolCategory),
        }));
        setSchools(rows as SchoolRow[]);
      }
      setLoading(false);
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const filtered = useMemo(() => {
    if (useScorecardSearch) return schools;
    const q = search.trim().toLowerCase();
    if (!q) return schools;
    return schools.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q),
    );
  }, [schools, search, useScorecardSearch]);

  const grouped = useMemo(() => {
    const map: Record<SchoolCategory, SchoolRow[]> = {
      reach: [],
      target: [],
      safety: [],
    };
    for (const s of filtered) {
      map[s.category].push(s);
    }
    return map;
  }, [filtered]);

  async function addSchool(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;

    let name: string;
    let location: string;
    if (useScorecardSearch) {
      if (!picked) return;
      name = picked.name.trim();
      location = picked.location.trim();
    } else {
      name = search.trim();
      location = "";
      if (!name) return;
    }

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
      })
      .select()
      .single();
    setSaving(false);
    if (insErr) {
      setError(insErr.message);
      return;
    }
    if (data) {
      const row = data as SchoolRow;
      setSchools((prev) => [
        {
          ...row,
          category: isSchoolCategory(row.category) ? row.category : "target",
        },
        ...prev,
      ]);
      if (useScorecardSearch) {
        setPicked(null);
      } else {
        setSearch("");
      }
    }
  }

  async function removeSchool(id: string) {
    setError(null);
    const { error: delErr } = await supabase.from("schools").delete().eq("id", id);
    if (delErr) {
      setError(delErr.message);
      return;
    }
    setSchools((prev) => prev.filter((s) => s.id !== id));
  }

  if (loading) {
    return (
      <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
        <p className="text-sm text-stone-500 dark:text-stone-400">Loading schools…</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
        <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100">My Schools</h2>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Sign in to build your school list.</p>
      </section>
    );
  }

  const canSubmit = Boolean(picked);

  return (
    <section className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100">
            My Schools
          </h2>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {useScorecardSearch
              ? "Search for a school, choose reach / target / safety, then add it."
              : "Your school list. Add or remove schools from the Schools page."}
          </p>
        </div>
      </div>

      {useScorecardSearch && (
        <>
          <form
            onSubmit={addSchool}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end"
          >
            <CollegeScorecardCombobox
              picked={picked}
              onPicked={setPicked}
              onClear={clearPicked}
            />
            <div className="w-full sm:w-40">
              <label
                htmlFor="school-category"
                className="block text-xs font-medium uppercase tracking-wide text-neutral-500"
              >
                Category
              </label>
              <select
                id="school-category"
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(e.target.value as SchoolCategory)
                }
                className="mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20"
              style={{ background: "var(--bg-base)" }}
              >
                <option value="reach">Reach</option>
                <option value="target">Target</option>
                <option value="safety">Safety</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={saving || !canSubmit}
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50 sm:shrink-0"
            >
              {saving ? "Adding…" : "Add School"}
            </button>
          </form>

          {error ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
              {error}
            </p>
          ) : null}
        </>
      )}

      <div className="mt-8 space-y-10">
        {categoryOrder.map((cat) => {
          const list = grouped[cat];
          return (
            <div key={cat}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                {categoryLabels[cat]}
              </h3>
              {list.length === 0 ? (
                <p className="mt-3 rounded-xl border border-dashed border-stone-200 dark:border-stone-700/60 px-4 py-6 text-center text-sm text-stone-400 dark:text-stone-500">
                  No schools in this bucket yet.
                </p>
              ) : (
                <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((school) => {
                    const rate = getAcceptanceRateByName(school.name);
                    return (
                      <li
                        key={school.id}
                        className="flex flex-col rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-4 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none"
                        style={{ background: "var(--bg-base)" }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="min-w-0 font-medium leading-snug text-stone-900 dark:text-stone-100">
                            {school.name}
                          </p>
                          <span
                            className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium capitalize ${badgeStyles[school.category]}`}
                          >
                            {school.category}
                          </span>
                        </div>
                        {school.location ? (
                          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                            {school.location}
                          </p>
                        ) : null}
                        {rate != null ? (
                          <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-300">
                            {rate}% acceptance rate
                          </p>
                        ) : null}
                        {useScorecardSearch && (
                          <div className="mt-4 flex justify-end">
                            <button
                              type="button"
                              onClick={() => void removeSchool(school.id)}
                              className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-800"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
