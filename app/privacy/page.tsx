import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-6 py-4" style={{ background: "var(--bg-card)" }}>
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">admit</Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Privacy Policy</h1>
        <p className="mt-2 text-sm text-stone-400">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">What we collect</h2>
            <p>When you create an account, we collect:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Account information:</strong> email address. If you sign in with Google, we also receive your name from Google.</li>
              <li><strong>Profile information you provide:</strong> name, grade, GPA, test scores (SAT/ACT), intended major, interests, state, and any additional context you add.</li>
              <li><strong>Usage data:</strong> schools you add to your list, activities you log, essay drafts and reviews, and conversations with the AI counselor.</li>
              <li><strong>Billing information:</strong> if you subscribe, we retain a billing record (processed by Stripe — we never see or store your card number).</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> collect location data, contacts, browsing history, or any data not listed above.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">How we use your data</h2>
            <p>Your information is used exclusively to provide and improve your Admit experience:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Personalizing AI counselor responses with your profile and school list</li>
              <li>Storing your school list, activities, and essay drafts</li>
              <li>Processing subscription payments via Stripe</li>
              <li>Sending transactional emails (account confirmation, password reset)</li>
            </ul>
            <p className="mt-3">We do <strong>not</strong> sell your data to any third party. We do not use your data for advertising.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">AI processing disclosure</h2>
            <p>When you use the AI counselor or essay review features, your profile data and submitted text are sent to Groq (our AI model provider) to generate responses. This data is transmitted securely and governed by Groq&apos;s data processing terms. We do not use your content to train AI models.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Third-party services</h2>
            <p>We use the following services to operate Admit:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> — authentication and database storage (US-based servers)</li>
              <li><strong>Stripe</strong> — payment processing (we never store your card details)</li>
              <li><strong>Groq</strong> — AI model provider for counselor and essay review features</li>
              <li><strong>Vercel</strong> — hosting and CDN</li>
            </ul>
            <p className="mt-2">Each of these services has its own privacy policy and security practices.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Data retention</h2>
            <p>Your data is retained for as long as your account is active. If you request account deletion, we will delete your profile, school list, activities, essay data, and conversation history within 30 days. Billing records may be retained for up to 7 years as required by law.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Your rights (GDPR &amp; CCPA)</h2>
            <p>Depending on where you live, you may have the following rights regarding your personal data:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Access:</strong> request a copy of the data we hold about you</li>
              <li><strong>Correction:</strong> update inaccurate data (most data is editable directly in Settings)</li>
              <li><strong>Deletion:</strong> request deletion of your account and all associated data</li>
              <li><strong>Portability:</strong> request an export of your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> we do not sell or share data for advertising, so there is nothing to opt out of in that regard</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email <a href="mailto:vandhith.ande@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">vandhith.ande@gmail.com</a> with &ldquo;Privacy Request&rdquo; in the subject line. We will respond within 30 days.</p>
            <p className="mt-2">California residents (CCPA): We do not sell personal information. You have the right to know what personal information we collect and to request deletion at any time.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Cookies</h2>
            <p>We use cookies only for authentication purposes (to keep you logged in). We do not use tracking, advertising, or analytics cookies.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Children&apos;s privacy</h2>
            <p>Admit is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has created an account, contact us and we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Security</h2>
            <p>We use industry-standard security practices: all data is encrypted in transit (HTTPS/TLS) and at rest. Authentication is handled by Supabase with JWT tokens that expire and refresh automatically. Row-Level Security on our database ensures users can only access their own data.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Changes to this policy</h2>
            <p>If we make material changes to this policy, we will notify you by email or by posting a notice in the app before the changes take effect.</p>
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
