"use client";

import { createClient } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const GRADES = [
  { value: 9,  label: "9th grade" },
  { value: 10, label: "10th grade" },
  { value: 11, label: "11th grade" },
  { value: 12, label: "12th grade" },
];

type Phase = "entering" | "visible" | "exiting";

const phaseClass: Record<Phase, string> = {
  entering: "opacity-0 translate-y-8",
  visible:  "opacity-100 translate-y-0",
  exiting:  "opacity-0 -translate-y-5",
};

const inputCls =
  "w-full rounded-xl border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";
const labelCls = "block text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-1.5";

export default function OnboardingPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<Phase>("entering");
  const [saving, setSaving] = useState(false);

  // Step 1
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [intendedMajor, setIntendedMajor] = useState("");
  const [interests, setInterests] = useState("");

  // Step 2
  const [gpa, setGpa] = useState("");
  const [satScore, setSatScore] = useState("");
  const [actScore, setActScore] = useState("");
  const [state, setState] = useState("");
  const [extraContext, setExtraContext] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.replace("/login"); return; }
      setUserId(user.id);
    });
  }, [supabase, router]);

  // Animate in on mount
  useEffect(() => {
    const t = setTimeout(() => setPhase("visible"), 60);
    return () => clearTimeout(t);
  }, []);

  // Focus first input after entering
  useEffect(() => {
    if (phase === "visible") {
      const t = setTimeout(() => firstInputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [phase, step]);

  function transition(cb: () => void) {
    setPhase("exiting");
    setTimeout(() => {
      cb();
      setPhase("entering");
      setTimeout(() => setPhase("visible"), 60);
    }, 380);
  }

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    transition(() => setStep(2));
  }

  async function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    if (!userId) return;
    setSaving(true);

    const payload = {
      user_id: userId,
      name: name.trim(),
      grade: grade ? parseInt(grade, 10) : null,
      intended_major: intendedMajor.trim(),
      interests: interests.trim(),
      gpa: gpa.trim(),
      sat_score: satScore.trim(),
      act_score: actScore.trim(),
      state: state.trim(),
      extra_context: extraContext.trim(),
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from("profiles").upsert(payload, { onConflict: "user_id" });

    // If name column doesn't exist yet (migration pending), retry without it
    if (error) {
      const { name: _n, ...payloadWithoutName } = payload;
      ({ error } = await supabase.from("profiles").upsert(payloadWithoutName, { onConflict: "user_id" }));
    }

    setSaving(false);
    transition(() => {});
    setTimeout(() => router.push("/dashboard"), 400);
  }

  async function skip() {
    if (!userId) { router.push("/dashboard"); return; }
    if (name.trim() || grade || intendedMajor.trim()) {
      await supabase.from("profiles").upsert({
        user_id: userId,
        name: name.trim(),
        grade: grade ? parseInt(grade, 10) : null,
        intended_major: intendedMajor.trim(),
        interests: interests.trim(),
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" });
    }
    router.push("/dashboard");
  }

  const totalSteps = 2;

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-100/50 dark:bg-orange-950/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-amber-100/40 dark:bg-amber-950/15 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 py-6">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
          admit
        </Link>
        <button
          type="button"
          onClick={() => void skip()}
          className="text-sm text-stone-400 dark:text-stone-500 transition-colors hover:text-stone-700 dark:hover:text-stone-300"
        >
          Skip for now →
        </button>
      </div>

      {/* Progress dots */}
      <div className="relative flex justify-center gap-2 pt-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i + 1 === step
                ? "w-6 bg-orange-500"
                : i + 1 < step
                ? "w-6 bg-orange-300 dark:bg-orange-700"
                : "w-1.5 bg-stone-200 dark:bg-stone-700"
            }`}
          />
        ))}
      </div>

      {/* Step content */}
      <div className="relative flex flex-1 items-center justify-center px-6 py-12">
        <div
          className={`w-full max-w-md transition-all duration-[380ms] ease-in-out ${phaseClass[phase]}`}
        >
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
                  Step 1 of 2
                </p>
                <h1 className="font-heading mt-2 text-4xl font-semibold leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
                  Let&apos;s get to<br />know you.
                </h1>
                <p className="mt-3 text-base text-stone-500 dark:text-stone-400">
                  Tell us a bit about yourself so we can personalize your experience.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Your name</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  />
                </div>

                <div>
                  <label className={labelCls}>Current grade</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  >
                    <option value="">Select your grade…</option>
                    {GRADES.map((g) => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>What do you want to study?</label>
                  <input
                    type="text"
                    value={intendedMajor}
                    onChange={(e) => setIntendedMajor(e.target.value)}
                    placeholder="Computer Science, Biology, Undecided…"
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  />
                </div>

                <div>
                  <label className={labelCls}>What are you into?</label>
                  <input
                    type="text"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    placeholder="robotics, writing, tennis, research…"
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  />
                  <p className="mt-1.5 text-xs text-stone-400 dark:text-stone-500">Separate with commas</p>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-700 hover:shadow-lg"
              >
                Continue
                <span className="text-base">→</span>
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleStep2} className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400">
                  Step 2 of 2
                </p>
                <h1 className="font-heading mt-2 text-4xl font-semibold leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-5xl">
                  Where are you<br />academically?
                </h1>
                <p className="mt-3 text-base text-stone-500 dark:text-stone-400">
                  This helps your AI counselor calibrate advice to your actual profile.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelCls}>GPA</label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                    placeholder="3.9 unweighted / 4.5 weighted"
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelCls}>SAT score</label>
                    <input
                      type="text"
                      value={satScore}
                      onChange={(e) => setSatScore(e.target.value)}
                      placeholder="1520"
                      className={inputCls}
                      style={{ background: "var(--bg-card)" }}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>ACT score</label>
                    <input
                      type="text"
                      value={actScore}
                      onChange={(e) => setActScore(e.target.value)}
                      placeholder="34"
                      className={inputCls}
                      style={{ background: "var(--bg-card)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Texas"
                    className={inputCls}
                    style={{ background: "var(--bg-card)" }}
                  />
                </div>

                <div>
                  <label className={labelCls}>Anything else we should know?</label>
                  <textarea
                    value={extraContext}
                    onChange={(e) => setExtraContext(e.target.value)}
                    rows={3}
                    placeholder={"e.g. Won state science fair, first-gen student, school only offers 4 APs…"}
                    className={`${inputCls} resize-none`}
                    style={{ background: "var(--bg-card)" }}
                  />
                  <p className="mt-1.5 text-xs text-stone-400 dark:text-stone-500">Optional — totally fine to leave blank</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => transition(() => setStep(1))}
                  className="flex items-center justify-center rounded-xl border border-stone-200 dark:border-stone-700 px-5 py-3.5 text-sm font-medium text-stone-600 dark:text-stone-400 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800"
                  style={{ background: "var(--bg-card)" }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-700 hover:shadow-lg disabled:opacity-60"
                >
                  {saving ? "Saving…" : (
                    <>Let&apos;s go <span className="text-base">→</span></>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-stone-400 dark:text-stone-500">
                You can always update this in Settings later.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
