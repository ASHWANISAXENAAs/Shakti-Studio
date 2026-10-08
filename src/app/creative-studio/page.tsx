import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  Palette,
  Scissors,
  CheckCircle2,
  ChevronRight,
  Send,
  HelpCircle,
  Package,
  Layers,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { PageBanner } from "@/components/ui/PageBanner";
import { LotusMotif, GoldDivider, PaisleyMotif } from "@/components/ui/IndianMotif";

export const metadata: Metadata = {
  title: "Customized Sarees & Handmade Art | Shivangi Shakti Studio",
  description:
    "Explore bespoke Ghungroo border sarees, hand-drawn pencil portrait sketches, eco-friendly Mitti Ki Murti, and artisan clay creations crafted by Shivangi in Gola Gokaran Nath.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/creative-studio`,
  },
  openGraph: {
    title: "Customized Sarees & Handmade Art | Shivangi Shakti Studio",
    description:
      "Handcrafted ghungroo sarees, custom photo sketches, eco-friendly clay murtis & artisan crafts at Shivangi Shakti Studio in Gola Gokaran Nath. WhatsApp for custom orders.",
    url: `${SITE_CONFIG.siteUrl}/creative-studio`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

const SAREE_SAMPLES = [
  {
    title: "Sky Blue Organza Ghungroo Saree",
    desc: "Lightweight pastel sheer organza with golden ghungroo border trim.",
    image: "/images/saree-sample-sky-blue.jpg",
  },
  {
    title: "Rani Magenta Festive Saree",
    desc: "Rich festive magenta silk georgette with detailed musical ghungroo accents.",
    image: "/images/saree-sample-magenta.jpg",
  },
  {
    title: "Signature Deep Crimson Border Saree",
    desc: "Bespoke bridal trousseau drape with ornate brass embellishments.",
    image: "/images/shakti-ghungroo-saree-detail.webp",
  },
];

const SKETCH_SAMPLES = [
  {
    title: "Pencil Portrait Study",
    desc: "Hand-drawn graphite realism capturing emotional likeness from phone photos.",
    image: "/images/sketch-sample-pencil.jpg",
  },
  {
    title: "Fine Art Portrait Artwork",
    desc: "Careful tonal shading on acid-free archival drawing paper.",
    image: "/images/sketch-sample-portrait.jpg",
  },
];

const ORDER_STEPS = [
  {
    step: "01",
    title: "Share Your Vision",
    desc: "Send your reference photo, desired saree color, or murti requirement directly on WhatsApp.",
  },
  {
    step: "02",
    title: "Discuss Detailing",
    desc: "Finalize fabrics, border style, paper size (A4/A3), or festive delivery timelines with Shivangi.",
  },
  {
    step: "03",
    title: "Handcrafted Creation",
    desc: "Every piece is thoughtfully sculpted, sketched, or stitched with artistic patience and personal care.",
  },
  {
    step: "04",
    title: "Pickup or Delivery",
    desc: "Collect your bespoke order at our studio in Gola Gokaran Nath or arrange safe dispatch.",
  },
];

const CREATIVE_FAQS = [
  {
    q: "How can I order a Customized Ghungroo Saree?",
    a: "Simply click 'WhatsApp for Custom Order' and tell us your favorite color, fabric preference (organza, tissue, georgette, or silk), and the occasion date. Shivangi will share design options and timeline details.",
  },
  {
    q: "Can I order a portrait sketch from a mobile photograph?",
    a: "Yes! High-resolution, clear phone photos work wonderfully. You can send individual portraits, couple photos, or old family memories to be transformed into graphite pencil artwork.",
  },
  {
    q: "What makes your Mitti Ki Murti eco-friendly?",
    a: "Our idols are sculpted from pure natural river clay without Plaster of Paris (PoP), toxic chemical glues, or harmful artificial dyes. They dissolve naturally and auspiciously in water during Visarjan.",
  },
  {
    q: "How many days does custom artwork take?",
    a: "Custom sketches typically take 3 to 7 business days. Handcrafted sarees require 7 to 14 days depending on border detailing. Festive clay murtis are best reserved 1 to 2 weeks before Diwali / pooja dates.",
  },
  {
    q: "Can I view samples at the studio?",
    a: "Yes, you are welcome to visit our studio at Unchi Bhood, Gola Gokaran Nath to discuss custom orders and view artisan samples in person.",
  },
];

export default function CreativeStudioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    name: "Shivangi Shakti Studio - Creative Studio",
    image: `${SITE_CONFIG.siteUrl}/images/shakti-ghungroo-saree-hero.webp`,
    url: `${SITE_CONFIG.siteUrl}/creative-studio`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.street,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.pincode,
      addressCountry: "IN",
    },
  };

  return (
    <div className="bg-cream-50 text-charcoal-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Banner */}
      <PageBanner
        badge="Artisan Creations"
        title="Creative Studio"
        description="More Than Beauty — Handcrafted Ghungroo Sarees, Custom Pencil Portrait Sketches, and Eco-Friendly Mitti Ki Murti sculpted with patience in Gola Gokaran Nath."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Creative Studio" },
        ]}
      />

      {/* Philosophy Statement */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
            Handmade with Love & Devotion
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950 mb-4">
            Where Beauty Meets Handcrafted Art
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            From bridal celebrations to heirloom keepsakes, Shivangi Shakti Studio celebrates the
            intimate beauty of handmade crafts. In a world of mass production, every saree, idol,
            and sketch here carries the tactile warmth of genuine artisan care.
          </p>
        </div>
      </section>

      {/* Craft 1: Customized Ghungroo Sarees */}
      <section className="py-14 sm:py-20 bg-cream-100/70 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block">
                Signature Wear • Ghungroo Drapes
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950">
                Customized Ghungroo Border Sarees
              </h3>
              <div className="w-20 h-0.5 bg-gold-500/80" />
              <p className="text-xs sm:text-sm md:text-base text-charcoal-700 leading-relaxed font-sans">
                Our signature creation: delicate brass ghungroos individually stitched along the
                pallu and borders of organza, tissue, and georgette drapes. With every step, a
                gentle musical chime accompanies your movement, creating an unforgettable presence
                at sangeet nights, festivals, and weddings.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Custom fabric selection: Tissue, Organza, Georgette, Silk</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Personalized shade matching for wedding and sangeet themes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Matching designer blouse borders and handcrafted latkans</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppUrl("Hi Shivangi, I am interested in ordering a Customized Ghungroo Saree. Please share fabric and design options.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp for Custom Saree Enquiry</span>
                </a>
              </div>
            </div>

            {/* Saree Hero Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-card border-2 border-gold-300/80 bg-cream-200">
                <Image
                  src="/images/shakti-ghungroo-saree-hero.webp"
                  alt="Shivangi Shakti Studio handcrafted ghungroo border saree"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-300">
                    Handmade Craft
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-bold">
                    Signature Hand-Stitched Brass Ghungroo Detailing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Saree Sample Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            {SAREE_SAMPLES.map((s) => (
              <div
                key={s.title}
                className="bg-cream-50 rounded-2xl p-4 border border-cream-200/90 shadow-soft"
              >
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-3 bg-cream-200">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-sm font-serif font-bold text-maroon-950 mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-charcoal-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft 2: Custom Pencil Portrait Sketches */}
      <section className="py-14 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Sketch Gallery Visuals */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {SKETCH_SAMPLES.map((sk) => (
                  <div
                    key={sk.title}
                    className="bg-cream-100 rounded-2xl p-3 border border-cream-200/90 shadow-soft"
                  >
                    <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-cream-200 mb-2">
                      <Image
                        src={sk.image}
                        alt={sk.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-xs font-serif font-bold text-maroon-950">
                      {sk.title}
                    </h4>
                    <p className="text-[11px] text-charcoal-600 line-clamp-2 mt-0.5">
                      {sk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block">
                Graphite & Charcoal • Fine Art
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950">
                Custom Pencil Portrait Sketches
              </h3>
              <div className="w-20 h-0.5 bg-gold-500/80" />
              <p className="text-xs sm:text-sm md:text-base text-charcoal-700 leading-relaxed font-sans">
                Turn your favorite smartphone photograph into a permanent, frameable work of art.
                Hand-drawn with professional graphite and charcoal pencils on archival acid-free
                paper, each sketch captures emotional nuance, eye depth, and likeness.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Single portraits, couple portraits, and family tributes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Drawn on premium heavyweight drawing paper (A4 / A3)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Protective smudge-proof packaging ready for gift framing</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppUrl("Hi Shivangi, I would like to order a Custom Pencil Portrait Sketch from a photo. Please share details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Your Photo for Sketch Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft 3 & 4: Mitti Ki Murti & Handmade Clay Art */}
      <section className="py-14 sm:py-20 bg-cream-100/70 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block">
                Natural River Clay • Eco-Friendly Idols
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950">
                Mitti Ki Murti & Artisan Clay Art
              </h3>
              <div className="w-20 h-0.5 bg-gold-500/80" />
              <p className="text-xs sm:text-sm md:text-base text-charcoal-700 leading-relaxed font-sans">
                Sculpted from 100% natural, unbaked river clay without toxic Plaster of Paris or
                chemical dyes. Perfect for auspicious Diwali Lakshmi Ganesh poojas, Ganesh Utsav,
                and sacred household mandirs. They dissolve gracefully and pure-heartedly in water,
                returning to mother earth without harming our environment.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>100% Eco-Friendly chemical-free river clay</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Auspicious Lakshmi-Ganesh Diwali pooja idols</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-charcoal-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Handcrafted terracotta decorative diyas & keepsakes</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppUrl("Hi Shivangi, I would like to enquire about your Mitti Ki Murti / Clay Art creations for upcoming poojas.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp for Clay Murti Enquiry</span>
                </a>
              </div>
            </div>

            {/* Clay Art Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-card border-2 border-gold-300/80 bg-cream-200">
                <Image
                  src="https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=1000&q=80"
                  alt="Handmade eco friendly Mitti Ki Murti clay art sculpting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-300">
                    Pure & Auspicious
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-bold">
                    Natural River Clay Idols for Festivals & Home Altars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Custom Ordering Works */}
      <section className="py-14 sm:py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              The Artisan Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-2">
              How to Order a Custom Creation
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Simple, personalized, and direct — you chat directly with Shivangi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORDER_STEPS.map((st) => (
              <div
                key={st.step}
                className="bg-cream-100 rounded-2xl p-6 border border-cream-200/90 shadow-soft relative"
              >
                <span className="text-2xl font-serif font-bold text-gold-600 block mb-2">
                  {st.step}
                </span>
                <h4 className="text-base font-serif font-bold text-maroon-950 mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              Questions Answered
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
              Creative Studio FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {CREATIVE_FAQS.map((faq, index) => (
              <details
                key={faq.q}
                className="group bg-cream-50 rounded-2xl border border-cream-200/80 p-5 open:bg-cream-100 transition-colors"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-serif font-bold text-base sm:text-lg text-maroon-950 select-none">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-gold-700 text-lg transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="mt-3 pt-3 border-t border-cream-200 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans pl-7">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-50 relative overflow-hidden border-t border-gold-400/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <LotusMotif className="w-8 h-8 text-gold-400 mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-cream-50 mb-3">
            Commission a Handcrafted Masterpiece
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cream-200/90 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Whether you envision a custom ghungroo border saree, an anniversary portrait sketch, or
            an auspicious eco-friendly clay idol, connect with Shivangi to start creating.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to discuss a custom creative order (Saree / Sketch / Clay Murti) with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>WhatsApp for Custom Order</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-maroon-800/80 hover:bg-maroon-800 border border-gold-400/40 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold-300" />
              <span>Visit Our Studio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
