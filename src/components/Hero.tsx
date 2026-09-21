import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowRight, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { LotusMotif, GoldDivider } from "./ui/IndianMotif";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-6 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100/60"
    >
      {/* Subtle decorative background flourishes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-maroon-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Narrative, and Calls-to-Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-maroon-50 text-maroon-800 border border-maroon-200/70 shadow-sm mb-5">
              <LotusMotif className="w-4 h-4 text-maroon-700" />
              <span>Handcrafted with Love • Styled for Your Moments</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-maroon-950 tracking-tight leading-[1.15] mb-5">
              Made Special, <br className="hidden sm:inline" />
              <span className="text-maroon-700 relative inline-block">
                Just for You.
                <span
                  className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-transparent rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 mb-8">
              From handcrafted sarees and personalised art to mehndi and bridal
              beauty — <strong className="text-maroon-900 font-semibold">Shakti Studio</strong>{" "}
              adds a personal touch to your most beautiful moments.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maroon-700 border border-maroon-700"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </a>

              <a
                href={getWhatsAppUrl("Hi Shivangi, I am interested in exploring Shakti Studio services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-maroon-900 bg-cream-50 hover:bg-gold-50 border border-gold-300 hover:border-gold-400 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500"
              >
                <MessageCircle className="w-5 h-5 text-maroon-700" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-cream-300/70 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-maroon-900">Custom Made</h4>
                  <p className="text-[11px] text-charcoal-700">Tailored to you</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                <div className="w-7 h-7 rounded-full bg-maroon-100 flex items-center justify-center text-maroon-700 shrink-0">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-maroon-900">Handcrafted</h4>
                  <p className="text-[11px] text-charcoal-700">Artistic care</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                <div className="w-7 h-7 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-maroon-900">Direct Chat</h4>
                  <p className="text-[11px] text-charcoal-700">Personal guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative gold/maroon framed container */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-gold-300/80 bg-cream-100 p-2 sm:p-2.5">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl overflow-hidden bg-maroon-950">
                  {/* Hero Showcase Image */}
                  <Image
                    src="/images/shakti-ghungroo-saree-hero.webp"
                    alt="Elegant ivory and maroon saree with handcrafted ghungroo border — Shakti Studio style inspiration"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    className="object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Content Card over Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-cream-50/95 backdrop-blur-md border border-gold-200/80 shadow-md">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gold-700 block">
                          Boutique Creation
                        </span>
                        <p className="text-sm font-serif font-bold text-maroon-950">
                          Sarees • Mehndi • Clay Art • Makeup
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-maroon-800 text-gold-300 flex items-center justify-center shrink-0 shadow-sm">
                        <LotusMotif className="w-5 h-5 text-gold-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold-500 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
