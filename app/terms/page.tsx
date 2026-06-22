import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <header className="border-b border-stone-200/60 dark:border-stone-700/50 px-6 py-4" style={{ background: "var(--bg-card)" }}>
        <Link href="/" className="font-heading text-lg font-bold text-stone-900 dark:text-stone-100">admit</Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Terms of Service</h1>
        <p className="mt-2 text-sm text-stone-400">Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Using Admit</h2>
            <p>By creating an account, you agree to use Admit for your personal college application process. You must be at least 13 years old to use this service. If you are under 18, you confirm that a parent or guardian is aware of and has consented to your use of the service.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Your account</h2>
            <p>You are responsible for keeping your account credentials secure. You are responsible for all activity that occurs under your account. Please notify us immediately at <a href="mailto:vandhith.ande@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">vandhith.ande@gmail.com</a> if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Subscriptions &amp; billing</h2>
            <p>Admit Pro is a recurring subscription billed monthly ($19/month) or annually ($149/year). Your free trial begins on signup and automatically converts to a paid subscription at the end of the trial period unless you cancel first.</p>
            <p className="mt-2">You may cancel at any time before the trial ends to avoid any charge. After the trial, you may cancel at any time and retain access until the end of your current billing period. No partial refunds are issued for unused time.</p>
            <p className="mt-2">To cancel, go to Settings → Manage billing, or email us and we will cancel for you. Refunds for billing errors are handled case-by-case — contact us within 7 days of a charge.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">AI-generated content &amp; disclosure</h2>
            <p>Admit uses artificial intelligence (AI) to power the counselor, essay review, and admissions predictor features. All AI-generated content is clearly labeled as AI-generated within the app. This is a supplementary tool — it is <strong>not</strong> a substitute for professional college counseling.</p>
            <p className="mt-2">Admit makes no guarantees about admission outcomes. AI suggestions are based on patterns and your profile, not insider knowledge of any institution. Always verify deadlines, requirements, and program details directly with the colleges.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Intellectual property</h2>
            <p>All content, branding, code, and design of Admit is owned by Admit and protected by applicable intellectual property laws. You may not copy, reproduce, or redistribute any part of the platform. Your submitted content (essays, profile data) remains yours — by submitting it, you grant Admit a limited license to process it for the purpose of providing the service.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Prohibited use</h2>
            <p>You may not use Admit to generate fraudulent application materials, misrepresent yourself to colleges, or violate any institution&apos;s academic integrity policies. You may not attempt to reverse-engineer, scrape, or abuse the platform or its APIs. Violation of these rules may result in immediate account termination without refund.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Limitation of liability</h2>
            <p>Admit is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any admission decisions, missed deadlines, or outcomes related to your use of the platform. To the maximum extent permitted by law, our total liability to you for any claim arising out of or related to these Terms is limited to the amount you paid us in the 3 months prior to the claim.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Dispute resolution &amp; arbitration</h2>
            <p>Any dispute, controversy, or claim arising out of or relating to these Terms or your use of Admit — including any question regarding its existence, validity, or termination — shall be resolved by binding individual arbitration rather than in court, except that either party may bring claims in small claims court if they qualify.</p>
            <p className="mt-2"><strong>Class action waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in arbitration, you waive any right to a jury trial.</p>
            <p className="mt-2">To initiate arbitration, email <a href="mailto:vandhith.ande@gmail.com" className="text-orange-600 dark:text-orange-400 hover:underline">vandhith.ande@gmail.com</a> with a description of the dispute. Both parties will attempt to resolve the dispute informally for 30 days before initiating formal arbitration.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Governing law</h2>
            <p>These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3">Changes to these terms</h2>
            <p>We may update these Terms from time to time. We will notify you of material changes by email or by posting a notice in the app. Continued use of Admit after changes become effective means you accept the updated Terms.</p>
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
