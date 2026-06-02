import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-6 py-4" style={{ background: "var(--bg-card)" }}>
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">admit</Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Terms of Service</h1>
        <p className="mt-2 text-sm text-stone-400">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Using Admit</h2>
            <p>By creating an account, you agree to use Admit for your personal college application process. You must be at least 13 years old to use this service. If you are under 18, you confirm that a parent or guardian is aware of your use of the service.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Your account</h2>
            <p>You are responsible for keeping your account credentials secure. You are responsible for all activity that occurs under your account. Please notify us immediately if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Subscriptions & billing</h2>
            <p>Admit Pro is a recurring subscription billed monthly or annually. Your free trial begins on signup and converts to a paid subscription at the end of the trial period. You may cancel at any time before the trial ends to avoid being charged.</p>
            <p className="mt-2">Refunds are handled on a case-by-case basis. Contact us within 7 days of a charge if you believe there was an error.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">AI-generated content</h2>
            <p>The AI counselor and essay feedback features provide suggestions based on your profile. This is not a substitute for professional college counseling. Admit makes no guarantees about admission outcomes. Always verify important information (deadlines, requirements) directly with the schools.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Prohibited use</h2>
            <p>You may not use Admit to generate fraudulent application materials, misrepresent yourself to colleges, or violate any institution's academic integrity policies. You may not attempt to reverse-engineer, scrape, or abuse the platform.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Limitation of liability</h2>
            <p>Admit is provided &ldquo;as is.&rdquo; We are not liable for any admission decisions, missed deadlines, or outcomes related to your use of the platform. Our liability is limited to the amount you paid in the 3 months prior to any claim.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Changes to these terms</h2>
            <p>We may update these terms from time to time. Continued use of Admit after changes means you accept the new terms.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Contact</h2>
            <p>Questions? Email us at <a href="mailto:vandhith.ande@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">vandhith.ande@gmail.com</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-stone-200/60 dark:border-stone-700/50 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Admit ·{" "}
        <Link href="/privacy" className="hover:underline">Privacy</Link>
      </footer>
    </div>
  );
}
