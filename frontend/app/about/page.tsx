'use client'
import React from "react";
import {redirect} from "next/navigation";

type Stat = {
    label: string;
    value: string;
};

const stats: Stat[] = [
    { label: "Monthly plays", value: "120M+" },
    { label: "Avg. uptime", value: "99.98%" },
    { label: "Countries", value: "45+" },
    { label: "Family profiles", value: "6 max" },
];

export default function About() {
    const subscriptionHandler = () => {
        redirect("/subscription");
    }
    return (
        <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-rose-950/25 to-black text-zinc-100">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-rose-600/15 blur-3xl" />
                    <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-rose-700/15 blur-3xl" />
                </div>

                <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
                    <p className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-700/10 px-3 py-1 text-xs font-medium text-rose-200">
                        About Velzion
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                    </p>
                    <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Entertainment made effortless, personal, and accessible.
                    </h1>
                    <p className="mt-4 max-w-2xl text-zinc-300">
                        We blend intuitive design with powerful technology so more of what matters
                        finds the audience—without the noise.
                    </p>
                </div>
            </section>

            {/* Mission + Values */}
            <section className="mx-auto max-w-6xl px-6 pb-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6 shadow-lg shadow-rose-900/10">
                        <h2 className="text-xl font-semibold">Our Mission</h2>
                        <p className="mt-3 text-zinc-300">
                            Build the smoothest path from intent to enjoyment—fast, private, and
                            dependable.
                        </p>
                        <ul className="mt-4 space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                                Smart discovery that respects time and taste
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                                Seamless experience across devices
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                                Privacy-first personalization
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6 shadow-lg shadow-rose-900/10">
                        <h2 className="text-xl font-semibold">Our Values</h2>
                        <div className="mt-3 grid grid-cols-2 gap-3 text-zinc-300 sm:grid-cols-3">
                            {["Users first", "Integrity", "Curiosity", "Craft", "Ownership", "Speed"].map((v) => (
                                <div key={v} className="rounded-lg border border-white/5 bg-black/30 px-3 py-2">
                                    {v}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
                    <h3 className="text-sm font-medium text-zinc-300">Today at a glance</h3>
                    <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 p-4 text-center"
                            >
                                <div className="text-2xl font-semibold">{s.value}</div>
                                <div className="mt-1 text-xs text-zinc-400">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <h2 className="text-2xl font-semibold">Plans that fit</h2>
                <p className="mt-2 max-w-2xl text-zinc-300">
                    Choose Premium or bring everyone with Family—both ad‑free and flexible.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* Premium */}
                    <article className="group relative overflow-hidden rounded-2xl border border-rose-400/20 bg-zinc-900/40 p-6">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-600/20 blur-3xl transition-all duration-500 group-hover:opacity-80" />
                        <h3 className="text-lg font-semibold">Premium Monthly</h3>
                        <p className="mt-1 text-sm text-zinc-400">51% off India offer</p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-3xl font-bold">₹147</span>
                            <span className="text-sm text-zinc-400 line-through">₹299</span>
                            <span className="rounded bg-rose-700/20 px-2 py-0.5 text-xs text-rose-200">51% OFF</span>
                        </div>
                        <ul className="mt-4 space-y-2 text-zinc-300">
                            <li>Ad‑free experience</li>
                            <li>Priority support</li>
                            <li>Early feature access</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <button className="mt-6 w-full rounded-lg bg-rose-700 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500" onClick={() => subscriptionHandler()}>
                            Get Premium
                        </button>
                    </article>

                    {/* Family */}
                    <article className="group relative overflow-hidden rounded-2xl border border-rose-400/15 bg-zinc-900/40 p-6">
                        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-rose-700/15 blur-3xl transition-all duration-500 group-hover:opacity-80" />
                        <h3 className="text-lg font-semibold">Family Pack</h3>
                        <p className="mt-1 text-sm text-zinc-400">40% off India offer</p>
                        <div className="mt-4 flex items-baseline gap-2">
                            <span className="text-3xl font-bold">₹299</span>
                            <span className="text-sm text-zinc-400 line-through">₹499</span>
                            <span className="rounded bg-rose-700/20 px-2 py-0.5 text-xs text-rose-200">40% OFF</span>
                        </div>
                        <ul className="mt-4 space-y-2 text-zinc-300">
                            <li>Up to 6 profiles</li>
                            <li>Family controls</li>
                            <li>Ad‑free for all members</li>
                            <li>Cancel anytime</li>
                        </ul>
                        <button className="mt-6 w-full rounded-lg bg-rose-700 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500" onClick={() => subscriptionHandler()}>
                            Get Family
                        </button>
                    </article>
                </div>
            </section>

            {/* Footer CTA */}
            <footer className="border-t border-white/5 bg-black/40">
                <div className="mx-auto max-w-6xl px-6 py-10">
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h3 className="text-lg font-semibold">The Velzion Promise</h3>
                            <p className="mt-1 text-zinc-300">
                                If something isn’t right, we fix it. If it can be faster, we make it faster.
                            </p>
                        </div>
                        <a
                            href="mailto:support@velzion.com"
                            className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
