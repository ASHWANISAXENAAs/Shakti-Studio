"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Bot,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  Heart,
  Palette,
  Scissors,
  Smile,
  Zap,
} from "lucide-react";
import { STUDIO_PILLARS, StudioCategory, VarietyItem } from "@/data/categories";
import { getWhatsAppUrl } from "@/data/constants";

const OCCASIONS_LIST = [
  { id: "wedding", label: "Wedding & Bridal", icon: "💍" },
  { id: "festival", label: "Festivals (Karwa Chauth / Teej / Diwali)", icon: "🪔" },
  { id: "gifting", label: "Gifting & Anniversary", icon: "🎁" },
  { id: "pooja", label: "Pooja & Auspicious Occasion", icon: "🌸" },
  { id: "party", label: "Party & Family Function", icon: "✨" },
];

export default function SmartStudioFinder() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("beauty-parlour");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("wedding");

  // Pick current pillar
  const currentPillar =
    STUDIO_PILLARS.find((p) => p.id === selectedPillarId) || STUDIO_PILLARS[0];

  // Smart matching logic for variety recommendation
  const getRecommendedVariety = (): VarietyItem => {
    const varieties = currentPillar.varieties;
    if (selectedPillarId === "beauty-parlour") {
      if (selectedOccasion === "wedding") return varieties[0]; // Bridal HD
      if (selectedOccasion === "festival") return varieties[3]; // Festive Henna
      if (selectedOccasion === "party") return varieties[1]; // Party makeup
      return varieties[2]; // Full Hand Mehndi
    }
    if (selectedPillarId === "customise-saree") {
      if (selectedOccasion === "wedding" || selectedOccasion === "festival") return varieties[0]; // Ghungroo
      if (selectedOccasion === "party") return varieties[1]; // Organza
      if (selectedOccasion === "pooja") return varieties[2]; // Silk
      return varieties[3]; // Blouse
    }
    // Art and Craft
    if (selectedOccasion === "pooja" || selectedOccasion === "festival") return varieties[0]; // Mitti Murti
    if (selectedOccasion === "gifting") return varieties[1]; // Pencil Sketch
    if (selectedOccasion === "wedding") return varieties[2]; // Couple Portrait
    return varieties[3]; // Clay decor
  };

  const match = getRecommendedVariety();

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-50 relative overflow-hidden">
      {/* Decorative AI Glow Orbs */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-maroon-700/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with AI Badge */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold-500/15 text-gold-300 border border-gold-400/40 shadow-gold-glow mb-3">
            <Bot className="w-4 h-4 text-gold-400 animate-pulse" />
            <span>Smart Style & Variety Finder</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-cream-50 tracking-tight leading-tight mb-3">
            Find Your Perfect Style in 2 Clicks
          </h2>

          <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-sans">
            Select your category and celebration to let our smart recommender find the ideal handcrafted creation or salon styling for you.
          </p>
        </div>

        {/* Step 1: Select Core Pillar */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3 text-center sm:text-left">
            Step 1: Choose Your Category (कैटेगरी चुनें)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STUDIO_PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-maroon-800/90 border-gold-400 shadow-elevated scale-[1.02]"
                      : "bg-maroon-950/60 border-maroon-800/80 hover:bg-maroon-900/60 hover:border-gold-400/40"
                  }`}
                >
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block ${
                        isSelected
                          ? "bg-gold-400 text-maroon-950"
                          : "bg-maroon-900 text-gold-300 border border-maroon-800"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-cream-50 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-cream-300/80 font-medium">
                      {pillar.hindiTitle}
                    </p>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-gold-400 text-maroon-950"
                        : "bg-maroon-900 text-cream-400"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Occasion Chips */}
        <div className="mb-8">
          <label className="block text-xs font-semibold uppercase tracking-widest text-gold-300 mb-3 text-center sm:text-left">
            Step 2: Select Your Celebration (अवसर चुनें)
          </label>
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {OCCASIONS_LIST.map((occ) => {
              const isSelected = occ.id === selectedOccasion;
              return (
                <button
                  key={occ.id}
                  type="button"
                  onClick={() => setSelectedOccasion(occ.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-gold-400 text-maroon-950 shadow-md font-bold"
                      : "bg-maroon-900/70 text-cream-200 hover:bg-maroon-800 border border-maroon-800"
                  }`}
                >
                  <span>{occ.icon}</span>
                  <span>{occ.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Instant AI Smart Recommendation Match Card */}
        <div className="bg-cream-50 text-charcoal-900 rounded-3xl p-6 sm:p-8 border-2 border-gold-400 shadow-2xl relative animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-maroon-950 shadow-soft">
                <Image
                  src={currentPillar.image}
                  alt={match.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-maroon-800/90 text-gold-300 px-3 py-1 rounded-full text-xs font-bold border border-gold-400/40 backdrop-blur-xs flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Best Match for You</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-cream-50">
                  <span className="text-[10px] text-gold-300 font-semibold tracking-wider uppercase block">
                    {currentPillar.title}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-cream-50 leading-tight">
                    {match.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Column: Variety Details & Action */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-maroon-100 text-maroon-900 border border-maroon-200">
                    {match.hindiName}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-gold-100 text-maroon-950 border border-gold-300">
                    🎯 Perfect for: {match.popularFor}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mb-2">
                  {match.name}
                </h3>

                <p className="text-xs sm:text-sm text-gold-800 font-serif italic mb-3">
                  &ldquo;{match.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                  {match.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-cream-200">
                  {match.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-charcoal-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-charcoal-700 bg-cream-100 px-3 py-2 rounded-xl mb-6 border border-cream-200">
                  <Clock className="w-3.5 h-3.5 text-maroon-700 shrink-0" />
                  <span>
                    <strong>Timeline:</strong> {match.timeline}
                  </span>
                </div>
              </div>

              {/* Direct 1-Click WhatsApp CTA */}
              <div>
                <a
                  href={getWhatsAppUrl(
                    `Hi Shivangi, I used your Smart Style Finder on your website! I am interested in "${match.name}" (${match.hindiName}) for my ${selectedOccasion} celebration. Please share details and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 shadow-md hover:shadow-lg transition-all border border-maroon-700 group"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                  <span>Enquire / Book This Style on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-gold-300" />
                </a>
                <p className="text-[11px] text-charcoal-600 mt-2 italic">
                  Opens directly in WhatsApp with your selected style and occasion prefilled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
