// app/terms/page.tsx
export default function TermsPage() {
    const updatedAt = "August 29, 2025";

    const toc = [
        { id: "intro", title: "Introduction" },
        { id: "eligibility", title: "Eligibility & Accounts" },
        { id: "license", title: "License & Acceptable Use" },
        { id: "content", title: "User Content" },
        { id: "ip", title: "Intellectual Property" },
        { id: "subscriptions", title: "Subscriptions & Billing" },
        { id: "privacy", title: "Privacy" },
        { id: "thirdparty", title: "Third‑Party Links & Services" },
        { id: "termination", title: "Termination" },
        { id: "disclaimers", title: "Disclaimers" },
        { id: "liability", title: "Limitation of Liability" },
        { id: "indemnity", title: "Indemnification" },
        { id: "governing", title: "Governing Law & Disputes" },
        { id: "changes", title: "Changes to the Terms" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header */}
            <section className="relative border-b border-neutral-900">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-rose-700/15 via-transparent to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-5xl px-6 py-16">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Terms of Use
                    </h1>
                    <p className="mt-3 text-neutral-300">
                        Effective date: {updatedAt}
                    </p>
                    <p className="mt-2 max-w-3xl text-neutral-300">
                        These Terms of Use (“Terms”) govern the use of the Velzion website, applications, and services (collectively, “Services”). By accessing or using the Services, users agree to be bound by these Terms.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-[260px_1fr]">
                {/* TOC */}
                <aside className="top-24 h-max rounded-2xl border border-neutral-900 bg-neutral-950 p-4">
                    <h2 className="mb-3 text-sm font-semibold text-neutral-300">On this page</h2>
                    <nav className="space-y-2">
                        {toc.map((t) => (
                            <a
                                key={t.id}
                                href={`#${t.id}`}
                                className="block rounded-md px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
                            >
                                {t.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Sections */}
                <article className="space-y-10">
                    <section id="intro" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Introduction</h3>
                        <p className="mt-2 text-neutral-300">
                            Velzion (“Velzion,” “we,” “us,” or “our”) provides Services including content discovery, playback experiences, and related features. By using our Services, users confirm they have read, understand, and agree to these Terms, as well as our Privacy Policy and any supplemental policies referenced here or presented within the Service.
                        </p>
                    </section>

                    <section id="eligibility" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Eligibility & Accounts</h3>
                        <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                            <li>Users must be the age of majority in their jurisdiction or have parental consent where applicable.</li>
                            <li>Account information must be accurate and kept up to date. Users are responsible for maintaining the confidentiality of credentials and for all activity under the account.</li>
                            <li>Velzion may refuse, suspend, or terminate accounts for any violation of these Terms or suspected misuse.</li>
                        </ul>
                    </section>

                    <section id="license" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">License & Acceptable Use</h3>
                        <p className="mt-2 text-neutral-300">
                            Velzion grants a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial use, subject to these Terms.
                        </p>
                        <p className="mt-2 text-neutral-300">Users agree not to:</p>
                        <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                            <li>Copy, modify, distribute, sell, or lease any part of the Services, except as expressly permitted.</li>
                            <li>Reverse engineer or attempt to extract source code where not permitted by law.</li>
                            <li>Bypass or interfere with security features or access controls.</li>
                            <li>Scrape, crawl, or harvest data without written permission.</li>
                            <li>Upload malware or engage in activity that disrupts or damages the Services.</li>
                        </ul>
                    </section>

                    <section id="content" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">User Content</h3>
                        <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                            <li>Users retain ownership of content they submit but grant Velzion a worldwide, non-exclusive, royalty-free license to host, store, use, reproduce, adapt, publish, and display such content solely to operate and improve the Services.</li>
                            <li>Users must have necessary rights to submit content and ensure it does not infringe third-party rights or laws.</li>
                            <li>Velzion may remove or disable content that violates these Terms or applicable law.</li>
                        </ul>
                    </section>

                    <section id="ip" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Intellectual Property</h3>
                        <p className="mt-2 text-neutral-300">
                            The Services, including text, graphics, logos, trademarks, service marks, UI elements, and software, are owned by or licensed to Velzion and are protected by intellectual property laws. Except as expressly permitted, no rights are granted to use any Velzion trademarks or content.
                        </p>
                    </section>

                    <section id="subscriptions" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Subscriptions & Billing</h3>
                        <ul className="mt-2 list-disc space-y-2 pl-6 text-neutral-300">
                            <li>Paid plans renew automatically unless canceled in accordance with the plan terms.</li>
                            <li>Prices, taxes, and fees may vary by region and are subject to change with prior notice where required.</li>
                            <li>Billing issues should be reported promptly; adjustments are at Velzion’s discretion consistent with applicable laws.</li>
                            <li>Promotions and discounts may have additional terms and eligibility requirements.</li>
                        </ul>
                    </section>

                    <section id="privacy" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Privacy</h3>
                        <p className="mt-2 text-neutral-300">
                            Velzion processes personal data in accordance with its Privacy Policy. Where required by law, additional disclosures or consents may apply. Users should review the Privacy Policy for details on how data is collected, used, and shared.
                        </p>
                    </section>

                    <section id="thirdparty" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Third‑Party Links & Services</h3>
                        <p className="mt-2 text-neutral-300">
                            The Services may include links to third‑party content, integrations, or services. Velzion does not control or endorse third‑party resources and is not responsible for their content, policies, or practices. Use of third‑party services is subject to their terms.
                        </p>
                    </section>

                    <section id="termination" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Termination</h3>
                        <p className="mt-2 text-neutral-300">
                            Velzion may suspend or terminate access to the Services at any time for violation of these Terms, suspected fraud or abuse, legal compliance, or to protect the Service or users. Upon termination, rights and licenses granted to users will cease.
                        </p>
                    </section>

                    <section id="disclaimers" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Disclaimers</h3>
                        <p className="mt-2 text-neutral-300">
                            THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELZION DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT. Availability and features may vary by device, region, and account.
                        </p>
                    </section>

                    <section id="liability" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Limitation of Liability</h3>
                        <p className="mt-2 text-neutral-300">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, VELZION AND ITS AFFILIATES WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL. IN NO EVENT WILL VELZION’S AGGREGATE LIABILITY EXCEED THE AMOUNTS PAID TO VELZION FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                        </p>
                    </section>

                    <section id="indemnity" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Indemnification</h3>
                        <p className="mt-2 text-neutral-300">
                            Users agree to indemnify, defend, and hold harmless Velzion and its affiliates from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising from or related to user content, user breach of these Terms, or misuse of the Services.
                        </p>
                    </section>

                    <section id="governing" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Governing Law & Disputes</h3>
                        <p className="mt-2 text-neutral-300">
                            These Terms are governed by the laws of [Insert jurisdiction]. All disputes will be resolved in the courts or arbitration forums located in [Insert venue], except where local law provides otherwise. Users may have additional rights under mandatory consumer laws in their country of residence.
                        </p>
                    </section>

                    <section id="changes" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Changes to the Terms</h3>
                        <p className="mt-2 text-neutral-300">
                            Velzion may modify these Terms from time to time. When changes are material, Velzion will provide notice by updating the “Effective date” and, where reasonable, through in‑product notices or email. Continued use of the Services after changes indicates acceptance of the updated Terms.
                        </p>
                    </section>

                    <section id="contact" className="scroll-mt-24">
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <p className="mt-2 text-neutral-300">
                            Questions about these Terms can be sent to support@velzion.com or to: Velzion, [Insert company address].
                        </p>
                    </section>
                </article>
            </section>

            {/* Footer CTA */}
            <section className="mx-auto max-w-5xl px-6 pb-16">
                <div className="relative overflow-hidden rounded-2xl border border-rose-700/30 bg-gradient-to-br from-rose-700/15 via-black to-black p-8">
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose-700/25 blur-3xl" />
                    <h3 className="text-2xl font-semibold">Need legal documents?</h3>
                    <p className="mt-2 max-w-2xl text-neutral-200">
                        Review our Privacy Policy and any product‑specific terms to understand how data is handled and what applies to each plan.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="/privacy"
                            className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            View Privacy Policy
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
