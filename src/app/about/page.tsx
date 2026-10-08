import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import About from "@/components/About";
import { MessageCircle, Heart, Sparkles, MapPin, Palette, Award, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: "About Shivangi Saxena | Founder & Artist | Shakti Studio",
  description:
    "Meet Shivangi Saxena, the founder and creative artisan behind Shakti Studio in Gola Gokaran Nath, Uttar Pradesh. Discover the artistic journey, values, and passion for Indian craftsmanship.",
};

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        badge="Artisan Story"
        title="About Shakti Studio & Shivangi Saxena"
        description="Dedicated to preserving the beauty of handmade Indian artistry — personalized ghungroo sarees, fine pencil portraiture, traditional clay sculpting, and bridal henna rituals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Main About Component */}
      <About />

      {/* Studio Heritage & Values Section */}
      <section className="py-12 sm:py-16 bg-cream-100/70 border-t border-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Story Box */}
            <div className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-cream-200/90 shadow-soft">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200 mb-3 inline-block">
                Artisan Philosophy
              </span>
              <h3 className="font-serif font-bold text-2xl text-maroon-950 mb-3">
                Why Shakti Studio is Different
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                In an era of mass-produced factory goods, Shakti Studio was created with a clear belief: that objects and moments become sacred when made by hand with devoted personal care.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span><strong>Small-batch authenticity:</strong> Never mass produced; each piece has its own artistic soul.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span><strong>Direct dialogue:</strong> You speak with Shivangi directly without dealing with managers or bots.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span><strong>Local pride:</strong> Rooted in Gola Gokaran Nath, serving families locally and across India.</span>
                </li>
              </ul>
            </div>

            {/* Studio Location & Local Roots */}
            <div className="bg-maroon-950 text-cream-50 p-6 sm:p-8 rounded-2xl border border-gold-400/40 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-300 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-gold-300 block mb-1">
                Studio Location & Heritage
              </span>
              <h3 className="font-serif font-bold text-2xl text-cream-50 mb-3">
                Gola Gokaran Nath, UP
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/90 leading-relaxed font-sans mb-6">
                Located in Unchi Bhood, Gola Gokaran Nath (Chhoti Kashi), Uttar Pradesh. We warmly welcome local consultations and coordinate orders for customers across regions.
              </p>

              <div className="p-3.5 rounded-xl bg-maroon-900/90 border border-maroon-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-cream-400 block">
                    Contact Address
                  </span>
                  <span className="text-xs font-semibold text-cream-50">
                    {SITE_CONFIG.location.formattedAddress}
                  </span>
                </div>
                <a
                  href="https://share.google/cv0DD1qDMRqMmbgD2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gold-400 text-maroon-950 hover:bg-gold-300 transition-colors shrink-0"
                >
                  Map
                </a>
              </div>
            </div>
          </div>

          {/* Connect Banner */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-cream-50 border border-gold-300/60 shadow-soft">
            <p className="text-base sm:text-lg text-maroon-950 font-serif font-bold mb-2">
              &ldquo;I look forward to styling your most cherished moments.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-gold-700 font-serif italic mb-6">
              — Shivangi Saxena, Founder & Creative Artist
            </p>
            <a
              href={getWhatsAppUrl("Hi Shivangi, I read about you and Shakti Studio and would love to connect!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-50 transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-gold-300" />
              <span>Say Hello on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
