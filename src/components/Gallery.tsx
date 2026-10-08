"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { SectionHeading } from "./ui/SectionHeading";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import {
  Users,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Saree",
  "Mehndi",
  "Makeup",
  "Sketches",
  "Handmade Art",
] as const;

interface GalleryProps {
  isPaginated?: boolean;
  itemsPerPage?: number;
  showHeading?: boolean;
  limitItems?: number;
  showViewAllButton?: boolean;
}

export default function Gallery({
  isPaginated = true,
  itemsPerPage = 6,
  showHeading = true,
  limitItems,
  showViewAllButton = false,
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Filter items based on category
  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Handle modal escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute pagination
  const totalItems = filteredItems.length;
  const effectiveItemsPerPage = limitItems || itemsPerPage;
  const totalPages = Math.ceil(totalItems / effectiveItemsPerPage);

  const paginatedItems = isPaginated && !limitItems
    ? filteredItems.slice(
        (currentPage - 1) * effectiveItemsPerPage,
        currentPage * effectiveItemsPerPage
      )
    : limitItems
    ? filteredItems.slice(0, limitItems)
    : filteredItems;

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const galleryElem = document.getElementById("gallery-items-top");
      if (galleryElem) {
        galleryElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            badge="Our Work"
            title="Real Work & Style Inspiration"
            subtitle="Actual handcrafted creations by Shakti Studio — sketches, custom sarees, traditional henna, and boutique styling."
          />
        )}

        {/* Legend */}
        <div className="max-w-2xl mx-auto -mt-6 mb-8 text-center px-4 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-maroon-800 text-cream-50 px-3 py-1.5 rounded-full border border-maroon-700">
            <Sparkles className="w-3 h-3 text-gold-300" />
            Actual Work
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 bg-cream-100/90 py-1.5 px-3 rounded-full border border-cream-200/80">
            Style Reference
          </span>
          <span className="text-xs text-charcoal-600 italic">
            — Every order is custom-made to your requirement
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div
          id="gallery-items-top"
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar"
        >
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
                {cat === "All" && (
                  <span className="ml-1.5 text-[10px] opacity-80">({GALLERY_ITEMS.length})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pagination Counter Info */}
        {isPaginated && !limitItems && (
          <div className="flex items-center justify-between text-xs text-charcoal-700 mb-6 px-1">
            <p>
              Showing{" "}
              <strong className="text-maroon-900 font-bold">
                {totalItems === 0 ? 0 : (currentPage - 1) * effectiveItemsPerPage + 1}
              </strong>
              –
              <strong className="text-maroon-900 font-bold">
                {Math.min(currentPage * effectiveItemsPerPage, totalItems)}
              </strong>{" "}
              of <strong className="text-maroon-900 font-bold">{totalItems}</strong> items
            </p>
            <p className="font-medium text-gold-700">
              Page {currentPage} of {totalPages || 1}
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className="group bg-cream-100 rounded-2xl overflow-hidden border border-cream-200/90 hover:border-gold-300 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div
                className="relative w-full h-72 sm:h-80 overflow-hidden bg-maroon-900 cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent pointer-events-none" />

                {/* Badge: Real Work vs Reference */}
                <div
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm border ${
                    item.isRealWork
                      ? "bg-maroon-800/90 text-cream-50 border-maroon-700 flex items-center gap-1"
                      : "bg-cream-50/90 text-maroon-900 border-gold-200/50"
                  }`}
                >
                  {item.isRealWork ? (
                    <>
                      <Sparkles className="w-2.5 h-2.5 text-gold-300" />
                      <span>Actual Work</span>
                    </>
                  ) : (
                    <span>{item.category}</span>
                  )}
                </div>

                {/* Zoom indicator on hover */}
                <div className="absolute top-3 left-3 p-2 rounded-full bg-maroon-950/70 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-300" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-cream-50">
                  <h4 className="text-base font-serif font-bold leading-tight group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cream-200/90 font-sans mt-0.5 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-3 bg-cream-50 flex items-center justify-between border-t border-cream-200/80">
                <span className="text-[11px] text-charcoal-700 font-medium">
                  {item.category}
                </span>
                <a
                  href={getWhatsAppUrl(
                    `Hi Shivangi, I saw "${item.title}" in your gallery and would like to ask about it!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-800 hover:text-maroon-950"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-maroon-700" />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Pagination Controls Bar */}
        {isPaginated && !limitItems && totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-cream-200">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentPage === 1
                  ? "bg-cream-100 text-charcoal-700 cursor-not-allowed opacity-50 border border-cream-200"
                  : "bg-cream-100 text-maroon-950 hover:bg-cream-200 border border-cream-300 shadow-xs"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Numeric Page Buttons */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-maroon-800 text-cream-50 shadow-md border border-maroon-800 scale-105"
                        : "bg-cream-100 text-charcoal-800 hover:bg-cream-200 border border-cream-200"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentPage === totalPages
                  ? "bg-cream-100 text-charcoal-700 cursor-not-allowed opacity-50 border border-cream-200"
                  : "bg-cream-100 text-maroon-950 hover:bg-cream-200 border border-cream-300 shadow-xs"
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* View All Button on Home Page */}
        {showViewAllButton && (
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 shadow-soft hover:shadow-elevated transition-all border border-maroon-700"
            >
              <span>View Full Gallery (All Photos & Pagination)</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>
          </div>
        )}

        {/* Community Callout */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto p-6 sm:p-8 rounded-2xl bg-cream-100/90 border border-gold-200 shadow-soft">
          <p className="text-sm sm:text-base text-charcoal-800 font-serif italic mb-4">
            &ldquo;More of our work is shared regularly on our WhatsApp community. Join us for latest creations!&rdquo;
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

      {/* Lightbox Modal for enlarged view */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-maroon-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-cream-50 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gold-300/60"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-maroon-950/80 text-cream-50 hover:bg-maroon-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative w-full h-80 sm:h-96 bg-maroon-950">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-maroon-100 text-maroon-900">
                  {activeModalItem.category}
                </span>
                {activeModalItem.isRealWork && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gold-100 text-maroon-900 border border-gold-300">
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    Actual Shakti Studio Work
                  </span>
                )}
              </div>

              <h3 className="text-xl font-serif font-bold text-maroon-950 mb-1">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                {activeModalItem.caption}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(
                    `Hi Shivangi, I am interested in an order similar to "${activeModalItem.title}". Can you share details?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors shadow-soft"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300" />
                  <span>Enquire About This on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-charcoal-700 bg-cream-200 hover:bg-cream-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
