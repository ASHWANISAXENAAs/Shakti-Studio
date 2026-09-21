import React from "react";

export function LotusMotif({ className = "w-6 h-6 text-gold-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3c-1.5 3-3.5 6-3.5 9 0 3 1.5 5 3.5 6 2-1 3.5-3 3.5-6 0-3-2-6-3.5-9z" />
      <path d="M8.5 12c-2.5-1.5-4.5-1-6 1 2 2.5 4.5 3 6 1.5" />
      <path d="M15.5 12c2.5-1.5 4.5-1 6 1-2 2.5-4.5 3-6 1.5" />
      <path d="M4 18c3-1 6 0 8 2 2-2 5-3 8-2" />
    </svg>
  );
}

export function PaisleyMotif({ className = "w-6 h-6 text-gold-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 11.5 2.5C18.5 14 18 10 12 2z" />
      <circle cx="12" cy="13" r="2.5" />
      <path d="M12 2c2 2 3 4 3 6" />
    </svg>
  );
}

export function GoldDivider({ className = "my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-500" />
      <div className="w-2 h-2 rotate-45 border border-gold-500 bg-cream-50" />
      <div className="w-3 h-3 rotate-45 bg-gold-400/30 border border-gold-500 flex items-center justify-center">
        <div className="w-1 h-1 bg-maroon-700 rounded-full" />
      </div>
      <div className="w-2 h-2 rotate-45 border border-gold-500 bg-cream-50" />
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-500" />
    </div>
  );
}
