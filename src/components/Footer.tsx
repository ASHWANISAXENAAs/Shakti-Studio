import React from "react";
import Link from "next/link";
import { MessageCircle, Users, Heart, MapPin, Sparkles } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D060D] text-[#F5EBE6] border-t border-[#4A0E17] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#4A0E17]/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex flex-col group">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors">
                SHIVANGI SHAKTI STUDIO
              </span>
              <span className="text-[10px] font-sans tracking-widest text-[#D4AF37] uppercase font-semibold mt-1">
                Beauty • Bridal • Mehndi • Creative Studio
              </span>
            </Link>

            <p className="font-serif italic text-[#E8D5CE] text-sm">
              &ldquo;Your Beauty. Your Glow. Your Moment.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#D1B8B3] leading-relaxed font-sans max-w-sm">
              A boutique studio in Gola Gokaran Nath dedicated to professional beauty parlour services, bridal & festive makeup, dark-staining henna, customized ghungroo sarees, and handcrafted art.
            </p>

            <div className="pt-2 text-xs text-[#D1B8B3] space-y-1.5">
              <div className="flex items-start gap-1.5 text-[11px] pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.formattedAddress}</span>
              </div>
            </div>
          </div>

          {/* 5 Pages Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Studio Pages</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E6C9BF]">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/beauty-services" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">›</span> Beauty Services (Hair, Facial, Waxing)
                </Link>
              </li>
              <li>
                <Link href="/bridal-mehndi" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">›</span> Bridal & Mehndi Studio
                </Link>
              </li>
              <li>
                <Link href="/creative-studio" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">›</span> Creative Studio (Sarees, Art & Idols)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="text-[#D4AF37] text-xs">›</span> Contact & Studio Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp & Location Column (NO PHONE NUMBER) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
              Direct Enquiry & Studio Visit
            </h3>

            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am reaching out from your website to enquire about services, availability and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#3D0A12] hover:bg-[#4E0F18] border border-[#52131D] text-[#FAF6F0] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                    Instant Connect
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors">
                    WhatsApp for Price & Availability
                  </span>
                </div>
              </a>

              <Link
                href="/contact"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#3D0A12] hover:bg-[#4E0F18] border border-[#52131D] text-[#FAF6F0] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] block">
                    Visit In Person
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#FAF6F0] group-hover:text-[#D4AF37] transition-colors">
                    Visit Our Studio in Gola Gokaran Nath
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6C9BF]/80 text-center sm:text-left">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved. Gola Gokaran Nath, Uttar Pradesh.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-[#E6C9BF]/70">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E8D5CE] fill-[#E8D5CE]/40 inline" />
            <span>for your special moments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
