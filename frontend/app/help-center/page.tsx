// app/help-center/page.tsx
// Tailwind + black background + rose-700 accents

export default function HelpCenterPage() {
    const categories = [
        { key: "account", title: "Account & Billing", desc: "Manage plans, payments, and invoices." },
        { key: "streaming", title: "Streaming & Playback", desc: "Fix buffering, quality, and device issues." },
        { key: "devices", title: "Devices & Apps", desc: "Install apps and troubleshoot on TV/mobile." },
        { key: "content", title: "Content & Library", desc: "Watchlists, downloads, and recommendations." },
        { key: "security", title: "Security & Privacy", desc: "2FA, sessions, and data requests." },
        { key: "developer", title: "Developer & API", desc: "Guides for partners and integrations." },
    ]

    const faqs = [
        {
            q: "How to reset the password?",
            a: "Go to Settings → Security → Reset Password. A verification link will be sent to the registered email. Follow the link to set a new password.",
        },
        {
            q: "Why is the video quality poor?",
            a: "Check connection speed (10+ Mbps recommended for HD). Toggle Auto Quality in the player or set a higher resolution manually.",
        },
        {
            q: "How do I change my plan?",
            a: "Navigate to Account → Plan & Billing → Change Plan. Choose a plan and confirm. Changes apply immediately with prorated billing.",
        },
        {
            q: "Can I watch offline?",
            a: "Yes, on supported mobile apps. Find the download icon on the title page, then play from Library → Downloads.",
        },
    ]

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero + Search */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-rose-700/20 via-transparent to-transparent blur-3xl opacity-30" />
                <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Help Center
                    </h1>
                    <p className="mt-3 max-w-2xl text-neutral-300">
                        Find answers fast, browse categories, or reach the Velzion support team.
                    </p>

                    <form
                        action="/help-center/search"
                        className="mt-8"
                        role="search"
                        aria-label="Search Help Center"
                    >
                        <div className="relative">
                            <input
                                type="search"
                                name="q"
                                placeholder="Search articles, FAQs, and guides…"
                                className="w-full rounded-xl border border-neutral-800 bg-neutral-950/70 px-4 py-4 pr-12 text-sm text-white placeholder-neutral-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
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

            {/* Categories */}
            <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
                <h2 className="text-2xl font-semibold">Browse by category</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((c) => (
                        <a
                            key={c.key}
                            href={`/help-center/${c.key}`}
                            className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-rose-700/40 hover:bg-neutral-900/60"
                        >
                            <div className="h-1 w-10 rounded-full bg-rose-700" />
                            <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{c.desc}</p>
                            <div className="mt-4 inline-flex items-center gap-2 text-sm text-rose-300 group-hover:text-rose-200">
                                Explore
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Featured FAQs (Accordion) */}
            <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-semibold">Popular FAQs</h2>
                    <a href="/help-center/faqs" className="text-sm text-rose-300 hover:text-rose-200">
                        View all
                    </a>
                </div>

                <div className="mt-6 divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                    {faqs.map((item, idx) => (
                        <details key={idx} className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between p-5 hover:bg-neutral-900/60">
                                <span className="text-base font-medium">{item.q}</span>
                                <span className="rounded-md bg-rose-700/15 p-2 text-rose-300 ring-1 ring-inset ring-rose-700/30 transition group-open:bg-rose-700/20">
                  <svg
                      className="h-4 w-4 transition group-open:rotate-45"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                </span>
                            </summary>
                            <div className="px-5 pb-5 text-sm text-neutral-300">{item.a}</div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Contact options */}
            <section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
                <h2 className="text-2xl font-semibold">Need more help?</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Email support",
                            desc: "Get a response within 24 hours from our support specialists.",
                            cta: { label: "Email us", href: "mailto:support@velzion.com" },
                        },
                        {
                            title: "Live chat",
                            desc: "Chat with an expert for quick fixes and account help.",
                            cta: { label: "Start chat", href: "/help-center/chat" },
                        },
                        {
                            title: "System status",
                            desc: "View real-time uptime and incident reports.",
                            cta: { label: "Status page", href: "/status" },
                        },
                    ].map((c) => (
                        <div
                            key={c.title}
                            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 hover:border-rose-700/40 transition"
                        >
                            <h3 className="text-lg font-semibold">{c.title}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{c.desc}</p>
                            <a
                                href={c.cta.href}
                                className="mt-4 inline-flex items-center rounded-md bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                {c.cta.label}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="relative overflow-hidden rounded-2xl border border-rose-700/30 bg-gradient-to-br from-rose-700/20 via-black to-black p-8 md:p-12">
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-rose-700/25 blur-3xl" />
                    <h3 className="text-2xl font-semibold">Can’t find what’s needed?</h3>
                    <p className="mt-2 max-w-2xl text-neutral-200">
                        Search the full knowledge base or submit a ticket—our team replies within a business day.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="/help-center/search"
                            className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-700/25 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Search articles
                        </a>
                        <a
                            href="/help-center/tickets/new"
                            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Submit a ticket
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
