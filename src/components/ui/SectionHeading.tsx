import React from "react";
import { GoldDivider } from "./IndianMotif";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-maroon-50 text-maroon-700 border border-maroon-100 mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950 tracking-tight leading-tight">
        {title}
      </h2>
      <GoldDivider className="my-4" />
      {subtitle && (
        <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
