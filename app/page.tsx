import Link from "next/link";
import { AnimatedHero } from "@/components/landing/animated-hero";
import { MessageSquare, School, FileText, ListChecks, Calendar, BarChart3 } from "lucide-react";

const schools = [
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
  { name: "UChicago", domain: "uchicago.edu" },
  { name: "Georgetown", domain: "georgetown.edu" },
  { name: "Vanderbilt", domain: "vanderbilt.edu" },
  { name: "Rice", domain: "rice.edu" },
  { name: "Notre Dame", domain: "nd.edu" },
  { name: "Emory", domain: "emory.edu" },
];

export default function Home() {
  const marqueeSchools = [...schools, ...schools];

  return (
    <div className="flex min-h-full flex-col" style={{ background: "var(--bg-base)" }}>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 dark:border-stone-700/60 backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg-base) 92%, transparent)" }}>
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="font-heading text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
            admit
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/login" className="rounded-lg px-3 py-2 text-stone-600 dark:text-stone-400 transition-colors hover:text-stone-900 dark:hover:text-stone-100">
              Log in
            </Link>
            <Link href="/signup" className="rounded-lg bg-orange-600 px-3.5 py-2 font-medium text-white shadow-sm transition-colors hover:bg-orange-700">
              Start free
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <AnimatedHero />

        {/* School logos */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-10 overflow-hidden">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-8">
            Students applying to
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--bg-base)] to-transparent" />
            <div className="flex animate-marquee gap-5 whitespace-nowrap">
              {marqueeSchools.map((school, i) => (
                <div
                  key={`${school.domain}-${i}`}
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-stone-200/80 dark:border-stone-700/60 px-3.5 py-2.5"
                  style={{ background: "var(--bg-card)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://www.google.com/s2/favicons?domain=${school.domain}&sz=32`} alt="" width={16} height={16} className="rounded-sm" />
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{school.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's free */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">Free forever</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl max-w-lg">
              The tools you actually need to stay organized.
            </h2>
            <p className="mt-3 max-w-md text-stone-500 dark:text-stone-400 text-[15px]">
              Most students track their application in a messy spreadsheet or worse, their head. Admit gives you a proper workspace — free.
            </p>

            <div className="mt-12 grid gap-px border border-stone-200/80 dark:border-stone-700/60 rounded-2xl overflow-hidden sm:grid-cols-3">
              {[
                {
                  icon: School,
                  title: "School list",
                  body: "Add reach, target, and safety schools. See real acceptance rates. Know if your list is balanced.",
                  color: "text-blue-500",
                  bg: "bg-blue-50 dark:bg-blue-950/40",
                },
                {
                  icon: Calendar,
                  title: "Deadlines",
                  body: "Every key date for the 2026–27 cycle — EA, RD, financial aid — in one timeline. Nothing slips.",
                  color: "text-rose-500",
                  bg: "bg-rose-50 dark:bg-rose-950/40",
                },
                {
                  icon: ListChecks,
                  title: "Activities",
                  body: "10 Common App slots. Log what you do, track hours, write your 150-char descriptions here first.",
                  color: "text-emerald-500",
                  bg: "bg-emerald-50 dark:bg-emerald-950/40",
                },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="p-7" style={{ background: "var(--bg-card)" }}>
                    <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.bg}`}>
                      <Icon size={18} className={f.color} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">{f.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Link href="/signup" className="inline-flex items-center rounded-xl border border-stone-200 dark:border-stone-700 px-6 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800" style={{ background: "var(--bg-card)" }}>
                Get started — no account needed for a minute
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard mockup */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-3">What it looks like</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl max-w-lg">
              Clean. Nothing you don&apos;t need.
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-700/60 shadow-[0_20px_60px_rgba(28,25,23,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-stone-200/60 dark:border-stone-700/50 px-4 py-3" style={{ background: "var(--bg-base)" }}>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-stone-200 dark:bg-stone-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-stone-200 dark:bg-stone-700" />
                  <div className="h-2.5 w-2.5 rounded-full bg-stone-200 dark:bg-stone-700" />
                </div>
                <div className="mx-auto flex h-5 w-52 items-center justify-center rounded border border-stone-200 dark:border-stone-700 px-3 text-[11px] text-stone-400" style={{ background: "var(--bg-card)" }}>
                  getadmit.app/dashboard/schools
                </div>
              </div>

              {/* App UI */}
              <div className="flex" style={{ height: 360 }}>
                {/* Sidebar */}
                <div className="w-40 shrink-0 border-r border-stone-200/60 dark:border-stone-700/50 p-3" style={{ background: "var(--bg-card)" }}>
                  <p className="px-2 py-1.5 font-heading text-sm font-bold text-stone-900 dark:text-stone-100 mb-2">admit</p>
                  {[
                    { label: "Dashboard", active: false },
                    { label: "My Schools", active: true },
                    { label: "Activities", active: false },
                    { label: "Timeline", active: false },
                    { label: "AI Counselor", active: false, pro: true },
                    { label: "Essays", active: false, pro: true },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 mb-0.5 text-xs transition-colors ${item.active ? "bg-orange-500/10 font-semibold text-orange-600 dark:text-orange-400" : "text-stone-500 dark:text-stone-400"}`}>
                      <span>{item.label}</span>
                      {item.pro && <span className="text-[9px] font-bold uppercase text-orange-400">Pro</span>}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex-1 overflow-hidden p-5" style={{ background: "var(--bg-base)" }}>
                  <div className="mb-4 flex items-center justify-between">
                    <p className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">My Schools</p>
                    <span className="rounded-lg bg-stone-100 dark:bg-stone-800 px-3 py-1 text-xs font-medium text-stone-500 dark:text-stone-400">12 schools</span>
                  </div>

                  {/* Stats */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "Reaches", val: 5, color: "text-rose-600 dark:text-rose-400" },
                      { label: "Targets", val: 5, color: "text-amber-600 dark:text-amber-400" },
                      { label: "Safeties", val: 2, color: "text-emerald-600 dark:text-emerald-400" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-stone-200/80 dark:border-stone-700/60 p-3" style={{ background: "var(--bg-card)" }}>
                        <p className={`text-[10px] font-semibold uppercase ${s.color}`}>{s.label}</p>
                        <p className="mt-1 text-2xl font-bold text-stone-900 dark:text-stone-100">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "MIT", tag: "Reach", rate: "4%", tc: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400" },
                      { name: "Stanford", tag: "Reach", rate: "4%", tc: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400" },
                      { name: "UT Austin", tag: "Target", rate: "31%", tc: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
                      { name: "Texas A&M", tag: "Safety", rate: "57%", tc: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" },
                    ].map((s) => (
                      <div key={s.name} className="rounded-xl border border-stone-200/80 dark:border-stone-700/60 px-3 py-2.5" style={{ background: "var(--bg-card)" }}>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">{s.name}</p>
                          <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${s.tc}`}>{s.tag}</span>
                        </div>
                        <p className="mt-0.5 text-[10px] text-stone-400">{s.rate} admit rate</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro section */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 dark:text-orange-400 mb-3">Pro — $19/month or $149/year</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl max-w-lg">
              When you want more than a tracker.
            </h2>
            <p className="mt-3 max-w-md text-stone-500 dark:text-stone-400 text-[15px]">
              An AI that actually knows your profile. Not generic tips — named programs, real deadlines, and strategy specific to you.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: MessageSquare,
                  title: "AI Counselor",
                  body: "Ask anything. Get named programs (RSI, USACO, Clark Scholars), specific deadlines, and honest feedback on your strategy.",
                  color: "text-orange-500",
                  bg: "bg-orange-50 dark:bg-orange-950/40",
                },
                {
                  icon: FileText,
                  title: "Essay Review",
                  body: "Paste a draft. Get a score, line-by-line notes, and specific suggestions — not vague encouragement.",
                  color: "text-violet-500",
                  bg: "bg-violet-50 dark:bg-violet-950/40",
                },
                {
                  icon: BarChart3,
                  title: "Admissions Predictor",
                  body: "See your estimated odds at each school based on your actual stats, not national averages.",
                  color: "text-amber-500",
                  bg: "bg-amber-50 dark:bg-amber-950/40",
                },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6" style={{ background: "var(--bg-card)" }}>
                    <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.bg}`}>
                      <Icon size={18} className={f.color} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">{f.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/subscribe" className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700">
                Start 7-day free trial
              </Link>
              <Link href="/signup" className="inline-flex items-center rounded-xl border border-stone-200 dark:border-stone-700 px-6 py-2.5 text-sm font-medium text-stone-600 dark:text-stone-300 transition-colors hover:bg-stone-50 dark:hover:bg-stone-800" style={{ background: "var(--bg-card)" }}>
                Try free first
              </Link>
            </div>
            <p className="mt-3 text-xs text-stone-400 dark:text-stone-500">No card required for the free plan. Trial requires card — cancel before it ends and you won&apos;t be charged.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-stone-900 dark:bg-stone-950 px-10 py-16 text-center">
              <div className="absolute -top-16 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-orange-600/15 blur-3xl" />
              <div className="relative">
                <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Stop tracking this in a spreadsheet.
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-stone-400">
                  Takes 2 minutes to set up. School list is free forever.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/signup" className="inline-flex items-center rounded-xl bg-orange-600 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-500">
                    Get started free
                  </Link>
                  <Link href="/subscribe" className="inline-flex items-center rounded-xl border border-stone-700 bg-stone-800/60 px-7 py-3 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-700">
                    See Pro features
                  </Link>
                </div>
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
