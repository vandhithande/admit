export default function EssaysPage() {
  return (
    <div className="flex-1" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-8 py-6" style={{ background: "var(--bg-card)" }}>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Essays</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">Drafts and reviews will live here, coming soon.</p>
      </header>
      <div className="flex items-center justify-center px-8 py-24">
        <p className="text-sm text-stone-400 dark:text-stone-500">Coming soon</p>
      </div>
    </div>
  );
}
