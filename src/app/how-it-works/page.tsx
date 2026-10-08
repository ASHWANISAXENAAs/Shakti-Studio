import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import { MessageCircle, Clock, Truck, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: "How It Works | Order Guide, Timelines & Consultations | Shakti Studio",
  description:
    "Learn how to order custom sarees, personalized sketches, clay art, and book mehndi & makeup appointments directly with Shivangi Saxena at Shakti Studio in Gola Gokaran Nath.",
};

export default function HowItWorksPage() {
  const timelines = [
    {
      service: "Custom Ghungroo Sarees",
      time: "7 – 14 Business Days",
      details: "Includes fabric sourcing/preparation, ghungroo border hand-stitching, embellishment, and final inspection.",
    },
    {
      service: "Custom Portrait Sketches",
      time: "3 – 7 Business Days",
      details: "High-resolution photo review, proportional pencil layout, detailed shading, and protective packaging.",
    },
    {
      service: "Mitti Ki Murti & Clay Art",
      time: "5 – 10 Business Days",
      details: "Sculpting, natural drying period, fine line detailing, and artisanal color finishing.",
    },
    {
      service: "Bridal & Festive Mehndi",
      time: "Advance Booking Recommended",
      details: "Dates book quickly during wedding and festive seasons (Karwa Chauth, Teej). Reserve your date early.",
    },
    {
      service: "Celebratory Makeup Styling",
      time: "Advance Booking Recommended",
      details: "Personalized look consultation in advance; styling scheduled to your event timeline.",
    },
  ];

  return (
    <div>
      <PageBanner
        badge="Simple & Transparent"
        title="How to Order & Book with Us"
        description="Every order is handled with direct artist care. Here is everything you need to know about placing a custom request, discussing designs, and receiving your finished creation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How It Works" },
        ]}
      />

      {/* 5 Steps Grid */}
      <HowItWorks />

      {/* Timelines and Turnaround Guide */}
      <section className="py-12 sm:py-16 bg-cream-50 border-t border-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              Timelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-3 mb-2">
              Estimated Crafting & Booking Timelines
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700">
              Because genuine handcrafting takes love and time, here are our typical turnaround windows.
            </p>
          </div>

          <div className="space-y-3.5">
            {timelines.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-100/90 rounded-2xl p-5 sm:p-6 border border-cream-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs"
              >
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-950">
                    {item.service}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 max-w-xl leading-relaxed">
                    {item.details}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-2 bg-cream-50 px-3.5 py-2 rounded-xl border border-gold-200/80">
                  <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                  <span className="text-xs font-bold text-maroon-900 whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery & Studio Pickup Policy */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream-100/90 p-6 rounded-2xl border border-cream-200">
              <div className="w-9 h-9 rounded-xl bg-maroon-800 text-gold-300 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-maroon-950 mb-1">
                Pickup & Courier Delivery
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Orders can be picked up directly from our local studio in <strong>Unchi Bhood, Gola Gokaran Nath</strong>, or shipped safely via trusted courier for sarees, sketches, and select handcrafted art.
              </p>
            </div>

            <div className="bg-cream-100/90 p-6 rounded-2xl border border-cream-200">
              <div className="w-9 h-9 rounded-xl bg-gold-500 text-maroon-950 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-maroon-950 mb-1">
                Quality Check & Approvals
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Before any sketch or saree is dispatched, Shivangi shares detailed photographs or video previews on WhatsApp for your complete satisfaction.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-maroon-950 text-cream-50 border border-gold-400/40">
            <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2 text-cream-50">
              Have an urgent request or specific deadline?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/90 max-w-lg mx-auto mb-6">
              Reach out directly on WhatsApp and mention your required date. We will confirm if express scheduling is possible for your event!
            </p>
            <a
              href={getWhatsAppUrl("Hi Shivangi, I have a specific date for my order/booking and wanted to check availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gold-400 hover:bg-gold-500 text-maroon-950 transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-maroon-950" />
              <span>Check Date Availability on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
