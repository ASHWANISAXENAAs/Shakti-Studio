import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import Occasions from "@/components/Occasions";
import { MessageCircle, Sparkles, Heart, Calendar, ArrowRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: "Occasion Styling & Festive Celebrations | Weddings, Festivals, Gifting | Shakti Studio",
  description:
    "Discover bespoke artisan styling and personalized gifts tailored for Indian weddings, Karwa Chauth, Teej, Diwali, Anniversaries, and auspicious poojas by Shakti Studio in Gola Gokaran Nath.",
};

export default function OccasionsPage() {
  const occasionGuides = [
    {
      title: "Weddings & Bridal Milestones",
      desc: "Comprehensive styling including bespoke ghungroo sarees for sangeet or reception, intricate full-hand bridal henna, celebratory makeup styling, and couple sketch portraits as treasured keepsake gifts.",
      tag: "Bridal Suite",
      recommended: ["Custom Ghungroo Sarees", "Bridal Mehndi", "Celebratory Makeup", "Couple Portrait Sketch"],
    },
    {
      title: "Festivals: Karwa Chauth, Teej & Diwali",
      desc: "Festive season preparations made effortless with special priority slots for henna application, handcrafted mitti ki murti idols for Lakshmi Ganesh Pooja, and festive saree detailing.",
      tag: "Festive Rituals",
      recommended: ["Festive Mehndi", "Mitti Ki Murti Idols", "Custom Sarees", "Festive Glow Styling"],
    },
    {
      title: "Milestone Gifting & Anniversaries",
      desc: "Surprise your loved ones with deeply personal handmade gifts that can never be bought off a shelf — realistic pencil portraits framed with love, and custom clay home decor.",
      tag: "Handmade Gifting",
      recommended: ["Custom Pencil Portrait", "Clay Art Figurines", "Custom Saree"],
    },
  ];

  return (
    <div>
      <PageBanner
        badge="Celebration Guide"
        title="Styled for Every Cherished Occasion"
        description="Whether you are preparing for your wedding week, a traditional festival, or searching for the most memorable personalized gift, Shakti Studio crafts moments that linger forever."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Occasions" },
        ]}
      />

      {/* Occasions Grid */}
      <Occasions />

      {/* In-depth Occasion Styling Guides */}
      <section className="py-12 sm:py-16 bg-cream-50 border-t border-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              Tailored Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-3 mb-2">
              How We Help You Celebrate
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-700">
              Personalized ideas and recommended service combinations for each event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {occasionGuides.map((guide, i) => (
              <div
                key={i}
                className="bg-cream-100/80 rounded-2xl p-6 sm:p-7 border border-cream-200/90 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-maroon-100 text-maroon-900 mb-3">
                    <Sparkles className="w-3 h-3 text-gold-600" />
                    <span>{guide.tag}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-maroon-950 mb-3">
                    {guide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans mb-6">
                    {guide.desc}
                  </p>

                  <div className="pt-4 border-t border-cream-200/80 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-maroon-800 block mb-2">
                      Popular Choices:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {guide.recommended.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium bg-cream-50 text-maroon-950 px-2 py-0.5 rounded-md border border-cream-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Hi Shivangi, I would like to plan styling/gifts for ${guide.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-maroon-800 hover:bg-maroon-900 text-cream-50 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300" />
                  <span>Book for this Occasion</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
