// app/faq/page.tsx
export default function FAQPage() {
    const faqs = [
        {
            category: "Account & Billing",
            items: [
                {
                    q: "How do I reset my password?",
                    a: "Go to Settings → Security → Reset Password. A verification link will be sent to the registered email. Follow the link to set a new password.",
                },
                {
                    q: "How can I change or cancel my plan?",
                    a: "Navigate to Account → Plan & Billing. Select a new plan or choose Cancel Plan. Changes apply immediately with prorated billing where applicable.",
                },
                {
                    q: "What payment methods are supported?",
                    a: "Major credit/debit cards, UPI, and popular wallets are supported in eligible regions. Options can vary by country.",
                },
            ],
        },
        {
            category: "Streaming & Playback",
            items: [
                {
                    q: "Why is the video buffering?",
                    a: "Check your connection speed (at least 10 Mbps for HD). Try Auto Quality or select a lower resolution. Restarting the app or device may help.",
                },
                {
                    q: "What devices are supported?",
                    a: "Modern browsers, iOS/Android apps, and many smart TVs are supported. Check the devices page in Help Center for the latest list.",
                },
                {
                    q: "Can I watch offline?",
                    a: "Yes, on supported mobile apps. Tap the download icon on a title and access it in Library → Downloads.",
                },
            ],
        },
        {
            category: "Profiles & Family",
            items: [
                {
                    q: "How many profiles can I create?",
                    a: "Family plans support up to 6 profiles with parental controls. Individual plans include 1 primary profile.",
                },
                {
                    q: "Are parental controls available?",
                    a: "Yes. Set content ratings and a PIN per profile in Settings → Family Controls.",
                },
            ],
        },
        {
            category: "Technical & Security",
            items: [
                {
                    q: "How do I report a bug or issue?",
                    a: "Use Help Center → Submit a ticket and include device, OS, app version, and steps to reproduce.",
                },
                {
                    q: "What should I do if my account looks compromised?",
                    a: "Change your password immediately, sign out from all devices, and enable 2FA in Settings → Security.",
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero */}
            <section className="relative border-b border-neutral-900">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-rose-700/20 via-transparent to-transparent blur-3xl opacity-30" />
                <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
                    <p className="mt-3 max-w-2xl text-neutral-300">
                        Find quick answers by topic, or search the Help Center for step‑by‑step guides.
                    </p>

                    {/* Search */}
                    <form action="/help-center/search" className="mt-8" role="search" aria-label="Search FAQs">
                        <div className="relative">
                            <input
                                type="search"
                                name="q"
                                placeholder="Search FAQs, troubleshooting, and guides…"
                                className="w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-4 pr-28 text-sm text-white placeholder-neutral-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Categories + Accordions */}
            <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
                <div className="space-y-10">
                    {faqs.map((group) => (
                        <div key={group.category}>
                            <h2 className="text-2xl font-semibold">{group.category}</h2>
                            <div className="mt-4 divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                                {group.items.map((item, idx) => (
                                    <details key={idx} className="group">
                                        <summary className="flex cursor-pointer list-none items-center justify-between p-5 hover:bg-neutral-900/60">
                                            <span className="text-base font-medium">{item.q}</span>
                                            <span className="rounded-md bg-rose-700/15 p-2 text-rose-300 ring-1 ring-inset ring-rose-700/30 transition group-open:bg-rose-700/20">
                        <svg className="h-4 w-4 transition group-open:rotate-45" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                      </span>
                                        </summary>
                                        <div className="px-5 pb-5 text-sm text-neutral-300">{item.a}</div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still need help */}
                <div className="mt-12">
                    <div className="relative overflow-hidden rounded-2xl border border-rose-700/30 bg-gradient-to-br from-rose-700/15 via-black to-black p-8">
                        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-rose-700/25 blur-3xl" />
                        <h3 className="text-2xl font-semibold">Still need help?</h3>
                        <p className="mt-2 max-w-2xl text-neutral-200">
                            Visit the Help Center, start a chat, or submit a ticket—our team replies within one business day.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="/help-center"
                                className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Go to Help Center
                            </a>
                            <a
                                href="/help-center/tickets/new"
                                className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                Submit a ticket
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
