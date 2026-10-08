import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { LotusMotif, GoldDivider } from "./IndianMotif";

interface PageBannerProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageBanner({
  badge,
  title,
  description,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gold-400/30">
      {/* Decorative ambient background glows */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-maroon-800/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Breadcrumbs Navigation */}
        <nav
          className="inline-flex items-center gap-1.5 text-xs text-cream-300/80 mb-4 bg-maroon-950/60 px-3.5 py-1 rounded-full border border-maroon-800/80"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {index > 0 && (
                  <ChevronRight className="w-3 h-3 text-gold-400 shrink-0" />
                )}
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold-300 transition-colors font-medium"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-300 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Optional Pill Badge */}
        {badge && (
          <div className="block mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-maroon-800/80 text-gold-300 border border-gold-400/30 shadow-xs">
              <LotusMotif className="w-3.5 h-3.5 text-gold-400" />
              <span>{badge}</span>
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream-50 tracking-tight leading-tight max-w-3xl mx-auto">
          {title}
        </h1>

        <div className="flex justify-center my-3">
          <GoldDivider className="w-36" />
        </div>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-base text-cream-200/90 font-sans max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
