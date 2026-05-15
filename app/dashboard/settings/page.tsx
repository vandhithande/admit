"use client";

import { createClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon, CreditCard } from "lucide-react";

const GRADES = [
  { value: 9,  label: "9th grade" },
  { value: 10, label: "10th grade" },
  { value: 11, label: "11th grade" },
  { value: 12, label: "12th grade" },
];

const inputCls =
  "mt-1 w-full rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";
const labelCls = "block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400";
const hintCls = "mt-1 text-xs text-stone-400 dark:text-stone-500";
const cardCls = "rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none";

export default function SettingsPage() {
  const supabase = useMemo(() => createClient(), []);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [subStatus, setSubStatus] = useState<string | null>(null);
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);

  const [profileName, setProfileName] = useState("");
  const [grade, setGrade] = useState("");
  const [intendedMajor, setIntendedMajor] = useState("");
  const [interests, setInterests] = useState("");
  const [gpa, setGpa] = useState("");
  const [satScore, setSatScore] = useState("");
  const [actScore, setActScore] = useState("");
  const [state, setState] = useState("");
  const [extraContext, setExtraContext] = useState("");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const { data: { user: u } } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!u) { setLoading(false); return; }
      setUser(u);

      const { data } = await supabase.from("profiles").select("*").eq("user_id", u.id).single();
      if (cancelled) return;
      if (data) {
        setSubStatus(data.subscription_status ?? null);
        setTrialEndsAt(data.trial_ends_at ?? null);
        setProfileName(data.name ?? "");
        setGrade(data.grade ? String(data.grade) : "");
        setIntendedMajor(data.intended_major ?? "");
        setInterests(data.interests ?? "");
        setGpa(data.gpa ?? "");
        setSatScore(data.sat_score ?? "");
        setActScore(data.act_score ?? "");
        setState(data.state ?? "");
        setExtraContext(data.extra_context ?? "");
      }
      setLoading(false);
    }
    void load();
    return () => { cancelled = true; };
  }, [supabase]);

  async function openBillingPortal() {
    setPortalLoading(true);
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else setPortalLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setError(null);
    setSaved(false);

    const { error: upsertErr } = await supabase.from("profiles").upsert({
      user_id: user.id,
      name: profileName.trim(),
      grade: grade ? parseInt(grade, 10) : null,
      intended_major: intendedMajor.trim(),
      interests: interests.trim(),
      gpa: gpa.trim(),
      sat_score: satScore.trim(),
      act_score: actScore.trim(),
      state: state.trim(),
      extra_context: extraContext.trim(),
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id" });

    setSaving(false);
    if (upsertErr) { setError(upsertErr.message); }
    else { setSaved(true); setTimeout(() => setSaved(false), 3000); }
  }

  const pageContent = (
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Settings</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Profile info and app preferences.
        </p>
      </header>

      <div className="px-8 py-8">
        <div className="mx-auto max-w-lg space-y-8">

          {/* App Settings */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
              App Settings
            </h2>
            <div className={cardCls} style={{ background: "var(--bg-card)" }}>
              <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">Appearance</h3>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Choose how Admit looks to you.
              </p>
              {mounted && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { value: "light", label: "Light", icon: Sun },
                    { value: "dark",  label: "Dark",  icon: Moon },
                    { value: "system", label: "System", icon: Monitor },
                  ].map(({ value, label, icon: Icon }) => {
                    const active = theme === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setTheme(value)}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                          active
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 shadow-sm"
                            : "border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-600 hover:text-stone-700 dark:hover:text-stone-300"
                        }`}
                        style={!active ? { background: "var(--bg-base)" } : undefined}
                      >
                        <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Billing */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
              Billing
            </h2>
            <div className={cardCls} style={{ background: "var(--bg-card)" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} className="text-stone-400" />
                    <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">Admit Premium</h3>
                    {subStatus === "trialing" && (
                      <span className="rounded-full bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
                        Trial
                      </span>
                    )}
                    {subStatus === "active" && (
                      <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                    {subStatus === "trialing" && trialEndsAt
                      ? `Trial ends ${new Date(trialEndsAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`
                      : subStatus === "active"
                      ? "$20 / month"
                      : "No active subscription"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void openBillingPortal()}
                  disabled={portalLoading}
                  className="shrink-0 rounded-xl border border-stone-200 dark:border-stone-700 px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-300 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-50"
                  style={{ background: "var(--bg-base)" }}
                >
                  {portalLoading ? "Loading…" : "Manage billing →"}
                </button>
              </div>
            </div>
          </div>

          {/* Profile Settings */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
              Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Academics */}
              <div className={cardCls} style={{ background: "var(--bg-card)" }}>
                <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">Academics</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className={labelCls}>Your name</label>
                    <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)}
                      placeholder="First name" className={inputCls} style={{ background: "var(--bg-base)" }} />
                  </div>
                  <div>
                    <label className={labelCls}>Current grade</label>
                    <select value={grade} onChange={(e) => setGrade(e.target.value)}
                      className={inputCls} style={{ background: "var(--bg-base)" }}>
                      <option value="">Select grade…</option>
                      {GRADES.map((g) => (
                        <option key={g.value} value={g.value}>{g.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>GPA</label>
                    <input type="text" value={gpa} onChange={(e) => setGpa(e.target.value)}
                      placeholder="3.9 unweighted / 4.5 weighted" className={inputCls}
                      style={{ background: "var(--bg-base)" }} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>SAT score</label>
                      <input type="text" value={satScore} onChange={(e) => setSatScore(e.target.value)}
                        placeholder="1520" className={inputCls} style={{ background: "var(--bg-base)" }} />
                    </div>
                    <div>
                      <label className={labelCls}>ACT score</label>
                      <input type="text" value={actScore} onChange={(e) => setActScore(e.target.value)}
                        placeholder="34" className={inputCls} style={{ background: "var(--bg-base)" }} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>State</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)}
                      placeholder="Texas" className={inputCls} style={{ background: "var(--bg-base)" }} />
                    <p className={hintCls}>Used for regional program and Governors School recommendations</p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className={cardCls} style={{ background: "var(--bg-card)" }}>
                <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">Goals &amp; Interests</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className={labelCls}>Intended major / field</label>
                    <input type="text" value={intendedMajor} onChange={(e) => setIntendedMajor(e.target.value)}
                      placeholder="Biomedical Engineering" className={inputCls} style={{ background: "var(--bg-base)" }} />
                  </div>
                  <div>
                    <label className={labelCls}>Interests &amp; keywords</label>
                    <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
                      placeholder="genetics, robotics, piano, community service" className={inputCls}
                      style={{ background: "var(--bg-base)" }} />
                    <p className={hintCls}>Separate with commas</p>
                  </div>
                </div>
              </div>

              {/* Extra context */}
              <div className={cardCls} style={{ background: "var(--bg-card)" }}>
                <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">Anything else?</h3>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  Awards, specific goals, context about your school, what you&apos;ve already done, etc.
                </p>
                <textarea
                  value={extraContext}
                  onChange={(e) => setExtraContext(e.target.value)}
                  rows={5}
                  placeholder={`Examples:\n• Won state science fair junior year\n• My school only offers 4 APs\n• I want to do MD/PhD, not just pre-med\n• Already did Science Olympiad for 3 years\n• First-generation college student`}
                  className="mt-3 w-full resize-none rounded-xl border border-stone-200 dark:border-stone-700 px-3 py-2 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20"
                  style={{ background: "var(--bg-base)" }}
                />
              </div>

              {error && (
                <p className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3 py-2 text-sm text-red-800 dark:text-red-400">{error}</p>
              )}

              <div className="flex items-center justify-between">
                {saved ? <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Saved.</p> : <span />}
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700 disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Save profile"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex-1" style={{ background: "var(--bg-base)" }}>
        <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Settings</h1>
        </header>
        <div className="px-8 py-8"><p className="text-sm text-stone-500">Loading…</p></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex-1" style={{ background: "var(--bg-base)" }}>
        <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Settings</h1>
        </header>
        <div className="px-8 py-8"><p className="text-sm text-stone-500">Sign in to manage your profile.</p></div>
      </div>
    );
  }

  return pageContent;
}
