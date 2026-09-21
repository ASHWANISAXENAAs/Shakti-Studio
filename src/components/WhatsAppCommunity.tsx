import React from "react";
import { Users, Bell, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/constants";
import { LotusMotif } from "./ui/IndianMotif";

export default function WhatsAppCommunity() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-950 text-cream-50 relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Motif Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-maroon-800/80 text-gold-300 border border-gold-400/30 mb-6 shadow-sm">
          <LotusMotif className="w-4 h-4 text-gold-400" />
          <span>Exclusive Creative Circle</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50 tracking-tight leading-tight mb-5">
          Stay Close to Shakti Studio
        </h2>

        {/* Exact Specified Text */}
        <p className="text-base sm:text-lg text-cream-200 font-sans max-w-2xl mx-auto leading-relaxed mb-8">
          Join our WhatsApp community to discover new designs, recent work, festive creations,
          booking updates and special announcements.
        </p>

        {/* Community Benefits Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-xl bg-maroon-900/60 border border-gold-400/20 backdrop-blur-xs flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-400/20 text-gold-300 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-cream-100">Festive First-Looks</h4>
              <p className="text-[11px] text-cream-300/80">New saree & clay art collections</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-maroon-900/60 border border-gold-400/20 backdrop-blur-xs flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-400/20 text-gold-300 shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-cream-100">Booking Slot Alerts</h4>
              <p className="text-[11px] text-cream-300/80">Festive & wedding mehndi dates</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-maroon-900/60 border border-gold-400/20 backdrop-blur-xs flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold-400/20 text-gold-300 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-cream-100">Close-Knit Circle</h4>
              <p className="text-[11px] text-cream-300/80">Direct connection with Shivangi</p>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div>
          <a
            href={SITE_CONFIG.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold bg-gold-400 hover:bg-gold-500 text-maroon-950 shadow-gold-glow transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-400"
          >
            <Users className="w-5 h-5 text-maroon-900" />
            <span>Join WhatsApp Community</span>
            <ArrowRight className="w-4 h-4 text-maroon-900" />
          </a>
        </div>
      </div>
    </section>
  );
}
