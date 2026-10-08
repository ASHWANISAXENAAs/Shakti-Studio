import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  Navigation,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { PageBanner } from "@/components/ui/PageBanner";
import { LotusMotif, GoldDivider } from "@/components/ui/IndianMotif";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Studio Location in Gola Gokaran Nath | Shivangi Shakti Studio",
  description:
    "Visit Shivangi Shakti Studio at Unchi Bhood, Gola Gokaran Nath, Uttar Pradesh or connect on WhatsApp for beauty parlour bookings, bridal makeup, mehndi, sarees & art orders.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact & Studio Location | Shivangi Shakti Studio",
    description:
      "Studio location in Gola Gokaran Nath, UP. WhatsApp enquiry assistant and direct maps location. Connect with Shivangi Saxena.",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

const CONTACT_FAQS = [
  {
    q: "How can I contact Shivangi Shakti Studio?",
    a: "We communicate directly via WhatsApp for all enquiries, appointments, custom saree discussions, and portrait orders. This allows us to exchange reference photos, timings, and custom requirements efficiently.",
  },
  {
    q: "Can I visit the studio directly without an appointment?",
    a: "While walk-ins are welcomed, we strongly recommend sending a quick WhatsApp message beforehand so we can ensure dedicated personal time and prevent waiting.",
  },
  {
    q: "Where is the studio located?",
    a: `Our studio is located at ${SITE_CONFIG.location.formattedAddress}. You can open our location directly in Google Maps using the button on this page.`,
  },
  {
    q: "How can I join the WhatsApp Community for updates?",
    a: "Click the 'Join WhatsApp Community' button on this page to stay updated on new saree creations, festive bookings, and seasonal beauty announcements.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Shivangi Shakti Studio",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    image: `${SITE_CONFIG.siteUrl}/images/shakti-ghungroo-saree-hero.webp`,
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
    hasMap: SITE_CONFIG.mapsUrl,
  };

  return (
    <div className="bg-cream-50 text-charcoal-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Banner */}
      <PageBanner
        badge="Direct Connections"
        title="Visit Shakti Studio & Contact Us"
        description="Connect directly with Shivangi Saxena on WhatsApp or visit our studio in Gola Gokaran Nath, Uttar Pradesh for beauty, bridal and handcrafted creations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Studio Location & Quick Cards */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Direct WhatsApp Card */}
            <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-5 shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200/70 inline-block mb-3">
                  Direct Messaging
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mb-2">
                  Chat Directly on WhatsApp
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                  Message Shivangi Saxena directly for beauty parlour appointments, bridal dates,
                  custom ghungroo saree discussions, and pencil sketch commissions.
                </p>

                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-maroon-900 block">
                      Direct WhatsApp Access
                    </span>
                    <span className="text-[11px] text-charcoal-700 font-medium">
                      Click below to chat immediately without needing to save any contact digits.
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Hi Shivangi, I am visiting your contact page and would like to get in touch.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-soft"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* WhatsApp Community Card */}
            <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500 text-maroon-950 flex items-center justify-center mb-5 shadow-xs">
                  <Users className="w-6 h-6" />
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-maroon-800 bg-maroon-50 px-2.5 py-1 rounded-full border border-maroon-200/70 inline-block mb-3">
                  Community Group
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mb-2">
                  Join Our WhatsApp Community
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                  Get first looks at seasonal festival sarees, newly sculpted Mitti Ki Murti
                  creations, and festival mehndi booking announcements.
                </p>

                <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-charcoal-800">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Showcase previews & handmade design drops</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-800">
                    <Clock className="w-3.5 h-3.5 text-maroon-700 shrink-0" />
                    <span>Occasion & seasonal booking announcements</span>
                  </div>
                </div>
              </div>

              <a
                href={SITE_CONFIG.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-maroon-950 bg-gold-400 hover:bg-gold-500 transition-colors shadow-soft"
              >
                <Users className="w-4 h-4 text-maroon-900" />
                <span>Join Our WhatsApp Community</span>
              </a>
            </div>
          </div>

          {/* Physical Address & Directions Card */}
          <div className="bg-cream-100 rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-soft">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-maroon-100 text-maroon-800 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block mb-1">
                    Studio Location • Gola Gokaran Nath
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950">
                    {SITE_CONFIG.location.formattedAddress}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-2 max-w-xl font-sans">
                    Situated in Unchi Bhood, Gola Gokaran Nath, Kheri district, Uttar Pradesh.
                    Visits are by prior WhatsApp confirmation to ensure unhurried, dedicated service.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-gold-300" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WhatsApp Message Generator Tool */}
      <section className="py-12 sm:py-16 bg-cream-100/60 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactClient />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-cream-50 border-t border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-700 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-2">
              Help & Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, index) => (
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

      {/* Studio Footer Accent */}
      <section className="py-12 bg-cream-100 border-t border-gold-300/40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <LotusMotif className="w-6 h-6 text-gold-600 mx-auto mb-2" />
          <h4 className="text-base font-serif font-bold text-maroon-950">
            Shivangi Shakti Studio
          </h4>
          <p className="text-xs text-charcoal-600 mt-1">
            Beauty • Bridal • Mehndi • Creative Studio • Gola Gokaran Nath, Uttar Pradesh
          </p>
        </div>
      </section>
    </div>
  );
}
