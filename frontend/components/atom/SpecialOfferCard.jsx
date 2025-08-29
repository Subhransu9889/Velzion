import React from "react";

const clsx = (...args) => args.filter(Boolean).join(" ");

const formatINR = (value) => {
    const num = typeof value === "string" ? Number(value) : value;
    if (Number.isNaN(num)) return `₹${value}`;
    try {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(num);
    } catch {
        return `₹${value}`;
    }
};

const Bullet = ({ children }) => (
    <li className="flex items-start gap-2">
        <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-yellow-300 shadow-[0_0_0_2px_rgba(234,179,8,0.25)]" />
        <span>{children}</span>
    </li>
);

const SpecialOfferCard = ({
                              title,
                              features,
                              price,
                              originalPrice,
                              discountLabel,
                              duration = "Monthly",
                              isActive = false,
                              onClick,
                              className,
                              highlightLabel = "Special Offer",
                          }) => {
    const activeRing =
        "ring-2 ring-yellow-300/80 shadow-[0_0_0_4px_rgba(234,179,8,0.15)]";

    const handleKeyDown = (e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <div
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : -1}
            aria-pressed={onClick ? isActive : undefined}
            aria-label={`${title} plan ${discountLabel ? `- ${discountLabel}` : ""}`}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className={clsx(
                "group relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300",
                isActive ? activeRing : "ring-1 ring-white/10",
                className
            )}
        >
            {/* Gradient border */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-fuchsia-500/20 via-purple-600/20 to-indigo-500/20 blur-sm" />

            {/* Inner content */}
            <div
                className={clsx(
                    "relative rounded-2xl bg-[linear-gradient(180deg,rgba(17,17,27,0.85)_0%,rgba(10,10,18,0.85)_100%)]",
                    "backdrop-blur-md text-white shadow-xl",
                    "transition-all duration-300",
                    "hover:shadow-2xl hover:shadow-fuchsia-900/20"
                )}
            >
                {/* Shimmer accent */}
                <div className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                    <div className="inline-flex items-center gap-1 rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-purple-900 shadow-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-900/80" />
                        {highlightLabel}
                    </div>
                </div>

                {/* Body */}
                <div className="flex h-full flex-col justify-between p-6 sm:p-7 md:p-8">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mt-2">
                        {title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                        {features?.map((feature, i) => (
                            <Bullet key={i}>{feature}</Bullet>
                        ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between">
            <span className="rounded-lg border border-yellow-300/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-yellow-200">
              {duration}
            </span>

                        <div className="text-right">
                            <div className="text-4xl font-extrabold leading-none">
                                {formatINR(price)}
                            </div>
                            <div className="mt-1 flex items-center justify-end gap-2">
                                {originalPrice !== undefined && (
                                    <span className="text-xs text-zinc-400 line-through">
                    {formatINR(originalPrice)}
                  </span>
                                )}
                                {discountLabel && (
                                    <span className="rounded bg-yellow-300/20 px-2 py-0.5 text-xs font-semibold text-yellow-200">
                    {discountLabel}
                  </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {onClick && (
                        <button
                            type="button"
                            className={clsx(
                                "mt-6 inline-flex w-full items-center justify-center rounded-xl",
                                "bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600",
                                "px-4 py-2.5 text-sm font-medium shadow-lg",
                                "transition-all duration-300",
                                "hover:from-fuchsia-500 hover:via-violet-500 hover:to-indigo-500",
                                "focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60",
                                "active:scale-[0.99]"
                            )}
                        >
                            Choose {title}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpecialOfferCard;
