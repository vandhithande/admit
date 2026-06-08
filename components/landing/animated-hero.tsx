"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ParticlesCanvas } from "./particles-canvas";

export function AnimatedHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const line1 = "Your college journey,";
  const line2 = "finally organized.";

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" />

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
      <div className="relative mx-auto w-full max-w-5xl px-6 py-32">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-xs font-medium text-orange-400 shadow-sm mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
          Free forever · Upgrade for AI features
        </div>

        {/* Headline */}
        <h1 className="font-heading max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden">
            <span
              className={`block transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
              style={{ transitionDelay: "120ms" }}
            >
              {line1}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={`block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
              style={{ transitionDelay: "240ms" }}
            >
              {line2}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 max-w-xl text-lg leading-relaxed text-stone-400 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "380ms" }}
        >
          One calm workspace for essays, school lists, deadlines, and AI
          strategy — without the spreadsheet chaos.
        </p>

        {/* CTA buttons */}
        <div
          className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/25 transition-all hover:bg-orange-500 hover:shadow-orange-500/40 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="relative z-10">Start for free</span>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
          >
            I have an account
          </Link>
        </div>

        {/* Social proof */}
        <p
          className={`mt-8 text-xs text-stone-500 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "600ms" }}
        >
          Trusted by students applying to Harvard, MIT, Stanford, and more.
        </p>
      </div>
    </section>
  );
}
