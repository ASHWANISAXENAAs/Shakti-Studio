"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Menu,
  X,
  Sparkles,
  MapPin,
  ChevronRight,
  Compass,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

interface NavLinkItem {
  name: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Beauty Services", href: "/beauty-services" },
  { name: "Bridal & Mehndi", href: "/bridal-mehndi" },
  { name: "Creative Studio", href: "/creative-studio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu on page transition
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
      {/* Top Subtle Announcement Bar */}
      <div className="bg-[#3D0A12] text-[#F5EBE6] text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#52131D]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-[#E6C9BF]">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Gola Gokaran Nath, Uttar Pradesh</span>
            </span>
            <span className="hidden md:inline text-[#7A2A38]">•</span>
            <span className="hidden md:inline text-[#F5EBE6]">
              Beauty Parlour • Bridal Makeup • Mehndi • Creative Studio
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I would like to enquire about services, availability and pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#2ee06f] font-semibold transition-colors bg-[#29070D] px-2.5 py-0.5 rounded-full border border-[#52131D]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp for Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8D5CE]/80 py-2.5"
            : "bg-[#FAF6F0]/90 backdrop-blur-xs border-b border-[#E8D5CE]/50 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Title */}
            <Link
              href="/"
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0E17] rounded-sm shrink-0"
            >
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#4A0E17] group-hover:text-[#6E1925] transition-colors leading-none">
                SHIVANGI SHAKTI STUDIO
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-[#7A585F] uppercase font-medium mt-1">
                Beauty • Bridal • Mehndi • Creative
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#F3EAE1]/80 px-2 py-1.5 rounded-full border border-[#E8D5CE]"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      active
                        ? "bg-[#4A0E17] text-[#FAF6F0] shadow-sm"
                        : "text-[#2D2426] hover:text-[#4A0E17] hover:bg-[#EADBCE]/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Link
                href="/contact"
                className="text-xs font-semibold text-[#7A585F] hover:text-[#4A0E17] px-3 py-2 transition-colors"
              >
                Visit Studio
              </Link>
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about services and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#4A0E17] hover:bg-[#380911] transition-all shadow-sm border border-[#52131D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0E17] group"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Enquiry"
                className="p-2 rounded-full text-[#25D366] bg-[#F3EAE1] border border-[#E8D5CE] sm:hidden"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#4A0E17] bg-[#F3EAE1] hover:bg-[#EADBCE] border border-[#E8D5CE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A0E17] transition-colors"
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
            className="fixed inset-0 top-[96px] z-50 bg-[#FAF6F0]/98 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto border-t border-[#E8D5CE] shadow-2xl animate-fadeIn"
          >
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#4A0E17] uppercase tracking-widest bg-[#F3EAE1] rounded-xl border border-[#E8D5CE]">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Shivangi Shakti Studio</span>
                </span>
                <span className="text-[10px] text-[#7A585F] font-sans font-normal lowercase">
                  Gola Gokaran Nath
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
                      className={`px-4 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                        active
                          ? "bg-[#4A0E17] text-[#FAF6F0] shadow-sm"
                          : "text-[#2D2426] bg-[#F3EAE1]/70 hover:bg-[#EADBCE] border border-[#E8D5CE]/70"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${active ? "text-[#D4AF37]" : "text-[#7A585F]"}`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 pb-2 border-t border-[#E8D5CE] space-y-2.5 mt-6">
              <a
                href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about services and pricing.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#FAF6F0] bg-[#4A0E17] hover:bg-[#380911] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>WhatsApp for Enquiry</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-[#4A0E17] bg-[#F3EAE1] hover:bg-[#EADBCE] border border-[#E8D5CE] transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Visit Our Studio</span>
              </Link>

              <div className="p-3 rounded-xl bg-[#F3EAE1]/80 border border-[#E8D5CE] text-center">
                <p className="text-[11px] text-[#2D2426] font-medium">
                  📍 {SITE_CONFIG.location.formattedAddress}
                </p>
                <p className="text-[10px] text-[#7A585F] font-serif italic mt-0.5">
                  &ldquo;{SITE_CONFIG.subtitle}&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
