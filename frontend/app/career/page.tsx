// app/careers/page.tsx (Next.js App Router)
// Requires Tailwind configured. Uses black background + rose-700 accents.

export default function CareersPage() {
    const roles = [
        {
            id: "fe-eng",
            title: "Senior Frontend Engineer",
            location: "Remote / Bengaluru",
            type: "Full-time",
            tags: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
            id: "be-eng",
            title: "Backend Engineer",
            location: "Remote / Bengaluru",
            type: "Full-time",
            tags: ["Node.js", "PostgreSQL", "AWS"],
        },
        {
            id: "pm",
            title: "Product Manager",
            location: "Hybrid / Bengaluru",
            type: "Full-time",
            tags: ["Roadmaps", "Analytics", "Stakeholders"],
        },
    ]

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-rose-700/40 via-rose-700/10 to-transparent blur-3xl" />
                <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
          <span className="inline-flex items-center rounded-full border border-rose-700/40 bg-rose-700/10 px-3 py-1 text-xs font-medium text-rose-300">
            We’re hiring across product, design, and engineering
          </span>
                    <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                        Build the future of streaming with Velzion
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300">
                        Join a team crafting cinematic experiences for millions. Work with modern stacks,
                        ship fast, and grow in a culture that values craft, autonomy, and impact.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#open-roles"
                            className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-700/25 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black transition"
                        >
                            View open roles
                        </a>
                        <a
                            href="#life-at-velzion"
                            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black transition"
                        >
                            Life at Velzion
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section id="life-at-velzion" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold">Craft over hype</h3>
                        <p className="mt-2 text-neutral-300">
                            Product-first decisions, thoughtful velocity, and a deep respect for design and engineering quality.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold">Autonomy with support</h3>
                        <p className="mt-2 text-neutral-300">
                            Small teams, clear ownership, strong mentorship, and access to the tools needed to excel.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold">Impact at scale</h3>
                        <p className="mt-2 text-neutral-300">
                            Ship work that delights millions globally—measured by real user outcomes and performance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <h2 className="text-2xl font-semibold">Benefits & Perks</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Competitive compensation", desc: "Market-aligned salary, performance bonus, and equity." },
                        { title: "Flexible work", desc: "Remote-friendly with flexible hours and async culture." },
                        { title: "Learning budget", desc: "Annual budget for courses, books, and conferences." },
                        { title: "Top-tier gear", desc: "Modern laptops, 4K displays, and premium dev tooling." },
                        { title: "Health & wellness", desc: "Comprehensive medical cover and wellness stipend." },
                        { title: "Team offsites", desc: "Bi-annual offsites focused on vision, alignment, and fun." },
                    ].map((b) => (
                        <div
                            key={b.title}
                            className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-rose-700/40 transition"
                        >
                            <div className="h-1 w-10 rounded-full bg-rose-700" />
                            <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Open roles */}
            <section id="open-roles" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold">Open Roles</h2>
                    <a
                        href="mailto:careers@velzion.com?subject=General%20Application"
                        className="text-sm font-medium text-rose-300 hover:text-rose-200"
                    >
                        Didn’t find a fit? Send a general application →
                    </a>
                </div>

                <div className="mt-8 divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                    {roles.map((role) => (
                        <a
                            key={role.id}
                            href={`/careers/${role.id}`}
                            className="flex flex-col gap-4 p-6 transition hover:bg-neutral-900/60 md:flex-row md:items-center md:justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-md bg-rose-700/15 px-2 py-1 text-xs font-medium text-rose-300 ring-1 ring-inset ring-rose-700/30">
                    Hiring now
                  </span>
                                    <h3 className="text-lg font-semibold">{role.title}</h3>
                                </div>
                                <p className="mt-2 text-sm text-neutral-300">
                                    {role.location} • {role.type}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {role.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-neutral-800 bg-black/60 px-2 py-1 text-xs text-neutral-300"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-neutral-400">View details</span>
                                <svg
                                    className="h-5 w-5 text-rose-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="relative overflow-hidden rounded-2xl border border-rose-700/30 bg-gradient-to-br from-rose-700/20 via-black to-black p-8 md:p-12">
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-rose-700/25 blur-3xl" />
                    <h3 className="text-2xl font-semibold">Make your mark at Velzion</h3>
                    <p className="mt-2 max-w-2xl text-neutral-200">
                        If the role isn’t listed but the mission resonates, reach out. Exceptional talent always finds a place here.
                    </p>
                    <div className="mt-6">
                        <a
                            href="mailto:careers@velzion.com?subject=Application%20-%20Velzion"
                            className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-700/25 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black transition"
                        >
                            Apply now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
