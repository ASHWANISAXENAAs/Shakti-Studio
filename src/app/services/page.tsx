import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import { MessageCircle, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: "Bespoke Services | Sarees, Clay Art, Sketches, Mehndi & Makeup | Shakti Studio",
  description:
    "Explore our complete range of handcrafted services — custom ghungroo sarees, mitti ki murti clay art, personalized sketch portraits, bridal mehndi, and occasion makeup in Gola Gokaran Nath, UP.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        badge="Artisan Catalog"
        title="Our Handcrafted Services & Styling"
        description="Every creation at Shakti Studio is tailor-made to your vision. Choose from custom sarees, personalized sketches, clay artwork, bridal henna, and celebratory styling."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Services Grid with Category Tabs */}
      <Services showCategoryFilter={true} />

      {/* Custom Order Process & Guarantees Highlight */}
      <section className="py-12 bg-cream-100/60 border-y border-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-maroon-950 text-base mb-1">
                  Custom-Tailored Design
                </h3>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  Every saree, sketch, or sculpture is crafted specifically to your color choices, references, and preferences.
                </p>
              </div>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-maroon-950 text-base mb-1">
                  Direct Artist Discussion
                </h3>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  No middlemen. You communicate directly with Shivangi Saxena via WhatsApp to finalize each detail.
                </p>
              </div>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200/80 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-maroon-100 text-maroon-800 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-maroon-950 text-base mb-1">
                  Occasion-Ready Guarantee
                </h3>
                <p className="text-xs text-charcoal-700 leading-relaxed">
                  Orders and styling appointments are scheduled carefully in advance to ensure on-time delivery for your special date.
                </p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Consultation CTA Banner */}
          <div className="mt-12 bg-maroon-950 text-cream-50 rounded-2xl p-6 sm:p-8 border border-gold-400/40 text-center">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream-50 mb-2">
              Looking for a custom combination or special package?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/90 max-w-xl mx-auto mb-6">
              Combine bridal mehndi with occasion styling, or order a custom saree with a celebratory sketch portrait.
            </p>
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to consult with you about a custom service package!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gold-400 hover:bg-gold-500 text-maroon-950 transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-maroon-950" />
              <span>Discuss Custom Package on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <Faq />
    </div>
  );
}
