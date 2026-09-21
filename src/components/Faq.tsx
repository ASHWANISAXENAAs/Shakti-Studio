"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { SectionHeading } from "./ui/SectionHeading";
import { getWhatsAppUrl } from "@/data/constants";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our handcrafted designs, custom requests, and booking process."
        />

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-cream-100/80 border border-cream-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-maroon-950 group-hover:text-maroon-700 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-cream-50 border border-cream-300 flex items-center justify-center shrink-0 text-maroon-800 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-maroon-50 border-maroon-200 text-maroon-900" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans border-t border-cream-200/60"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional query footer notice */}
        <div className="mt-10 p-6 rounded-2xl bg-cream-100 border border-gold-200/70 text-center">
          <p className="text-sm text-charcoal-800 font-sans mb-3">
            Have a question not listed here? Shivangi is happy to help directly.
          </p>
          <a
            href={getWhatsAppUrl("Hi Shivangi, I have a question about Shakti Studio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-maroon-800 hover:text-maroon-950 underline underline-offset-4 decoration-gold-400"
          >
            <MessageCircle className="w-4 h-4 text-maroon-700" />
            <span>Ask Shivangi on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
