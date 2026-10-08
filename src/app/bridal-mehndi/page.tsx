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
  Crown,
  CheckCircle2,
  Calendar,
  Gem,
  Palette,
  Eye,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { PageBanner } from "@/components/ui/PageBanner";
import { LotusMotif, GoldDivider, PaisleyMotif } from "@/components/ui/IndianMotif";

export const metadata: Metadata = {
  title: "Bridal Makeup & Mehndi in Gola Gokaran Nath | Shakti Studio",
  description:
    "Exquisite HD bridal makeup, party glamour, traditional full-hand bridal mehndi, dupatta draping & jewellery setting in Gola Gokaran Nath, UP. Reserve your wedding date.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/bridal-mehndi`,
  },
  openGraph: {
    title: "Bridal Makeup & Mehndi in Gola Gokaran Nath | Shakti Studio",
    description:
      "Royal HD bridal makeup, engagement styling, festive henna, and bridal mehndi in Gola Gokaran Nath, Uttar Pradesh. WhatsApp for packages & availability.",
    url: `${SITE_CONFIG.siteUrl}/bridal-mehndi`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

const BRIDAL_MAKEUP_SERVICES = [
  {
    title: "Signature HD Bridal Makeup",
    badge: "The Wedding Day",
    tagline: "Regal, camera-ready bridal elegance tailored to your wedding attire",
    description:
      "A complete bridal look built upon long-lasting, water-resistant high-definition coverage. Designed to withstand wedding lights, tears of joy, and hours of celebration while looking effortlessly radiant in person and photography.",
    features: [
      "Skin prep, deep hydration & pore-smoothing primer base",
      "High-Definition (HD) waterproof foundation & seamless contouring",
      "Custom eye artistry harmonized with your lehenga / saree hue",
      "Full bridal dupatta draping with secure, comfortable pin work",
      "Complete jewellery setting (matha patti, maang tikka, nath, necklace)",
      "Bridal floral hair updo / traditional bridal bun styling",
    ],
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Indian bride in royal bridal makeup, gold jewellery and red bridal lehenga",
    whatsappMessage:
      "Hi Shivangi, I am looking for Bridal HD Makeup & Styling for my wedding day. Please share package details and check date availability.",
  },
  {
    title: "Engagement & Roka Glamour",
    badge: "Pre-Wedding Glow",
    tagline: "Romantic soft glam and luminous dewy glow for intimate celebrations",
    description:
      "A soft, modern aesthetic that accentuates natural beauty without heavy layers. Ideal for ring ceremonies, roka celebrations, and sangeet parties under ambient evening lights.",
    features: [
      "Dewy, radiant skin finish with soft focal highlighting",
      "Shimmer or smokey eye artistry paired with lightweight lashes",
      "Soft Hollywood curls, textured braids, or contemporary half-updo",
      "Saree / gown / lehenga pallu and dupatta styling",
    ],
    image:
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Sophisticated engagement and cocktail makeup styling",
    whatsappMessage:
      "Hi Shivangi, I want to book an Engagement / Roka Makeup look at Shakti Studio.",
  },
  {
    title: "Party & Festive Occasion Makeup",
    badge: "Celebration Special",
    tagline: "Chic, polished styling for bridesmaids, sisters, and family celebrations",
    description:
      "Tailored for wedding guests, reception evenings, anniversaries, and festive celebrations. Lightweight, comfortable, and flawlessly color-matched to your outfit.",
    features: [
      "Flawless lightweight base and flattering cheek tint",
      "Customized eye shadow and crisp eyeliner work",
      "Party hair styling: curls, blowouts, or elegant braids",
      "Quick, comfortable session with long-lasting wear",
    ],
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Party and festival occasion makeup styling",
    whatsappMessage:
      "Hi Shivangi, I would like to book Party / Occasion Makeup for a family event.",
  },
];

const MEHNDI_SERVICES = [
  {
    title: "Traditional Full-Hand Bridal Mehndi",
    badge: "Sacred Henna Art",
    tagline: "Intricate Indian bridal storytelling with deep natural dark stain",
    description:
      "Elaborate henna artistry flowing up to the forearms, elbows, and feet. Featuring classic Indian motifs including doli, shehnai, peacock feathers, temple lotuses, and personalized couple initials.",
    features: [
      "100% natural, triple-filtered herbal henna cones (chemical-free)",
      "Traditional Indian, Marwari, and figurative bridal motifs",
      "Customized couple initials, wedding date & symbol integration",
      "Detailed feet mehndi designs matching the hand patterns",
      "Proven natural stain aftercare guidance for deep mahogany hue",
    ],
    image: "/images/mehndi-bridal-1.jpg",
    imageAlt: "Detailed traditional Indian bridal mehndi design on hands",
    whatsappMessage:
      "Hi Shivangi, I would like to reserve Bridal Mehndi for my upcoming wedding. Please share design portfolios and availability.",
  },
  {
    title: "Arabic & Indo-Arabic Henna Trails",
    badge: "Modern Elegance",
    tagline: "Bold floral vines, shaded jaal, and graceful negative space",
    description:
      "Striking, artistic trails that highlight the hands with flowing floral jaal, leaves, and bold shaded petals. Ideal for modern brides seeking lightweight elegance or sangeet celebrations.",
    features: [
      "Distinct bold outlines with delicate interior shading",
      "Symmetrical and asymmetrical wrist-to-finger flowing vines",
      "Quick drying time with intense color payout",
      "Contemporary negative-space design aesthetics",
    ],
    image: "/images/mehndi-arabic-3.jpg",
    imageAlt: "Bold and elegant Arabic mehndi design with floral trails",
    whatsappMessage:
      "Hi Shivangi, I am interested in Arabic / Indo-Arabic Mehndi for an upcoming function.",
  },
  {
    title: "Festive Henna: Karwa Chauth & Teej",
    badge: "Auspicious Festivities",
    tagline: "Celebratory patterns for festivals, family milestones, and poojas",
    description:
      "Celebrate Teej, Karwa Chauth, Raksha Bandhan, and Diwali with festive mehndi designs. Dedicated slots and group packages for mothers, sisters, and family gatherings.",
    features: [
      "Traditional mandala, floral bel, and festive wrist bracelets",
      "Comfortable application with fast drying time",
      "Family & group booking slots available",
      "Gentle, pure natural henna safe for sensitive skin",
    ],
    image: "/images/mehndi-festive-2.jpg",
    imageAlt: "Festive Indian henna patterns for Karwa Chauth and Teej",
    whatsappMessage:
      "Hi Shivangi, I would like to book a slot for Festive Mehndi (Karwa Chauth / Teej / Festival).",
  },
];

const STYLING_ADDONS = [
  {
    title: "Dupatta & Saree Draping",
    desc: "Neat pleat setting, bridal double-dupatta anchoring, seedha pallu, Gujarati style, and modern drapes.",
    icon: Palette,
  },
  {
    title: "Jewellery Alignment & Setting",
    desc: "Precise bindi, matha patti, maang tikka, nath, and heavy necklace adjustment for pain-free wear.",
    icon: Gem,
  },
  {
    title: "Bridal Floral Buns & Braids",
    desc: "Voluminous traditional buns adorned with fresh gajra, roses, or baby's breath, plus designer sangeet braids.",
    icon: Crown,
  },
  {
    title: "Natural Henna Aftercare Kit Advice",
    desc: "Clove steam, lemon-sugar sealant, and mustard oil guidance for the deepest mahogany stain.",
    icon: Heart,
  },
];

const BRIDAL_FAQS = [
  {
    q: "How far in advance should I book my bridal makeup and mehndi?",
    a: "Wedding dates during the peak wedding season fill up quickly. We strongly recommend reserving your date 2 to 6 weeks in advance to secure Shivangi's dedicated time for your special day.",
  },
  {
    q: "Do you offer pre-wedding makeup consultations?",
    a: "Yes. We encourage brides to discuss their outfit colors, jewellery style, and skin preferences on WhatsApp before the wedding so every detail is planned seamlessly.",
  },
  {
    q: "Is the henna 100% natural and skin-safe?",
    a: "Absolutely. We exclusively use pure, chemical-free, hand-filtered henna cones without harsh chemical dyes. It produces a rich, natural reddish-brown to dark mahogany stain with proper aftercare.",
  },
  {
    q: "Are dupatta draping and jewellery setting included in bridal packages?",
    a: "Yes! Our bridal makeup services encompass complete bridal dressing — including secure dupatta draping, saree pleating, and precise jewellery setting.",
  },
  {
    q: "Where is the bridal studio located?",
    a: "Our studio is located at Unchi Bhood, Gola Gokaran Nath, Uttar Pradesh. Clients from Gola and neighboring areas visit us for bridal and occasion preparations.",
  },
];

export default function BridalMehndiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Shivangi Shakti Studio - Bridal Makeup & Mehndi",
    image: `${SITE_CONFIG.siteUrl}/images/mehndi-bridal-1.jpg`,
    url: `${SITE_CONFIG.siteUrl}/bridal-mehndi`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.street,
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.0827",
      longitude: "80.4716",
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
        badge="Bridal & Celebrations"
        title="Bridal Makeup & Mehndi"
        description="Crafting unforgettable bridal moments in Gola Gokaran Nath. High-definition bridal artistry, traditional dark-stain henna, and complete bridal adornment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bridal & Mehndi" },
        ]}
      />

      {/* Visual Editorial Intro */}
      <section className="py-14 sm:py-20 bg-cream-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block">
                Artisanal Bridal Styling • Gola Gokaran Nath
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-maroon-950 leading-tight">
                Every Bride Deserves a Royal, Unhurried Transformation
              </h2>
              <div className="w-24 h-0.5 bg-gold-500/80" />
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                An Indian wedding is a sacred tapestry of emotions, rituals, and unforgettable
                memories. At Shivangi Shakti Studio, we view bridal styling not as mere cosmetic
                application, but as an art form that honors your individuality, attire, and
                traditions.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                From water-resistant HD bridal makeup that stays immaculate from varmala to bidaai,
                to bespoke full-hand henna cones made from pure natural leaves, we dedicate our
                patience and passion to every bride.
              </p>

              {/* Consultation Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-maroon-950 font-medium bg-cream-100 p-3 rounded-xl border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Personalized Outfit & Shade Matching</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-maroon-950 font-medium bg-cream-100 p-3 rounded-xl border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Unhurried Single-Bride Dedication</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-maroon-950 font-medium bg-cream-100 p-3 rounded-xl border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>100% Organic Henna Cones</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-maroon-950 font-medium bg-cream-100 p-3 rounded-xl border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Full Dupatta & Jewellery Setting</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={getWhatsAppUrl("Hi Shivangi, I would like to check availability and packages for Bridal Makeup & Mehndi.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp for Packages & Pricing</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-maroon-700" />
                  <span>Visit Studio</span>
                </Link>
              </div>
            </div>

            {/* Right Layered Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Main Large Visual */}
                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-card border-2 border-gold-300/80 bg-cream-200">
                  <Image
                    src="https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=900&q=80"
                    alt="Bridal makeup and henna artistry"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-cream-50">
                    <span className="text-[10px] uppercase tracking-widest text-gold-300 font-bold block mb-1">
                      Bridal Artistry
                    </span>
                    <h3 className="text-lg font-serif font-bold leading-snug">
                      Grace, Tradition & Unmatched Detail
                    </h3>
                  </div>
                </div>

                {/* Overlapping Mehndi Pill Card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-cream-50/95 backdrop-blur-md border border-gold-300/90 rounded-2xl p-4 shadow-card max-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <Image
                        src="/images/mehndi-bridal-1.jpg"
                        alt="Henna detail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gold-700 uppercase tracking-wide block">
                        Dark Mahogany Henna
                      </span>
                      <span className="text-xs font-serif font-bold text-maroon-950 block">
                        100% Herbal Cones
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Bridal & Occasion Makeup */}
      <section className="py-16 sm:py-20 bg-cream-100/70 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              High Definition & Occasion Glamour
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950">
              Bridal & Occasion Makeup Styling
            </h2>
            <div className="flex justify-center my-3">
              <GoldDivider className="w-32" />
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Every brush stroke is calibrated for high-definition photography, stage illumination,
              and lasting wear.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRIDAL_MAKEUP_SERVICES.map((srv) => (
              <article
                key={srv.title}
                className="bg-cream-50 rounded-3xl border border-cream-200/90 shadow-soft hover:shadow-card hover:border-gold-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-cream-200">
                    <Image
                      src={srv.image}
                      alt={srv.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-50 text-maroon-950 border border-gold-300 shadow-xs">
                        {srv.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-maroon-950 mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-medium text-gold-700 italic mb-3">
                      {srv.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-cream-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-900 block mb-1">
                        Package Inclusions:
                      </span>
                      {srv.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs text-charcoal-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="space-y-2">
                    <a
                      href={getWhatsAppUrl(srv.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp for Packages & Pricing</span>
                    </a>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                      <span>Visit Studio</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Henna & Mehndi Artistry */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              Auspicious Henna Craft
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950">
              Bridal, Arabic & Festive Mehndi
            </h2>
            <div className="flex justify-center my-3">
              <GoldDivider className="w-32" />
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600">
              Handcrafted henna patterns created with 100% chemical-free organic leaf cones for an
              authentic, dark mahogany color.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MEHNDI_SERVICES.map((m) => (
              <article
                key={m.title}
                className="bg-cream-100/70 hover:bg-cream-50 rounded-3xl border border-cream-200/90 shadow-soft hover:shadow-card hover:border-gold-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-cream-200">
                    <Image
                      src={m.image}
                      alt={m.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-50 text-maroon-950 border border-gold-300 shadow-xs">
                        {m.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-maroon-950 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-xs font-medium text-gold-700 italic mb-3">
                      {m.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                      {m.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-cream-200">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-maroon-900 block mb-1">
                        Art Highlights:
                      </span>
                      {m.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs text-charcoal-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="space-y-2">
                    <a
                      href={getWhatsAppUrl(m.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp for Packages & Pricing</span>
                    </a>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                      <span>Visit Studio</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Dressing & Styling Addons */}
      <section className="py-14 sm:py-18 bg-cream-100 border-y border-gold-300/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-maroon-800 bg-maroon-50 px-3 py-1 rounded-full border border-maroon-200">
              Complete Bridal Dressing
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-2">
              Beyond Makeup — Complete Adornment
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
              Every detail is anchored with care so you remain comfortable through rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STYLING_ADDONS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-cream-50 rounded-2xl p-6 border border-cream-200 shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5 text-maroon-800" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-maroon-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal-700 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              Wedding Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
              Bridal & Mehndi FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {BRIDAL_FAQS.map((faq, index) => (
              <details
                key={faq.q}
                className="group bg-cream-100 rounded-2xl border border-cream-200/80 p-5 open:bg-cream-50 transition-colors"
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
            Celebrate Your Wedding with Timeless Grace
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cream-200/90 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Reserve your wedding date in advance. Connect with Shivangi to discuss your bridal look,
            mehndi preferences, and customized packages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to reserve my wedding date for Bridal Makeup & Mehndi at Shakti Studio. Please share availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>WhatsApp for Packages & Pricing</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-maroon-800/80 hover:bg-maroon-800 border border-gold-400/40 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold-300" />
              <span>Visit Studio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
