"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { SectionHeading } from "./ui/SectionHeading";
import { SITE_CONFIG } from "@/data/constants";
import { Users, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All",
  "Saree",
  "Mehndi",
  "Makeup",
  "Sketches",
  "Handmade Art",
] as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Style Inspiration"
          title="Craft & Styling Inspiration"
          subtitle="Explore the kind of handcrafted creations, traditional henna patterns, and boutique styling available at Shakti Studio. Our real-work gallery is coming soon."
        />

        {/* Transparent Inspiration Notice */}
        <div className="max-w-2xl mx-auto -mt-6 mb-8 text-center px-4">
          <p className="text-xs text-charcoal-700 bg-cream-100/90 py-2 px-4 rounded-full border border-cream-200/80 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>
              Representative style references shown below. Every order is made custom to your requirement.
            </span>
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-maroon-800 text-cream-50 shadow-sm border border-maroon-800"
                    : "bg-cream-100 text-charcoal-700 hover:bg-cream-200 border border-cream-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cream-100 rounded-2xl overflow-hidden border border-cream-200/90 hover:border-gold-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-maroon-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cream-50/90 backdrop-blur-sm text-maroon-900 border border-gold-200/50">
                  {item.category}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-cream-50">
                  <span className="text-[10px] tracking-wider uppercase text-gold-300 font-semibold block mb-0.5">
                    Design Reference
                  </span>
                  <h4 className="text-base font-serif font-bold leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cream-200/90 font-sans mt-0.5 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Growth Note & Community Callout */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-cream-100/90 border border-gold-200 shadow-soft">
          <p className="text-sm sm:text-base text-charcoal-800 font-serif italic mb-4">
            &ldquo;Our gallery is growing. Follow our WhatsApp community for our latest creations.&rdquo;
          </p>
          <a
            href={SITE_CONFIG.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600"
          >
            <Users className="w-4 h-4 text-gold-300" />
            <span>Join WhatsApp Community</span>
          </a>
        </div>
      </div>
    </section>
  );
}
