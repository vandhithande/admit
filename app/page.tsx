import Link from "next/link";
import { AnimatedHero } from "@/components/landing/animated-hero";
import {
  MessageSquare,
  School,
  FileText,
  ListChecks,
  Calendar,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: School,
    title: "School List Builder",
    description:
      "Balance reach, target, and safety schools. See acceptance rates and keep notes on every pick.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MessageSquare,
    title: "AI Counselor",
    description:
      "Ask detailed questions anytime. Get named programs, deadlines, and strategy — grounded in your profile.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: FileText,
    title: "Essay Review",
    description:
      "Structured feedback on drafts so every supplement stays sharp, authentic, and on-prompt.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: ListChecks,
    title: "EC Strategy",
    description:
      "Shape extracurriculars into a coherent story. Competitions, research, leadership — organized.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Calendar,
    title: "Timeline Tracker",
    description:
      "Deadlines, tests, and milestones in one view. Never miss another date across any school.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: BarChart3,
    title: "Admit Odds",
    description:
      "Grounded estimates from your stats — transparent, not magical thinking.",
    color: "bg-amber-100 text-amber-600",
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
              Get started
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
            {/* Fade edges */}
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
                // duplicate for seamless loop
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

        {/* Features */}
        <section className="border-t border-stone-200/60 dark:border-stone-700/50 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              Everything you need
            </div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
              One workspace. Every piece.
            </h2>
            <p className="mt-3 max-w-xl text-stone-500 dark:text-stone-400">
              Built for students who want clarity, not another dashboard that adds noise.
            </p>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={feature.title}
                    className="group rounded-2xl border border-stone-200/80 dark:border-stone-700/60 p-6 shadow-[0_1px_3px_rgba(28,25,23,0.06)] dark:shadow-none transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(28,25,23,0.10)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                    style={{ background: "var(--bg-card)" }}
                  >
                    <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${feature.color}`}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-stone-900 dark:text-stone-100">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                      {feature.description}
                    </p>
                  </li>
                );
              })}
            </ul>
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
                  Ready when you are.
                </h2>
                <p className="mx-auto mt-4 max-w-md text-stone-400">
                  Start with your school list, bring in your profile, and let the AI counselor fill in the gaps.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-500 hover:shadow-lg"
                  >
                    Start with Admit
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-xl border border-stone-700 bg-stone-800 px-7 py-3 text-sm font-medium text-stone-200 transition-colors hover:bg-stone-700"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200/60 dark:border-stone-700/50 py-8 text-center text-xs text-stone-400 dark:text-stone-500">
        © {new Date().getFullYear()} Admit
      </footer>
    </div>
  );
}
