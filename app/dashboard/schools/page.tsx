import { MySchoolsSection } from "@/components/my-schools-section";

export default function SchoolsPage() {
  return (
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
          My Schools
        </h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Build and refine your reach, target, and safety list.
        </p>
      </header>
      <div className="px-8 py-8">
        <MySchoolsSection useScorecardSearch />
      </div>
    </div>
  );
}
