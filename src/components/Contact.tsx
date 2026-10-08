import React from "react";
import { MessageCircle, Users, Clock, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { LotusMotif } from "./ui/IndianMotif";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream-100/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Connect with Shakti Studio"
          subtitle="Have an idea for a custom saree, clay creation, sketch portrait, or need beauty parlour, mehndi and makeup booking availability? Reach out directly on WhatsApp."
        />

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-8">
          {/* Card 1: Direct WhatsApp Chat - NO RAW PHONE DIGITS */}
          <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-200/90 shadow-soft hover:border-gold-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-5 shadow-xs">
                <MessageCircle className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200/70 inline-block mb-3">
                1-Click Direct Chat
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mb-2">
                Chat on WhatsApp
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                Connect directly with Shivangi Saxena. Discuss design ideas, reference photos,
                customisation, bridal dates, and prices in private 1-on-1 chat.
              </p>

              {/* Verified WhatsApp Notice */}
              <div className="p-4 rounded-xl bg-cream-100 border border-cream-200/80 mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-maroon-900 block">
                    Instant WhatsApp Support
                  </span>
                  <span className="text-[11px] text-charcoal-700 font-medium">
                    Click the button below to message without saving contact
                  </span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to get in touch regarding your studio services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Click to Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Community */}
          <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-200/90 shadow-soft hover:border-gold-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500 text-maroon-950 flex items-center justify-center mb-5 shadow-xs">
                <Users className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-semibold tracking-wider uppercase text-maroon-800 bg-maroon-50 px-2.5 py-1 rounded-full border border-maroon-200/70 inline-block mb-3">
                Community Updates
              </span>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-950 mb-2">
                Join Our WhatsApp Community
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                Be the first to view festive artisan creations, newly finished sarees, mehndi
                booking dates, and creative inspiration in our welcoming group.
              </p>

              <div className="p-4 rounded-xl bg-cream-100 border border-cream-200/80 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-charcoal-800">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span>Showcase previews & festive designs</span>
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

        {/* Studio Location Card */}
        <div className="bg-cream-50 rounded-2xl p-6 sm:p-7 border border-cream-200/90 shadow-soft">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-maroon-100 text-maroon-800 shrink-0 mt-0.5 sm:mt-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700 block mb-0.5">
                  Studio Location
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-maroon-950 leading-snug">
                  {SITE_CONFIG.location.formattedAddress}
                </h4>
                <p className="text-xs text-charcoal-700 font-sans mt-1">
                  Enquiries, customization discussions, and bookings are handled directly on WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <a
                href="https://share.google/cv0DD1qDMRqMmbgD2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 border border-maroon-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-300" />
                <span>Open in Maps</span>
              </a>
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am reaching out regarding an order/booking from your local studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-maroon-700" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Small boutique notice */}
        <div className="mt-8 text-center text-xs text-charcoal-700 flex items-center justify-center gap-2">
          <LotusMotif className="w-4 h-4 text-gold-600" />
          <span>Small batch & handcrafted orders • Connect directly with Shivangi</span>
        </div>
      </div>
    </section>
  );
}
