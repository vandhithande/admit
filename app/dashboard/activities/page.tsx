import { ActivitiesSection } from "@/components/activities-section";

export default function ActivitiesPage() {
  return (
    <div className="flex-1 bg-white">
      <header className="border-b border-neutral-200 bg-white px-8 py-6">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-neutral-900">
          Activities
        </h1>
        <p className="mt-1 text-sm text-neutral-600">
          Track your extracurriculars. The Common App gives you 10 slots — make each one count.
        </p>
      </header>
      <div className="px-8 py-8">
        <ActivitiesSection />
      </div>
    </div>
  );
}
