"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  MessageCircle,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Smile,
  Scissors,
  Palette,
} from "lucide-react";
import { STUDIO_PILLARS, StudioCategory } from "@/data/categories";
import { getWhatsAppUrl } from "@/data/constants";
import { SectionHeading } from "./ui/SectionHeading";

export default function CategoryVarietyExplorer() {
  const [activeTabId, setActiveTabId] = useState<string>("beauty-parlour");

  const currentPillar =
    STUDIO_PILLARS.find((p) => p.id === activeTabId) || STUDIO_PILLARS[0];

  return (
    <section id="categories-varieties" className="py-14 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Signature Collections & Varieties"
          title="Explore by Category & Variety"
          subtitle="Explore our three specialized craft studios. Everything is handcrafted or styled individually with bespoke artistry."
        />

        {/* 3 Pillar Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {STUDIO_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTabId;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTabId(pillar.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 border flex items-center gap-2 ${
                  isActive
                    ? "bg-maroon-800 text-cream-50 shadow-elevated border-maroon-800 scale-[1.02]"
                    : "bg-cream-100/90 text-charcoal-800 hover:bg-cream-200 border-cream-200/90"
                }`}
              >
                {pillar.id === "beauty-parlour" && <Smile className="w-4 h-4 text-gold-400" />}
                {pillar.id === "customise-saree" && <Scissors className="w-4 h-4 text-gold-400" />}
                {pillar.id === "art-and-craft" && <Palette className="w-4 h-4 text-gold-400" />}
                <div className="text-left">
                  <span>{pillar.title}</span>
                  <span className="block text-[10px] font-normal opacity-80">
                    {pillar.hindiTitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Overview Banner */}
        <div className="bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 rounded-3xl p-6 sm:p-8 border border-gold-300/80 mb-10 shadow-soft">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-maroon-50 text-maroon-900 border border-maroon-200">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>{currentPillar.badge}</span>
                <span className="text-maroon-600">• {currentPillar.hindiTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
                {currentPillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                {currentPillar.detailedDesc}
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(
                  `Hi Shivangi, I am exploring your "${currentPillar.title}" collection and would like to consult with you.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-50 transition-colors shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-gold-300" />
                <span>Consult on WhatsApp</span>
              </a>
              <span className="text-[11px] text-charcoal-600 text-center sm:text-right">
                ✨ Direct one-on-one reply by Shivangi
              </span>
            </div>
          </div>
        </div>

        {/* Varieties Grid for Selected Pillar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {currentPillar.varieties.map((variety, idx) => (
            <div
              key={variety.name}
              className="bg-cream-100/70 rounded-2xl p-6 border border-cream-200/90 hover:border-gold-300 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-maroon-900 bg-cream-50 px-2.5 py-1 rounded-lg border border-cream-200">
                    {variety.hindiName}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-800 bg-gold-50 px-2.5 py-1 rounded-lg border border-gold-200">
                    <Clock className="w-3 h-3 text-gold-600" />
                    <span>{variety.timeline}</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-serif font-bold text-maroon-950 mb-1 group-hover:text-maroon-700 transition-colors">
                  {variety.name}
                </h4>

                <p className="text-xs sm:text-sm text-gold-800 font-serif italic mb-3">
                  &ldquo;{variety.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                  {variety.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-cream-200/80">
                  {variety.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-charcoal-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Popular For */}
                <div className="mb-5 text-[11px] text-charcoal-700 bg-cream-50 p-2.5 rounded-xl border border-cream-200">
                  <span className="font-bold text-maroon-900">Recommended for: </span>
                  <span>{variety.popularFor}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(variety.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-50 transition-colors shadow-xs group/btn"
              >
                <MessageCircle className="w-4 h-4 text-gold-300 group-hover/btn:scale-110 transition-transform" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
