import React from "react";
import {
  Sparkles,
  HeartHandshake,
  Moon,
  Sun,
  Flame,
  Users,
  Gift,
  Cake,
  Flower2,
  Palette,
  MessageCircle,
} from "lucide-react";
import { SPECIAL_OCCASIONS } from "@/data/occasions";
import { SectionHeading } from "./ui/SectionHeading";
import { getWhatsAppUrl } from "@/data/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Sun: <Sun className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Gift: <Gift className="w-5 h-5" />,
  Cake: <Cake className="w-5 h-5" />,
  Flower2: <Flower2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export default function Occasions() {
  return (
    <section id="occasions" className="py-16 sm:py-24 bg-cream-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Celebrate Every Milestone"
          title="Styled for Your Special Occasions"
          subtitle="Whether an intimate ritual or a grand family wedding, every Shakti Studio creation and styling service can be personalized to fit your theme and celebration."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 mb-12">
          {SPECIAL_OCCASIONS.map((occasion) => {
            return (
              <div
                key={occasion.name}
                className="bg-cream-50 rounded-2xl p-4 sm:p-5 border border-cream-200/80 hover:border-gold-300 shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-maroon-50 text-maroon-700 group-hover:bg-maroon-700 group-hover:text-cream-50 border border-maroon-100 flex items-center justify-center transition-colors duration-300 mb-3 shadow-xs">
                  {ICON_MAP[occasion.iconName] || <Sparkles className="w-5 h-5" />}
                </div>

                {occasion.badge && (
                  <span className="text-[10px] font-semibold text-gold-700 uppercase tracking-wider bg-gold-50 px-2 py-0.5 rounded-full border border-gold-200/70 mb-1.5">
                    {occasion.badge}
                  </span>
                )}

                <h3 className="text-base font-serif font-bold text-maroon-950 mb-1">
                  {occasion.name}
                </h3>

                <p className="text-xs text-charcoal-700 leading-snug">
                  {occasion.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Celebratory Banner / Prompt */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-cream-50 rounded-2xl p-6 sm:p-8 shadow-elevated border border-gold-400/40 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2 text-cream-50">
            Have a custom theme or celebration in mind?
          </h3>
          <p className="text-xs sm:text-sm text-cream-200/90 font-sans mb-6 max-w-xl mx-auto">
            Tell Shivangi about your upcoming function date, color palette, and requirements. We tailor every detail with care.
          </p>
          <a
            href={getWhatsAppUrl("Hi Shivangi, I would like to discuss styling/art for an upcoming special occasion.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gold-400 hover:bg-gold-500 text-maroon-950 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-maroon-900" />
            <span>Discuss Your Occasion on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
