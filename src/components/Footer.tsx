import React from "react";
import { MessageCircle, Users, Heart, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 text-cream-100 border-t border-maroon-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-maroon-800/60">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                {SITE_CONFIG.name}
              </h2>
            </div>

            <p className="font-serif italic text-gold-300 text-sm">
              &ldquo;{SITE_CONFIG.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed font-sans max-w-sm">
              A boutique Indian creative studio dedicated to custom ghungroo sarees,
              handcrafted clay art, commemorative sketches, and bridal beauty styling.
            </p>

            <div className="pt-2 text-xs text-cream-300/70 space-y-1">
              <div>
                <span>Founded & curated by </span>
                <strong className="text-cream-100 font-semibold">{SITE_CONFIG.owner}</strong>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] text-cream-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.formattedAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-300/80">
              <li>
                <a href="#hero" className="hover:text-gold-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-gold-300 transition-colors">
                  Special Occasions
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">
                  Style Inspiration
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gold-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  About Shivangi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-300 transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Community Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
              Direct Connections
            </h3>

            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am reaching out from your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-maroon-900/80 hover:bg-maroon-800/90 border border-maroon-800 text-cream-100 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cream-400 block">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-cream-50 group-hover:text-gold-300 transition-colors">
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={SITE_CONFIG.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-maroon-900/80 hover:bg-maroon-800/90 border border-maroon-800 text-cream-100 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-gold-400/20 text-gold-300">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cream-400 block">
                    Community Updates
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-cream-50 group-hover:text-gold-300 transition-colors">
                    Join Our WhatsApp Community
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400/70 text-center sm:text-left">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved. Gola Gokaran Nath, Uttar Pradesh.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-cream-400/60">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400/40 inline" />
            <span>for your special moments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
