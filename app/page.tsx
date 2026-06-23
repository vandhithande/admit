import Link from "next/link";
import { AnimatedHero } from "@/components/landing/animated-hero";
import {
  MessageSquare,
  School,
  FileText,
  ListChecks,
  Calendar,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const freeFeatures = [
  {
    icon: School,
    title: "School List Builder",
    description: "Add reach, target, and safety schools. See live acceptance rates for 640+ colleges.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
  },
  {
    icon: Calendar,
    title: "Timeline & Deadlines",
    description: "Track every deadline across every school in one calendar view. Never miss a date.",
    color: "bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400",
  },
  {
    icon: ListChecks,
    title: "Activity Tracker",
    description: "Log your extracurriculars, roles, and hours. Build a complete picture of your profile.",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400",
  },
];

const proFeatures = [
  {
    icon: MessageSquare,
    title: "AI Counselor",
    description: "Named programs, real deadlines, and personalized strategy — grounded in your actual profile.",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-400",
  },
  {
    icon: FileText,
    title: "Essay Review",
    description: "Line-by-line feedback on every draft. Score, strengths, and exactly what to fix.",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400",
  },
  {
    icon: BarChart3,
    title: "Admissions Predictor",
    description: "Grounded admit odds based on your real stats — not generic calculators.",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400",
  },
];

const steps = [
  {
    num: "01",
    title: "Build your school list",
    description: "Search 640+ colleges. Add reaches, targets, and safeties with one click. See acceptance rates instantly.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    num: "02",
    title: "Track everything in one place",
    description: "Deadlines, activities, essay drafts — organized so nothing slips through. Free, forever.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    num: "03",
    title: "Unlock AI when you're ready",
    description: "Upgrade for a private counselor that knows your profile. Specific programs, competitions, and real strategy.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col" style={{ background: "var(--bg-base)" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 dark:border-stone-700/60 backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg-base) 90%, transparent)" }}>
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="font-heading text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
            admit
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 transition-colors hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-orange-600 px-3.5 py-2 font-medium text-white shadow-sm transition-colors hover:bg-orange-700"
            >
              Start free
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <AnimatedHero />

        {/* School logos marquee */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-10 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-8">
            Students applying to
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent" />
            <div className="flex animate-marquee gap-6 whitespace-nowrap">
              {[
                { name: "MIT", domain: "mit.edu" },
                { name: "Harvard", domain: "harvard.edu" },
                { name: "Stanford", domain: "stanford.edu" },
                { name: "Yale", domain: "yale.edu" },
                { name: "Princeton", domain: "princeton.edu" },
                { name: "Columbia", domain: "columbia.edu" },
                { name: "UPenn", domain: "upenn.edu" },
                { name: "Brown", domain: "brown.edu" },
                { name: "Dartmouth", domain: "dartmouth.edu" },
                { name: "Cornell", domain: "cornell.edu" },
                { name: "Duke", domain: "duke.edu" },
                { name: "Northwestern", domain: "northwestern.edu" },
                { name: "Johns Hopkins", domain: "jhu.edu" },
                { name: "Caltech", domain: "caltech.edu" },
                { name: "Chicago", domain: "uchicago.edu" },
                { name: "Georgetown", domain: "georgetown.edu" },
                { name: "Vanderbilt", domain: "vanderbilt.edu" },
                { name: "Rice", domain: "rice.edu" },
                { name: "Notre Dame", domain: "nd.edu" },
                { name: "Emory", domain: "emory.edu" },
                { name: "MIT", domain: "mit.edu" },
                { name: "Harvard", domain: "harvard.edu" },
                { name: "Stanford", domain: "stanford.edu" },
                { name: "Yale", domain: "yale.edu" },
                { name: "Princeton", domain: "princeton.edu" },
                { name: "Columbia", domain: "columbia.edu" },
                { name: "UPenn", domain: "upenn.edu" },
                { name: "Brown", domain: "brown.edu" },
                { name: "Dartmouth", domain: "dartmouth.edu" },
                { name: "Cornell", domain: "cornell.edu" },
                { name: "Duke", domain: "duke.edu" },
                { name: "Northwestern", domain: "northwestern.edu" },
                { name: "Johns Hopkins", domain: "jhu.edu" },
                { name: "Caltech", domain: "caltech.edu" },
                { name: "Chicago", domain: "uchicago.edu" },
                { name: "Georgetown", domain: "georgetown.edu" },
                { name: "Vanderbilt", domain: "vanderbilt.edu" },
                { name: "Rice", domain: "rice.edu" },
                { name: "Notre Dame", domain: "nd.edu" },
                { name: "Emory", domain: "emory.edu" },
              ].map((school, i) => (
                <div
                  key={`${school.domain}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 px-4 py-3 shadow-[0_1px_3px_rgba(28,25,23,0.05)]"
                  style={{ background: "var(--bg-card)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${school.domain}&sz=32`}
                    alt={school.name}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{school.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              How it works
            </div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              Start free. Upgrade when it clicks.
            </h2>
            <p className="mt-3 max-w-xl text-stone-500 dark:text-stone-400">
              Most students start organizing and never go back to spreadsheets. The AI is there when you want it.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-full z-10 hidden h-px w-6 -translate-x-3 border-t-2 border-dashed border-stone-200 dark:border-stone-700 sm:block" />
                  )}
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.bg}`}>
                    <span className={`font-heading text-lg font-bold ${step.color}`}>{step.num}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard mockup */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24 overflow-hidden">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              The workspace
            </div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              Everything in one calm view.
            </h2>
            <p className="mt-3 max-w-xl text-stone-500 dark:text-stone-400">
              No noise, no confusion. Your school list, essays, and AI all in one place.
            </p>

            {/* Mockup */}
            <div className="mt-12 relative">
              {/* Glow behind mockup */}
              <div className="absolute inset-0 -top-8 rounded-3xl bg-orange-500/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-700/60 shadow-[0_32px_80px_rgba(28,25,23,0.15)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]" style={{ background: "var(--bg-card)" }}>
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-stone-200/60 dark:border-stone-700/50 px-4 py-3" style={{ background: "var(--bg-base)" }}>
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/70" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md border border-stone-200 dark:border-stone-700 px-3 text-[11px] text-stone-400" style={{ background: "var(--bg-card)" }}>
                    getadmit.app/dashboard
                  </div>
                </div>

                {/* App chrome */}
                <div className="flex h-[380px]">
                  {/* Sidebar */}
                  <div className="w-44 shrink-0 border-r border-stone-200/60 dark:border-stone-700/50 p-3 flex flex-col gap-0.5" style={{ background: "var(--bg-card)" }}>
                    <div className="px-3 py-2 mb-2">
                      <span className="font-heading text-sm font-bold text-stone-900 dark:text-stone-100">admit</span>
                    </div>
                    {[
                      { label: "Dashboard", active: false },
                      { label: "My Schools", active: true },
                      { label: "Activities", active: false },
                      { label: "Essays", active: false },
                      { label: "AI Counselor ✦", active: false, pro: true },
                    ].map((item) => (
                      <div key={item.label} className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs ${item.active ? "bg-orange-500/10 font-semibold text-orange-600 dark:text-orange-400" : "text-stone-500 dark:text-stone-400"}`}>
                        <span>{item.label}</span>
                        {item.pro && <span className="rounded-full bg-orange-100 dark:bg-orange-950 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400">Pro</span>}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 overflow-hidden p-5" style={{ background: "var(--bg-base)" }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">My Schools</p>

                    {/* Stats row */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { label: "Total", val: "12", color: "text-stone-900 dark:text-stone-100" },
                        { label: "Reach", val: "5", color: "text-rose-600" },
                        { label: "Target", val: "5", color: "text-amber-600" },
                        { label: "Safety", val: "2", color: "text-emerald-600" },
                      ].map((s) => (
                        <div key={s.label} className="rounded-xl border border-stone-200/80 dark:border-stone-700/60 p-3" style={{ background: "var(--bg-card)" }}>
                          <p className={`text-[10px] font-semibold uppercase ${s.color}`}>{s.label}</p>
                          <p className="text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">{s.val}</p>
                        </div>
                      ))}
                    </div>

                    {/* School cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: "MIT", tag: "Reach", rate: "4%", tagColor: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400" },
                        { name: "Stanford", tag: "Reach", rate: "4%", tagColor: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400" },
                        { name: "UT Austin", tag: "Target", rate: "31%", tagColor: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
                        { name: "UCLA", tag: "Target", rate: "8%", tagColor: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
                        { name: "Texas A&M", tag: "Safety", rate: "57%", tagColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" },
                        { name: "Arizona St.", tag: "Safety", rate: "88%", tagColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" },
                      ].map((school) => (
                        <div key={school.name} className="rounded-xl border border-stone-200/80 dark:border-stone-700/60 p-3" style={{ background: "var(--bg-card)" }}>
                          <div className="flex items-start justify-between gap-1">
                            <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 leading-snug">{school.name}</p>
                            <span className={`shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${school.tagColor}`}>{school.tag}</span>
                          </div>
                          <p className="mt-1 text-[10px] text-stone-400">{school.rate} admit rate</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI tip strip at bottom */}
                <div className="border-t border-orange-200/60 dark:border-orange-900/40 bg-orange-50/60 dark:bg-orange-950/20 px-5 py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="shrink-0 text-orange-500" />
                    <p className="text-xs text-orange-900 dark:text-orange-200">
                      <span className="font-semibold">AI tip:</span> You have 5 reaches but MIT and Stanford admit under 5% — consider adding 2 more targets.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-orange-300 dark:border-orange-700 px-3 py-1 text-[10px] font-semibold text-orange-600 dark:text-orange-400 whitespace-nowrap">
                    Unlock AI →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free vs Pro split */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              What you get
            </div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              Free to start. Powerful when you need it.
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Free */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Free forever</span>
                </div>
                <ul className="space-y-4">
                  {freeFeatures.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li key={f.title} className="flex gap-4 rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-5 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
                        <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${f.color}`}>
                          <Icon size={16} strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="font-heading text-sm font-semibold text-stone-900 dark:text-stone-100">{f.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{f.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/signup" className="mt-6 flex w-full items-center justify-center rounded-xl border border-stone-200 dark:border-stone-700 py-3 text-sm font-medium text-stone-600 dark:text-stone-400 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800" style={{ background: "var(--bg-card)" }}>
                  Start free — no card needed
                </Link>
              </div>

              {/* Pro */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="rounded-full bg-orange-100 dark:bg-orange-950/60 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">Pro — $19/mo</span>
                  <span className="text-xs text-stone-400">or $149/yr</span>
                </div>
                <ul className="space-y-4">
                  {proFeatures.map((f) => {
                    const Icon = f.icon;
                    return (
                      <li key={f.title} className="flex gap-4 rounded-2xl border border-orange-200/60 dark:border-orange-900/30 p-5 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none" style={{ background: "var(--bg-card)" }}>
                        <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${f.color}`}>
                          <Icon size={16} strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="font-heading text-sm font-semibold text-stone-900 dark:text-stone-100">{f.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{f.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/subscribe" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700">
                  <Sparkles size={14} />
                  Start 7-day free trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof / trust strip */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-4 sm:grid-cols-3 text-center">
              {[
                { stat: "640+", label: "colleges in our database" },
                { stat: "Free", label: "school list & org tools, forever" },
                { stat: "7-day", label: "free trial on AI features" },
              ].map((item) => (
                <div key={item.stat} className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-8" style={{ background: "var(--bg-card)" }}>
                  <p className="font-heading text-4xl font-bold text-orange-600 dark:text-orange-400">{item.stat}</p>
                  <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-stone-900 dark:bg-stone-950 px-8 py-16 text-center sm:px-16">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-600/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Stop managing this in a spreadsheet.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-stone-400">
                  Free to sign up. Takes 2 minutes to add your schools. AI ready when you want it.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-500 hover:shadow-lg"
                  >
                    <CheckCircle2 size={15} />
                    Start organizing — free
                  </Link>
                  <Link
                    href="/subscribe"
                    className="inline-flex items-center justify-center rounded-xl border border-stone-700 bg-stone-800 px-7 py-3 text-sm font-medium text-stone-200 transition-colors hover:bg-stone-700"
                  >
                    See Pro features
                  </Link>
                </div>
                <p className="mt-4 text-xs text-stone-600">No credit card required to start</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/60 dark:border-stone-700/50 py-8 text-center text-xs text-stone-400 dark:text-stone-500">
        © {new Date().getFullYear()} Admit ·{" "}
        <Link href="/privacy" className="hover:underline">Privacy</Link>{" "}·{" "}
        <Link href="/terms" className="hover:underline">Terms</Link>
      </footer>
    </div>
  );
}
