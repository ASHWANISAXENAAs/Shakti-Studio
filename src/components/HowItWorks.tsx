import React from "react";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/steps";
import { SectionHeading } from "./ui/SectionHeading";
import { getWhatsAppUrl } from "@/data/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-cream-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple & Personal"
          title="How It Works"
          subtitle="Booking or ordering custom handcrafted work at Shakti Studio is transparent, friendly, and done directly with the artist on WhatsApp."
        />

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const isLast = index === HOW_IT_WORKS_STEPS.length - 1;
            return (
              <div
                key={step.number}
                className="bg-cream-50 rounded-2xl p-5 sm:p-6 border border-cream-200/90 shadow-soft hover:shadow-elevated hover:border-gold-300 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-maroon-800 text-gold-300 font-serif font-bold text-base flex items-center justify-center shadow-xs">
                      {step.number}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200/60">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-maroon-950 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-cream-200/80 flex items-center gap-1.5 text-xs font-medium text-maroon-800">
                  <Check className="w-3.5 h-3.5 text-gold-600" />
                  <span>
                    {isLast ? "Ready for your moment" : "Quick & easy"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl("Hi Shivangi, I am ready to discuss my requirement!")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 shadow-soft hover:shadow-elevated transition-all"
          >
            <MessageCircle className="w-4 h-4 text-gold-300" />
            <span>Start Your Order on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
