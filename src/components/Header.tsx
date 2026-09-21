"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Occasions", href: "#occasions" },
  { name: "Gallery", href: "#gallery" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-soft border-b border-cream-200/80 py-2.5"
          : "bg-cream-50/80 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#hero"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 rounded-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-125 transition-transform" />
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-maroon-900 group-hover:text-maroon-700 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-sans text-charcoal-700 font-medium tracking-wider uppercase pl-4">
              Handcrafted • Styled
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-800 hover:text-maroon-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-maroon-600 border border-maroon-700"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="p-2 rounded-full text-maroon-800 bg-maroon-50 hover:bg-maroon-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 sm:hidden"
            >
              <MessageCircle className="w-5 h-5 text-maroon-700" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-maroon-900 hover:bg-maroon-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] sm:top-[68px] z-50 bg-cream-50/98 backdrop-blur-lg flex flex-col justify-between p-6 overflow-y-auto border-t border-cream-200 animate-fadeIn"
        >
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gold-700 uppercase tracking-widest bg-gold-50/80 rounded-lg border border-gold-200/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Menu</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-maroon-950 hover:bg-maroon-50 hover:text-maroon-800 transition-colors border border-transparent hover:border-maroon-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-gold-600">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 pb-4 border-t border-cream-200/80 space-y-3">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>Enquire on WhatsApp</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-maroon-800 bg-cream-100 hover:bg-cream-200/80 border border-cream-300 transition-colors"
            >
              <span>Join Our WhatsApp Community</span>
            </a>
            <p className="text-center text-[11px] text-charcoal-700 font-serif italic pt-1">
              Handcrafted with Love • Styled for Your Moments
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
