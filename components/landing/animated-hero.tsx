"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ParticlesCanvas } from "./particles-canvas";
import { School, Calendar, ListChecks, Sparkles } from "lucide-react";

const floatingCards = [
  {
    icon: School,
    color: "bg-blue-500",
    label: "School List",
    detail: "12 schools tracked",
    delay: "0ms",
    pos: "top-[18%] right-[8%]",
  },
  {
    icon: Calendar,
    color: "bg-rose-500",
    label: "Deadlines",
    detail: "3 due this month",
    delay: "200ms",
    pos: "top-[52%] right-[4%]",
  },
  {
    icon: ListChecks,
    color: "bg-emerald-500",
    label: "Activities",
    detail: "8 ECs logged",
    delay: "400ms",
    pos: "bottom-[22%] right-[12%]",
  },
];

export function AnimatedHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-blob-1 absolute -top-40 -left-20 h-[600px] w-[600px] rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="aurora-blob-2 absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/15 blur-[100px]" />
        <div className="aurora-blob-3 absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-rose-600/10 blur-[100px]" />
        <div className="aurora-blob-4 absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-orange-400/10 blur-[80px]" />
      </div>

      {/* Particle network */}
      <ParticlesCanvas />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-6 py-28 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-400 shadow-sm mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            Free to organize · AI features from $19/mo
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <span
                className={`block transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
                style={{ transitionDelay: "120ms" }}
              >
                Organize your
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
                style={{ transitionDelay: "240ms" }}
              >
                entire application.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 max-w-lg text-lg leading-relaxed text-stone-400 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "380ms" }}
          >
            School list, deadlines, activities, and essays — all free. Upgrade to unlock an AI counselor that gives you specific programs, competitions, and strategy.
          </p>

          {/* CTA buttons */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-500 hover:shadow-orange-500/40 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start organizing — free
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
            >
              Log in
            </Link>
          </div>

          {/* Social proof pills */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "620ms" }}
          >
            {["No credit card required", "Free school list & timeline", "AI counselor available"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-stone-500">
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Floating UI cards — hidden on mobile */}
        <div className="pointer-events-none hidden lg:block">
          {floatingCards.map(({ icon: Icon, color, label, detail, delay, pos }) => (
            <div
              key={label}
              className={`absolute ${pos} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: delay }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${color}`}>
                  <Icon size={15} strokeWidth={2} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{label}</p>
                  <p className="text-[10px] text-stone-400">{detail}</p>
                </div>
              </div>
            </div>
          ))}

          {/* AI tip bubble */}
          <div
            className={`absolute top-[36%] right-[3%] max-w-[220px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles size={11} className="text-orange-400" />
                <p className="text-[10px] font-semibold uppercase tracking-wide text-orange-400">AI Counselor</p>
              </div>
              <p className="text-[11px] leading-snug text-stone-300">
                &ldquo;Apply to RSI by Jan 15 — your bio interest is a perfect fit.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
