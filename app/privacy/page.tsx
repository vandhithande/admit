import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-6 py-4" style={{ background: "var(--bg-card)" }}>
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">admit</Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Privacy Policy</h1>
        <p className="mt-2 text-sm text-stone-400">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">What we collect</h2>
            <p>When you create an account, we collect your email address and any profile information you choose to provide (name, grade, GPA, test scores, intended major, interests). If you sign in with Google, we receive your name and email from Google.</p>
            <p className="mt-2">We also collect usage data such as the schools you add to your list and conversations with the AI counselor, solely to provide the service.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">How we use your data</h2>
            <p>Your information is used exclusively to power your Admit experience — personalizing AI counselor responses, storing your school list, and saving your essay drafts. We do not sell your data to any third party.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Third-party services</h2>
            <p>We use the following services to operate Admit:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> — authentication and database storage</li>
              <li><strong>Stripe</strong> — payment processing (we never store your card details)</li>
              <li><strong>Groq</strong> — AI model provider for the counselor feature</li>
              <li><strong>Vercel</strong> — hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Data retention</h2>
            <p>Your data is retained as long as your account is active. You can request deletion of your account and all associated data at any time by emailing us.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Cookies</h2>
            <p>We use cookies only for authentication purposes (to keep you logged in). We do not use tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Contact</h2>
            <p>Questions about your privacy? Email us at <a href="mailto:vandhith.ande@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">vandhith.ande@gmail.com</a>.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-stone-200/60 dark:border-stone-700/50 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Admit ·{" "}
        <Link href="/terms" className="hover:underline">Terms</Link>
      </footer>
    </div>
  );
}
