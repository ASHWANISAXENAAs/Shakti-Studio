import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Heart,
  Droplets,
  Scissors,
  Smile,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { PageBanner } from "@/components/ui/PageBanner";
import { LotusMotif, GoldDivider, PaisleyMotif } from "@/components/ui/IndianMotif";

export const metadata: Metadata = {
  title: "Beauty Parlour Services in Gola Gokaran Nath | Shivangi Shakti Studio",
  description:
    "Expert beauty parlour services in Gola Gokaran Nath, UP. Relaxing facials, herbal clean-ups, D-Tan, hair spa, manicure, pedicure, waxing & threading at Shivangi Shakti Studio.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/beauty-services`,
  },
  openGraph: {
    title: "Beauty Parlour Services in Gola Gokaran Nath | Shivangi Shakti Studio",
    description:
      "Expert beauty parlour services in Gola Gokaran Nath, UP: Facials, D-Tan, hair spa, manicure, pedicure, waxing & threading. WhatsApp for price & availability.",
    url: `${SITE_CONFIG.siteUrl}/beauty-services`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

interface BeautyTreatment {
  title: string;
  badge: string;
  description: string;
  duration: string;
  highlights: string[];
  inclusions: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

const BEAUTY_SECTIONS: {
  id: string;
  name: string;
  tagline: string;
  treatments: BeautyTreatment[];
}[] = [
  {
    id: "facials-skincare",
    name: "Facials & Skin Rejuvenation",
    tagline: "Customized skin therapy for an instant, radiant and healthy glow",
    treatments: [
      {
        title: "Gold & Diamond Radiance Facial",
        badge: "Celebration Glow",
        description:
          "Targeted deep skin therapy using micro-nutrient gold and diamond serums designed to polish the skin surface, restore suppleness, and impart an opulent bridal glow.",
        duration: "60 – 75 mins",
        highlights: [
          "Custom skin diagnosis before therapy",
          "Deep pore cleansing and cellular steam",
          "Gentle blackhead & whitehead extraction",
          "Rich nourishing face, neck & shoulder massage",
          "Radiance peel-off / hydrogel finish mask",
        ],
        inclusions: [
          "Gold / Diamond Polish Cream",
          "Steam & Pore Extraction",
          "Aromatherapy Face Massage",
          "Targeted Glow Pack",
        ],
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Client receiving facial treatment at beauty parlour",
        whatsappMessage:
          "Hi Shivangi, I would like to enquire about Gold & Diamond Radiance Facial availability and details at Shakti Studio.",
      },
      {
        title: "Herbal, Fruit & Hydrating Clean-Up",
        badge: "Monthly Essential",
        description:
          "A gentle, refreshing skincare routine tailored for regular skin maintenance. Removes environmental pollution, dead cell buildup, and restores balanced moisture without irritation.",
        duration: "45 – 55 mins",
        highlights: [
          "Pure fruit extracts and calming botanical gels",
          "Gentle enzymatic exfoliation",
          "Steam therapy and soothing cooling toner",
          "Hydrating moisture barrier application",
        ],
        inclusions: [
          "Deep Fruit / Herbal Cleanse",
          "Gentle Scrub Exfoliation",
          "Steam Therapy",
          "Cooling Hydration Pack",
        ],
        image:
          "https://images.unsplash.com/photo-1512290900672-1f41b4333b28?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Organic herbal skincare treatment in salon",
        whatsappMessage:
          "Hi Shivangi, I want to book a Herbal / Fruit Clean-Up session at Shakti Studio.",
      },
      {
        title: "Instant D-Tan & Sun Damage Repair",
        badge: "Tan Removal",
        description:
          "An intensive tan-reversal treatment formulated to lift stubborn sun tanning from the face, neck, and arms. Restores natural skin complexion with antioxidant-rich botanical extracts.",
        duration: "40 – 50 mins",
        highlights: [
          "Lactic and botanical brightening extracts",
          "Visible reduction in sun exposure hyperpigmentation",
          "Deep pore detoxification and cooling compress",
          "Post-treatment soothing sun-defense application",
        ],
        inclusions: [
          "Active D-Tan Pack Application",
          "Face & Neck Exfoliation",
          "Pore Tightening Toner",
          "SPF Barrier Protection",
        ],
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        imageAlt: "D-tan skin rejuvenation therapy",
        whatsappMessage:
          "Hi Shivangi, I would like to book an Instant D-Tan treatment at Shakti Studio.",
      },
    ],
  },
  {
    id: "hair-care-spa",
    name: "Hair Spa & Hair Care Therapy",
    tagline: "Deep root nourishment, frizz control, and celebratory styling",
    treatments: [
      {
        title: "Deep Nourishing Hair Spa & Scalp Massage",
        badge: "Intense Moisture",
        description:
          "Revitalize dull, dry, and stressed hair with our intensive hair spa. Conditioning cream bath penetrates deep into hair cuticles, combined with a relaxing acupressure head massage.",
        duration: "60 mins",
        highlights: [
          "Scalp analysis and deep clarifying wash",
          "Rich argan & keratin-infused cream massage",
          "Micro-steam moisture penetration therapy",
          "Leaves hair visibly softer, frizz-free, and manageable",
        ],
        inclusions: [
          "Clarifying Hair Wash",
          "Acupressure Scalp Massage",
          "Steam Penetration Therapy",
          "Conditioning Rinse & Serum",
        ],
        image:
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Hair spa treatment and hair care massage in parlour",
        whatsappMessage:
          "Hi Shivangi, I want to book a Deep Nourishing Hair Spa session at Shakti Studio.",
      },
      {
        title: "Hair Trim, Split-End Care & Conditioning",
        badge: "Healthy Ends",
        description:
          "Maintain healthy hair length and bounce with precise split-end trimming, gentle hair layer shaping, and deep moisturizing hair wash.",
        duration: "30 – 45 mins",
        highlights: [
          "Gentle hair cleanse and conditioner",
          "Split-end removal while preserving natural length",
          "Natural bounce and healthy volume restoration",
          "Heat-protective serum finish",
        ],
        inclusions: [
          "Hair Wash & Condition",
          "Length & Split-End Trim",
          "Blowout Drying & Setting",
        ],
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Hair trimming and hair styling",
        whatsappMessage:
          "Hi Shivangi, I would like to book a Hair Trim & Conditioning appointment at Shakti Studio.",
      },
    ],
  },
  {
    id: "manicure-pedicure",
    name: "Manicure, Pedicure & Nail Care",
    tagline: "Rejuvenating hand & feet care, heel buffing, and glossy nail finish",
    treatments: [
      {
        title: "Deluxe Foot Spa & Pedicure",
        badge: "Soft Heels",
        description:
          "Relieve tired feet with a warm herbal salt soak, gentle heel buffing to remove cracked dead skin, exfoliating foot scrub, and deeply moisturizing acupressure foot massage.",
        duration: "50 – 60 mins",
        highlights: [
          "Aromatherapy warm foot soak with sea salts",
          "Pumice buffing & cracked heel smoothing",
          "Cuticle pushback, nail filing and shaping",
          "Relaxing leg & foot cream massage",
          "Long-wear nail lacquer application",
        ],
        inclusions: [
          "Warm Herbal Soak",
          "Heel Exfoliation & Scrub",
          "Cuticle Treatment & Filing",
          "Nail Polish Finish",
        ],
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Deluxe pedicure and foot spa treatment",
        whatsappMessage:
          "Hi Shivangi, I want to book a Deluxe Pedicure / Foot Spa session at Shakti Studio.",
      },
      {
        title: "Classic Hand Spa & Manicure",
        badge: "Pre-Mehndi Essential",
        description:
          "The perfect pampering routine for hands before weddings or festive henna. Gently softens rough palms, conditions cuticles, and leaves hands silky-smooth and clean.",
        duration: "40 – 45 mins",
        highlights: [
          "Warm nourishing hand soak",
          "Sugar & honey scrub for hand exfoliation",
          "Neat cuticle care and gentle nail buffing",
          "Moisturizing hand and forearm massage",
        ],
        inclusions: [
          "Hand Cleansing Soak",
          "Exfoliating Hand Scrub",
          "Cuticle Grooming",
          "Hand Massage & Polish",
        ],
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Manicure nail care and hand massage",
        whatsappMessage:
          "Hi Shivangi, I would like to book a Manicure appointment at Shakti Studio.",
      },
    ],
  },
  {
    id: "waxing-threading",
    name: "Threading, Waxing & Hygiene Grooming",
    tagline: "Precise eyebrow shaping, smooth skin waxing, and soothing aftercare",
    treatments: [
      {
        title: "Eyebrow Shaping & Facial Threading",
        badge: "Facial Definition",
        description:
          "Meticulous, pain-minimized eyebrow shaping and facial hair removal using sanitized cotton thread. Accentuates your facial structure with crisp, clean arches.",
        duration: "15 – 25 mins",
        highlights: [
          "Custom eyebrow arch contouring",
          "Upper lip, chin, and forehead options",
          "Sanitized, hygienic single-use thread",
          "Cooling aloe vera gel and soothing compress",
        ],
        inclusions: [
          "Eyebrow Threading & Shaping",
          "Upper Lip & Chin (Optional)",
          "Forehead & Sideburns (Optional)",
          "Soothing Aloe Application",
        ],
        image:
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Precise eyebrow threading and facial grooming",
        whatsappMessage:
          "Hi Shivangi, I want to book Threading / Facial Grooming at Shakti Studio.",
      },
      {
        title: "Full Body Smooth Waxing (Honey & Rica)",
        badge: "Silky Smooth",
        description:
          "Gentle hair removal using premium skin-friendly wax formulations. Removes hair directly from the root for weeks of clean, touchably soft skin without roughness.",
        duration: "30 – 60 mins",
        highlights: [
          "Choice of gentle honey or premium white chocolate / Rica wax",
          "Full arms, full legs, and underarms packages",
          "Pre-wax skin cleansing and talc prep",
          "Post-wax soothing lotion to calm sensitivity",
        ],
        inclusions: [
          "Full Arms & Legs Waxing",
          "Underarm Waxing",
          "Skin Prep & Post-Wax Soothing",
        ],
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Smooth skin waxing treatment at parlour",
        whatsappMessage:
          "Hi Shivangi, I would like to enquire about Waxing services and book a slot at Shakti Studio.",
      },
    ],
  },
];

const FAQS = [
  {
    q: "What beauty services are available at Shakti Studio?",
    a: "We provide complete parlour services including Gold and Diamond facials, herbal clean-ups, D-Tan therapy, nourishing hair spa, split-end trimming, deluxe pedicure and manicure, eyebrow threading, and full-body waxing.",
  },
  {
    q: "How can I enquire about service pricing?",
    a: "We do not publish fixed price lists online because treatments are personalized according to skin type, hair length, and customized combinations. Simply click any 'WhatsApp for Price & Availability' button to receive complete package details directly on WhatsApp.",
  },
  {
    q: "Can I visit the studio before booking?",
    a: "Yes! You are welcome to visit our studio at Unchi Bhood, Gola Gokaran Nath, Uttar Pradesh. To ensure dedicated attention and avoid waiting, we recommend dropping a quick WhatsApp message before your visit.",
  },
  {
    q: "How can I check appointment availability?",
    a: "Message us directly on WhatsApp with your preferred day and time. We will immediately confirm available slots or offer the nearest convenient time.",
  },
  {
    q: "Are the products safe for sensitive skin?",
    a: "Yes. Every facial and skincare treatment begins with a careful skin assessment. We use skin-friendly, gentle formulations and soothing herbal ingredients to prevent redness and irritation.",
  },
];

export default function BeautyServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Shivangi Shakti Studio - Beauty Parlour Services",
    image: `${SITE_CONFIG.siteUrl}/images/shakti-ghungroo-saree-hero.webp`,
    url: `${SITE_CONFIG.siteUrl}/beauty-services`,
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
    areaServed: [
      {
        "@type": "City",
        name: "Gola Gokaran Nath",
      },
      {
        "@type": "AdministrativeArea",
        name: "Lakhimpur Kheri",
      },
    ],
  };

  return (
    <div className="bg-cream-50 text-charcoal-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Hero Banner */}
      <PageBanner
        badge="Boutique Parlour Care"
        title="Beauty Parlour Services"
        description="Thoughtful skin rejuvenation, hair spa therapy, pedicure, manicure, and grooming crafted with gentle care in Gola Gokaran Nath, Uttar Pradesh."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Beauty Services" },
        ]}
      />

      {/* Quick Category Navigation Pill Bar */}
      <section className="bg-cream-100/80 border-b border-cream-200 py-4 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-1">
            {BEAUTY_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-maroon-900 bg-cream-50 hover:bg-maroon-800 hover:text-cream-50 border border-gold-300/60 shadow-xs transition-all"
              >
                {sec.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Local SEO & Studio Care Statement */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
            Gentle Care • Hygiene First • Personalized Attention
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-950 mb-4">
            A Welcoming Beauty Sanctuary in Gola Gokaran Nath
          </h2>
          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            At Shivangi Shakti Studio, every treatment is an unhurried, comfortable experience.
            Whether you are preparing for an auspicious family wedding or taking time for monthly
            self-care, we prioritize your skin comfort, hygiene, and genuine natural glow.
          </p>

          {/* Key Trust Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-cream-200">
            <div className="flex flex-col items-center text-center p-3">
              <ShieldCheck className="w-6 h-6 text-gold-600 mb-2" />
              <span className="text-xs font-bold text-maroon-950">Sanitized Tools</span>
              <span className="text-[11px] text-charcoal-600">Strict hygiene protocols</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Sparkles className="w-6 h-6 text-gold-600 mb-2" />
              <span className="text-xs font-bold text-maroon-950">Skin Diagnosis</span>
              <span className="text-[11px] text-charcoal-600">Tailored to your skin type</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Droplets className="w-6 h-6 text-gold-600 mb-2" />
              <span className="text-xs font-bold text-maroon-950">Quality Products</span>
              <span className="text-[11px] text-charcoal-600">Skin-friendly ingredients</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Clock className="w-6 h-6 text-gold-600 mb-2" />
              <span className="text-xs font-bold text-maroon-950">Dedicated Slots</span>
              <span className="text-[11px] text-charcoal-600">Unhurried personal care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Sections */}
      <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {BEAUTY_SECTIONS.map((section, idx) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 pt-4"
          >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8 pb-4 border-b border-gold-300/50">
              <div>
                <span className="text-xs font-serif italic text-gold-700 tracking-wider">
                  Category 0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-1">
                  {section.name}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  {section.tagline}
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href={getWhatsAppUrl(`Hi Shivangi, I would like to enquire about ${section.name} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon-800 hover:text-maroon-950 bg-cream-100 hover:bg-cream-200 px-3.5 py-1.5 rounded-full border border-cream-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Treatment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {section.treatments.map((treatment) => (
                <article
                  key={treatment.title}
                  className="group bg-cream-100/70 hover:bg-cream-50 rounded-2xl border border-cream-200/90 hover:border-gold-300/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Visual Header */}
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-cream-200">
                      <Image
                        src={treatment.image}
                        alt={treatment.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-cream-50/95 text-maroon-950 border border-gold-300/70 shadow-xs">
                          {treatment.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-cream-100 text-xs font-medium">
                        <span className="inline-flex items-center gap-1 bg-maroon-950/80 px-2 py-0.5 rounded-md text-[11px]">
                          <Clock className="w-3 h-3 text-gold-300" />
                          <span>{treatment.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-serif font-bold text-maroon-950 group-hover:text-maroon-800 transition-colors mb-2 leading-snug">
                        {treatment.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                        {treatment.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-cream-200/80">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold-800 block mb-1">
                          Key Benefits
                        </span>
                        {treatment.highlights.slice(0, 3).map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 text-xs text-charcoal-800"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Inclusions Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {treatment.inclusions.map((inc) => (
                          <span
                            key={inc}
                            className="text-[10px] bg-cream-200/70 text-charcoal-700 px-2 py-0.5 rounded-md"
                          >
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions: WhatsApp & Visit Studio */}
                  <div className="p-6 pt-0 mt-auto">
                    <div className="space-y-2">
                      <a
                        href={getWhatsAppUrl(treatment.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-xs hover:shadow-soft transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp for Price & Availability</span>
                      </a>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-maroon-900 bg-cream-200/80 hover:bg-cream-300/80 border border-cream-300 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-maroon-700" />
                        <span>Visit Our Studio</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Studio Location & Local SEO Callout */}
      <section className="bg-cream-100 border-y border-gold-300/40 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-200 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-maroon-100 text-maroon-800 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block mb-1">
                  Local Beauty Parlour in Gola Gokaran Nath
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-maroon-950">
                  {SITE_CONFIG.location.formattedAddress}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 mt-1 max-w-xl">
                  Conveniently situated in Unchi Bhood, Gola Gokaran Nath. We welcome clients from
                  across the local town and surrounding areas. For private, unhurried appointments,
                  please send us a message before visiting.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-300" />
                <span>Open in Maps</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <span>Studio Details</span>
                <ChevronRight className="w-4 h-4 text-maroon-700" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful FAQ Accordion */}
      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              Common Enquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-2 max-w-lg mx-auto">
              Clear information regarding our beauty services, consultations, and studio booking.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
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
            Ready to Refresh Your Glow?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-cream-200/90 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Message us on WhatsApp with the service you wish to book. We will promptly share
            availability, pricing, and personalized advice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to book a Beauty Parlour session at Shakti Studio. Please share availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>WhatsApp for Price & Availability</span>
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
