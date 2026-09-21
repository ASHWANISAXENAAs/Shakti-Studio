import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, SITE_CONFIG } from "@/data/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl(SITE_CONFIG.defaultWhatsAppMessage);

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shivangi Saxena on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group inline-flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-elevated transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/60 border border-white/30"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-white fill-white/20" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream-50 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cream-50" />
          </span>
        </div>

        <span className="hidden sm:inline font-sans text-xs sm:text-sm font-bold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
