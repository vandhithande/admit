import { ActivitiesSection } from "@/components/activities-section";
import { ProGate } from "@/components/pro-gate";

export default function ActivitiesPage() {
  return (
    <ProGate feature="EC Strategy">
      <div className="flex-1" style={{ background: "var(--bg-base)" }}>
        <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            Activities
          </h1>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Track your extracurriculars. The Common App gives you 10 slots — make each one count.
          </p>
        </header>
        <div className="px-8 py-8">
          <ActivitiesSection />
        </div>
      </div>
    </ProGate>
  );
}
