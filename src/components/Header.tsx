"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Palette,
  Heart,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery", badge: "Photos" },
  { name: "Occasions", href: "/occasions" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
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

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-maroon-950 text-cream-100 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-maroon-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Location & Status */}
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-cream-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="hidden sm:inline">Unchi Bhood,</span> Gola Gokaran Nath, UP
            </span>
            <span className="hidden md:inline text-maroon-700">•</span>
            <span className="hidden md:flex items-center gap-1 text-gold-300">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Handcrafted Sarees, Mehndi & Custom Art Orders Open</span>
            </span>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.whatsappNumber}`}
              className="flex items-center gap-1 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span className="font-medium">{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-maroon-700 hidden sm:inline">•</span>
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-[#25D366] hover:text-[#2ee06f] font-semibold transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Header */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-cream-50/98 backdrop-blur-md shadow-md border-b border-cream-200/90 py-2.5 sm:py-3"
            : "bg-cream-50/95 backdrop-blur-sm border-b border-cream-200/50 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Tagline */}
            <Link
              href="/"
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 rounded-sm shrink-0"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-maroon-800 to-maroon-950 border border-gold-400/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <span className="font-serif text-xs sm:text-sm font-bold text-gold-300">
                    SS
                  </span>
                </div>
                <div>
                  <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-maroon-900 group-hover:text-maroon-700 transition-colors block leading-tight">
                    {SITE_CONFIG.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-sans text-charcoal-700 font-medium tracking-wider uppercase block">
                    Handcrafted • Styled • Bespoke
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-cream-100/70 p-1.5 rounded-full border border-cream-200/80 shadow-xs"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                      active
                        ? "bg-maroon-800 text-cream-50 shadow-sm"
                        : "text-charcoal-800 hover:text-maroon-800 hover:bg-cream-200/60"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                          active
                            ? "bg-gold-500 text-maroon-950"
                            : "bg-gold-200/70 text-maroon-900"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-all shadow-soft hover:shadow-elevated border border-maroon-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 group"
              >
                <MessageCircle className="w-4 h-4 text-gold-300 group-hover:scale-110 transition-transform" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I would like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire on WhatsApp"
                className="p-2 rounded-full text-maroon-800 bg-cream-100 hover:bg-maroon-50 border border-cream-200 sm:hidden"
              >
                <MessageCircle className="w-5 h-5 text-maroon-700" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-maroon-900 bg-cream-100/90 hover:bg-cream-200 border border-cream-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Animated Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="fixed inset-0 top-[102px] z-50 bg-cream-50/98 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-6 overflow-y-auto border-t border-cream-200 animate-fadeIn shadow-2xl"
          >
            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-gold-800 uppercase tracking-widest bg-gold-50/90 rounded-xl border border-gold-200/70">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Explore Shakti Studio</span>
                </span>
                <span className="text-[10px] text-maroon-800 font-sans font-normal lowercase">
                  Gola Gokaran Nath, UP
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                        active
                          ? "bg-maroon-800 text-cream-50 shadow-soft"
                          : "text-maroon-950 bg-cream-100/70 hover:bg-cream-200/80 border border-cream-200/70"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span>{link.name}</span>
                        {link.badge && (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                              active
                                ? "bg-gold-500 text-maroon-950"
                                : "bg-gold-100 text-maroon-900 border border-gold-200"
                            }`}
                          >
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 ${active ? "text-gold-300" : "text-maroon-400"}`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer & Quick Actions */}
            <div className="pt-6 pb-2 border-t border-cream-200 space-y-3 mt-6">
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

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SITE_CONFIG.whatsappNumber}`}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-maroon-900 bg-cream-100 hover:bg-cream-200 border border-cream-200"
                >
                  <Phone className="w-3.5 h-3.5 text-maroon-700" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-maroon-900 bg-gold-100 hover:bg-gold-200 border border-gold-300/80"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-700" />
                  <span>Community</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-cream-100/90 border border-cream-200 text-center">
                <p className="text-[11px] text-charcoal-700 font-medium">
                  📍 {SITE_CONFIG.location.formattedAddress}
                </p>
                <p className="text-[10px] text-gold-700 font-serif italic mt-0.5">
                  &ldquo;{SITE_CONFIG.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
