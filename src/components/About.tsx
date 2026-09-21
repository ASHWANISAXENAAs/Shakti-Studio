import React from "react";
import { MessageCircle, Heart, Sparkles, Palette, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { LotusMotif, GoldDivider } from "./ui/IndianMotif";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* 
            Left Column: Decorative Brand Emblem & Artisan Studio Artwork
            (NOTE: Stock photos of women have been strictly removed. When an authentic photograph 
            of Shivangi Saxena becomes available, it can easily replace this emblem card.)
          */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-gold-300/80 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 p-6 sm:p-8 text-cream-50 flex flex-col items-center justify-between min-h-[380px] sm:min-h-[440px]">
                {/* Decorative Arch & Corner Details */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/60 pointer-events-none" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400/60 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400/60 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/60 pointer-events-none" />

                {/* Subtle Background Glow */}
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Studio Monogram Emblem */}
                <div className="relative z-10 text-center pt-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-maroon-800 to-maroon-950 border-2 border-gold-400/80 flex items-center justify-center shadow-gold-glow mb-4 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold-300/30 flex items-center justify-center">
                      <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-300">
                        SS
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-widest text-gold-300 block mb-1">
                    Creative Artisan Studio
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream-50">
                    {SITE_CONFIG.name}
                  </h3>
                  <p className="text-xs text-cream-200/80 font-serif italic mt-1">
                    &ldquo;{SITE_CONFIG.tagline}&rdquo;
                  </p>
                </div>

                {/* Subtle Divider */}
                <GoldDivider className="my-4 relative z-10 w-full" />

                {/* Founder Identity Plaque */}
                <div className="relative z-10 w-full p-3.5 rounded-xl bg-maroon-900/80 backdrop-blur-xs border border-gold-400/30 text-center">
                  <p className="text-sm font-serif font-bold text-cream-50">
                    {SITE_CONFIG.owner}
                  </p>
                  <p className="text-xs text-gold-300 font-medium mt-0.5">
                    {SITE_CONFIG.ownerRole}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-cream-300/80 mt-1.5 pt-1.5 border-t border-maroon-800/80">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{SITE_CONFIG.location.shortLocation}</span>
                  </div>
                </div>
              </div>

              {/* Decorative background ambient glow */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-200/30 rounded-full blur-2xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Authentic & Genuine Story */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-maroon-50 text-maroon-800 border border-maroon-200/70 mb-3">
              <LotusMotif className="w-3.5 h-3.5 text-gold-600" />
              <span>Behind the Studio</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950 leading-tight mb-2">
              Meet Shivangi Saxena
            </h2>

            <p className="text-sm sm:text-base text-gold-700 font-serif italic mb-6">
              Founder & Creative Artist, Shakti Studio
            </p>

            <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
              <p>
                Welcome to <strong>Shakti Studio</strong>! I created this studio to bring
                together my love for handcrafted creations, traditional Indian beauty rituals,
                and heartfelt personalized art.
              </p>
              <p>
                Whether it is detailing a saree with delicate ghungroo accents, sculpting clay
                into festive idols and decorative art, drawing an expressive portrait sketch from a
                photograph, or styling mehndi and occasion makeup for your special day — every creation is
                infused with personal warmth and attentive care.
              </p>
              <p>
                As an artist-run small studio based in Gola Gokaran Nath, Uttar Pradesh, you
                communicate directly with me on WhatsApp. Share your references, ideas, or event
                dates, and we will discuss details and create something meaningful tailored to you.
              </p>
            </div>

            {/* Core Boutique Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8 pt-6 border-t border-cream-200">
              <div className="p-3 bg-cream-100 rounded-xl border border-cream-200/80">
                <Heart className="w-4 h-4 text-maroon-700 mb-1.5" />
                <h4 className="text-xs font-semibold text-maroon-900">Made with Love</h4>
                <p className="text-[11px] text-charcoal-700">Personal care for every piece</p>
              </div>
              <div className="p-3 bg-cream-100 rounded-xl border border-cream-200/80">
                <Sparkles className="w-4 h-4 text-gold-600 mb-1.5" />
                <h4 className="text-xs font-semibold text-maroon-900">Celebratory Grace</h4>
                <p className="text-[11px] text-charcoal-700">Rooted in Indian traditions</p>
              </div>
              <div className="p-3 bg-cream-100 rounded-xl border border-cream-200/80">
                <Palette className="w-4 h-4 text-terracotta-600 mb-1.5" />
                <h4 className="text-xs font-semibold text-maroon-900">Tailored Artistry</h4>
                <p className="text-[11px] text-charcoal-700">Customized to your requirement</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I read about your work at Shakti Studio and wanted to connect!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600"
              >
                <MessageCircle className="w-4 h-4 text-gold-300" />
                <span>Say Hello on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
