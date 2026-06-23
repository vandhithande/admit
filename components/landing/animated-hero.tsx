"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function AnimatedHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-stone-950" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-amber-500/8 blur-[100px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-28">
        {/* Label */}
        <div
          className={`mb-7 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            College application tracker
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-heading max-w-2xl text-[56px] font-semibold leading-[1.05] tracking-tight text-white transition-all duration-600 sm:text-6xl lg:text-7xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "80ms" }}
        >
          Keep your entire
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            application in one place.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 max-w-md text-[17px] leading-relaxed text-stone-400 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "180ms" }}
        >
          School list, deadlines, extracurriculars, and essay drafts — free.
          Upgrade for an AI counselor that gives you specific programs and strategy.
        </p>

        {/* CTAs */}
        <div
          className={`mt-9 flex items-center gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "280ms" }}
        >
          <Link
            href="/signup"
            className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-500 hover:-translate-y-px"
          >
            Get started free
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center rounded-xl border border-stone-700 px-6 py-3 text-sm font-medium text-stone-400 transition-colors hover:border-stone-600 hover:text-stone-200"
          >
            Log in
          </Link>
        </div>

        {/* Trust line */}
        <p
          className={`mt-7 text-xs text-stone-600 transition-all duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "380ms" }}
        >
          No credit card required · School list and deadlines are free forever
        </p>
      </div>
    </section>
  );
}
