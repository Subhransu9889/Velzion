// app/privacy/page.tsx
export default function PrivacyPage() {
    const updatedAt = "August 29, 2025";

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header */}
            <section className="relative border-b border-neutral-900">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-rose-700/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-5xl px-6 py-16">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-neutral-300">Effective date: {updatedAt}</p>
                    <p className="mt-2 max-w-3xl text-neutral-300">
                        This Privacy Policy describes how Velzion (“Velzion,” “we,” “us,” or “our”) collects, uses, shares, and safeguards personal information when individuals use our website, applications, and services (collectively, the “Services”).
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto max-w-5xl px-6 py-12 space-y-12">
                {/* Scope */}
                <section id="scope" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Scope</h2>
                    <p className="mt-2 text-neutral-300">
                        This Policy applies to personal information processed by Velzion in connection with the Services. Additional product‑specific disclosures may appear in the interface and form part of this Policy by reference.
                    </p>
                </section>

                {/* Information We Collect */}
                <section id="collection" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Information We Collect</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                        <li>Account and contact data (e.g., name, email, phone, country/region).</li>
                        <li>Transactional data (e.g., plan, billing details processed by payment providers, purchase history).</li>
                        <li>Usage and device data (e.g., pages viewed, interactions, app version, device identifiers, OS, IP address, timestamps).</li>
                        <li>Playback and quality metrics (e.g., buffering, bitrate, errors) to improve performance.</li>
                        <li>Cookies, SDKs, and similar technologies for authentication, analytics, and personalization.</li>
                        <li>User content provided via feedback, support requests, or surveys.</li>
                    </ul>
                </section>

                {/* How We Use Information */}
                <section id="use" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">How We Use Information</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                        <li>Provide, maintain, and improve the Services, including troubleshooting and support.</li>
                        <li>Process subscriptions, payments, and account changes.</li>
                        <li>Personalize content, recommendations, and product experiences.</li>
                        <li>Monitor performance, security, and prevent fraud or abuse.</li>
                        <li>Communicate service updates, policy changes, and marketing (with appropriate consent/opt‑out).</li>
                        <li>Comply with legal obligations and enforce terms.</li>
                    </ul>
                </section>

                {/* Legal Bases (if applicable) */}
                <section id="legal-bases" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Legal Bases</h2>
                    <p className="mt-2 text-neutral-300">
                        Where required, we rely on one or more legal bases: contract performance, legitimate interests (e.g., security, improvement), consent (e.g., certain marketing or cookies), and compliance with legal obligations.
                    </p>
                </section>

                {/* Sharing of Information */}
                <section id="sharing" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">How We Share Information</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                        <li>Service providers and processors (e.g., hosting, analytics, customer support, payments) under contractual controls.</li>
                        <li>Partners and integrations when explicitly enabled by the user.</li>
                        <li>Legal, safety, and security purposes (e.g., responding to lawful requests, preventing fraud, protecting rights).</li>
                        <li>Business transfers (e.g., merger, acquisition) with appropriate safeguards.</li>
                    </ul>
                    <p className="mt-2 text-neutral-300">
                        We do not sell personal information, and we do not share personal information for cross‑context behavioral advertising where prohibited, unless disclosures and opt‑out mechanisms are provided.
                    </p>
                </section>

                {/* Cookies and Tracking */}
                <section id="cookies" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Cookies & Similar Technologies</h2>
                    <p className="mt-2 text-neutral-300">
                        We use cookies, SDKs, and similar technologies for authentication, preferences, analytics, and personalization. Users can manage preferences via browser or device settings and, where offered, a cookie banner or in‑app controls.
                    </p>
                </section>

                {/* Retention */}
                <section id="retention" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Data Retention</h2>
                    <p className="mt-2 text-neutral-300">
                        We retain personal information only as long as necessary for the purposes described, to comply with legal obligations, resolve disputes, and enforce agreements, after which we delete or de‑identify it.
                    </p>
                </section>

                {/* Security */}
                <section id="security" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Security</h2>
                    <p className="mt-2 text-neutral-300">
                        We implement technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, and risks cannot be eliminated.
                    </p>
                </section>

                {/* International Transfers */}
                <section id="transfers" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">International Transfers</h2>
                    <p className="mt-2 text-neutral-300">
                        If personal information is transferred internationally, we use appropriate safeguards (e.g., standard contractual clauses) and comply with applicable laws regarding cross‑border data transfers.
                    </p>
                </section>

                {/* Your Rights */}
                <section id="rights" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Your Privacy Rights</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                        <li>Access, correction, deletion, and portability of personal information, subject to legal limits.</li>
                        <li>Objection or restriction to certain processing, and withdrawal of consent where processing is based on consent.</li>
                        <li>Preferences for marketing communications and cookies.</li>
                        <li>Right to lodge a complaint with a supervisory authority, where applicable.</li>
                    </ul>
                    <p className="mt-2 text-neutral-300">
                        Requests can be submitted through the channels in the Contact section below. We may verify identity before fulfilling requests.
                    </p>
                </section>

                {/* Children’s Privacy */}
                <section id="children" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Children’s Privacy</h2>
                    <p className="mt-2 text-neutral-300">
                        The Services are not directed to children under the age required by local law without appropriate parental consent and controls. If we learn we have collected personal information from a child in violation of law, we will take reasonable steps to delete it.
                    </p>
                </section>

                {/* Changes */}
                <section id="changes" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Changes to This Policy</h2>
                    <p className="mt-2 text-neutral-300">
                        We may update this Policy from time to time. Material changes will be communicated through the Services or by other reasonable means. The “Effective date” will indicate the latest version.
                    </p>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-24">
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="mt-2 text-neutral-300">
                        For questions or requests, contact: privacy@velzion.com or write to: Velzion, [Company Address], [Country/Region].
                    </p>
                </section>
            </section>

            {/* Footer CTA */}
            <section className="mx-auto max-w-5xl px-6 pb-16">
                <div className="relative overflow-hidden rounded-2xl border border-rose-700/30 bg-gradient-to-br from-rose-700/15 via-black to-black p-8">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-700/25 blur-3xl" />
                    <h3 className="text-2xl font-semibold">Manage your privacy</h3>
                    <p className="mt-2 max-w-2xl text-neutral-200">
                        Review cookie preferences, marketing choices, and data access requests in the account settings.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="/account/privacy"
                            className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Open privacy settings
                        </a>
                        <a
                            href="/help-center"
                            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Visit Help Center
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}