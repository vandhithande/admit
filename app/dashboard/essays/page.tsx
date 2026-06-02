"use client";

import { useState } from "react";
import { ProGate } from "@/components/pro-gate";
import { FileText, Loader2, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Lightbulb, MessageSquare } from "lucide-react";

const ESSAY_TYPES = [
  { value: "common_app_personal", label: "Common App Personal Statement" },
  { value: "why_school", label: "Why This School" },
  { value: "why_major", label: "Why This Major" },
  { value: "extracurricular", label: "Extracurricular / Activity" },
  { value: "community", label: "Community / Background" },
  { value: "challenge", label: "Challenge / Obstacle" },
  { value: "short_answer", label: "Short Answer" },
  { value: "other", label: "Other Supplement" },
];

const inputCls = "w-full rounded-xl border border-stone-200 dark:border-stone-700 px-3.5 py-2.5 text-sm text-stone-900 dark:text-stone-100 outline-none transition placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:border-orange-400 dark:focus:border-orange-500 focus:ring-2 focus:ring-orange-400/20";
const labelCls = "block text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-1.5";

type Feedback = {
  score: number;
  headline: string;
  overall: string;
  strengths: string[];
  improvements: string[];
  lineFeedback: { quote: string; comment: string }[];
  promptAddress: string;
  admissionsNote: string;
};

function ScoreRing({ score }: { score: number }) {
  const color = score >= 8 ? "text-emerald-500" : score >= 6 ? "text-amber-500" : "text-red-500";
  const bg = score >= 8 ? "bg-emerald-50 dark:bg-emerald-950/40" : score >= 6 ? "bg-amber-50 dark:bg-amber-950/40" : "bg-red-50 dark:bg-red-950/40";
  return (
    <div className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl ${bg}`}>
      <span className={`font-heading text-3xl font-bold ${color}`}>{score}</span>
      <span className="text-[10px] text-stone-400">/10</span>
    </div>
  );
}

export default function EssaysPage() {
  const [essayType, setEssayType] = useState("common_app_personal");
  const [schoolName, setSchoolName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [essay, setEssay] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>("strengths");

  const liveWordCount = essay.trim() ? essay.trim().split(/\s+/).length : 0;

  async function handleReview() {
    if (!essay.trim()) return;
    setLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const res = await fetch("/api/essay-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essay, essayType, schoolName, prompt }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      setFeedback(data.feedback);
      setWordCount(data.wordCount);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function Section({ id, icon: Icon, title, children, color }: {
    id: string; icon: React.ElementType; title: string; children: React.ReactNode; color: string;
  }) {
    const open = expandedSection === id;
    return (
      <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 overflow-hidden" style={{ background: "var(--bg-card)" }}>
        <button
          className="flex w-full items-center justify-between px-5 py-4 text-left"
          onClick={() => setExpandedSection(open ? null : id)}
        >
          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${color}`}>
              <Icon size={15} />
            </div>
            <span className="font-heading text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</span>
          </div>
          {open ? <ChevronUp size={16} className="text-stone-400" /> : <ChevronDown size={16} className="text-stone-400" />}
        </button>
        {open && <div className="border-t border-stone-100 dark:border-stone-800 px-5 py-4">{children}</div>}
      </div>
    );
  }

  return (
    <ProGate feature="Essay Review">
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      <header className="relative overflow-hidden border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-8" style={{ background: "var(--bg-card)" }}>
        <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-violet-100/40 dark:bg-violet-900/10 blur-2xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400">Essays</p>
          <h1 className="font-heading mt-1 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Essay Review</h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Paste your draft and get structured, honest feedback from your AI coach.
          </p>
        </div>
      </header>

      <div className="px-8 py-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Input form */}
          <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)]" style={{ background: "var(--bg-card)" }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls}>Essay type</label>
                <select value={essayType} onChange={(e) => setEssayType(e.target.value)} className={inputCls} style={{ background: "var(--bg-base)" }}>
                  {ESSAY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>School (optional)</label>
                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="e.g. MIT, Stanford…" className={inputCls} style={{ background: "var(--bg-base)" }} />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelCls}>Prompt (optional)</label>
              <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}
                placeholder="Paste the essay prompt here…" className={inputCls} style={{ background: "var(--bg-base)" }} />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-1.5">
                <label className={labelCls.replace("mb-1.5", "")}>Your essay</label>
                <span className={`text-xs font-medium ${liveWordCount > 650 ? "text-red-500" : liveWordCount > 550 ? "text-amber-500" : "text-stone-400"}`}>
                  {liveWordCount} words
                </span>
              </div>
              <textarea
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                rows={14}
                placeholder="Paste your essay draft here…"
                className={`${inputCls} resize-none font-mono text-xs leading-relaxed`}
                style={{ background: "var(--bg-base)" }}
              />
            </div>

            {error && (
              <p className="mt-3 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/50 px-3.5 py-2.5 text-sm text-red-800 dark:text-red-400">{error}</p>
            )}

            <button
              onClick={() => void handleReview()}
              disabled={loading || !essay.trim()}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Analyzing essay…</>
              ) : (
                <><FileText size={15} /> Get feedback</>
              )}
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className="space-y-4">
              {/* Score + headline */}
              <div className="flex items-start gap-5 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)]" style={{ background: "var(--bg-card)" }}>
                <ScoreRing score={feedback.score} />
                <div>
                  <p className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">{feedback.headline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{feedback.overall}</p>
                  <p className="mt-2 text-xs text-stone-400 dark:text-stone-500">{wordCount} words reviewed</p>
                </div>
              </div>

              <Section id="strengths" icon={CheckCircle2} title="Strengths" color="bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <ul className="space-y-2">
                  {feedback.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section id="improvements" icon={AlertCircle} title="What to Improve" color="bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                <ul className="space-y-2">
                  {feedback.improvements.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <AlertCircle size={14} className="mt-0.5 shrink-0 text-amber-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section id="lines" icon={MessageSquare} title="Line-by-Line Notes" color="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <div className="space-y-4">
                  {feedback.lineFeedback.map((l, i) => (
                    <div key={i}>
                      <p className="rounded-lg border-l-2 border-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-2 text-xs italic text-stone-600 dark:text-stone-400">&ldquo;{l.quote}&rdquo;</p>
                      <p className="mt-1.5 text-sm text-stone-700 dark:text-stone-300">{l.comment}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="prompt" icon={Lightbulb} title="Prompt & Admissions Take" color="bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">Prompt address</p>
                    <p className="text-sm text-stone-700 dark:text-stone-300">{feedback.promptAddress}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">Admissions officer perspective</p>
                    <p className="text-sm text-stone-700 dark:text-stone-300">{feedback.admissionsNote}</p>
                  </div>
                </div>
              </Section>
            </div>
          )}
        </div>
      </div>
    </div>
    </ProGate>
  );
}
