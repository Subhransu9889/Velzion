// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[80vh] items-center justify-center bg-black text-white">
            {/* subtle rose glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-700/20 via-transparent to-transparent blur-3xl opacity-30" />

            <div className="relative mx-auto max-w-xl px-6 py-16 text-center">
                <p className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-700/10 px-3 py-1 text-xs font-medium text-rose-200">
                    Error 404
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                </p>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-3 text-neutral-300">
                    The page might have been moved, renamed, or never existed.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md bg-rose-700 px-5 py-3 text-sm font-semibold text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Go to Home
                    </Link>
                    <Link
                        href="/help-center"
                        className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-950 px-5 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-700 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-rose-700/60 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        Visit Help Center
                    </Link>
                </div>
            </div>
        </main>
    );
}
