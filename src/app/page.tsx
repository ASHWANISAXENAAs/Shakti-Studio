import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Smile,
  Scissors,
  Palette,
  MapPin,
  Clock,
  Compass,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "Nishamani Makeover & Beauty Parlour | Beauty Parlour in Gola Gokaran Nath, Kheri UP",
  },
  description:
    "Nishamani Makeover & Beauty Parlour, Cinema Road, Gola Gokaran Nath, Lakhimpur Kheri (UP) — beauty parlour for bridal makeup, HD party makeup, facial, hair spa, waxing, threading, manicure, pedicure & bridal mehndi. Book on WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* ─── 1. HERO SECTION (Parlour-first) ─── */}
      <section className="relative overflow-hidden bg-[#2D060D] text-[#FAF6F0]">
        <Image
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80"
          alt="Nishamani Makeover & Beauty Parlour salon interior in Gola Gokaran Nath, Kheri"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2D060D] via-[#2D060D]/90 to-[#2D060D]/40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#FAF6F0]/10 text-[#E6C9BF] border border-[#D4AF37]/40 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Beauty Parlour &amp; Makeover • Gola Gokaran Nath, Kheri (UP)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-4">
                {SITE_CONFIG.parlour.name}
              </h1>

              <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] mb-4">
                &ldquo;Your Beauty. Your Glow. Your Moment.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#E6C9BF] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 mb-8">
                Bridal &amp; HD makeup, facials, hair spa, waxing, threading, manicure, pedicure and
                bridal mehndi — professional parlour care on Cinema Road, Gola Gokaran Nath. A{" "}
                {SITE_CONFIG.name} venture by {SITE_CONFIG.owner}.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
                <a
                  href={getWhatsAppUrl("Hi, I would like to book an appointment at Nishamani Makeover & Beauty Parlour. Please share availability and pricing.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Appointment on WhatsApp</span>
                </a>
                <a
                  href={SITE_CONFIG.parlour.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#2D060D] bg-[#FAF6F0] hover:bg-[#F3EAE1] shadow-md transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#4A0E17]" />
                  <span>Get Directions</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#FAF6F0]/15 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">Personal Care</p>
                    <p className="text-[11px] text-[#D1B8B3]">1-on-1 attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">Hygiene First</p>
                    <p className="text-[11px] text-[#D1B8B3]">Sanitized tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold">By Appointment</p>
                    <p className="text-[11px] text-[#D1B8B3]">No waiting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#FAF6F0] text-[#2D2426] p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/40">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8932A] block mb-2">
                  Visit the Parlour
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D060D] mb-4">
                  {SITE_CONFIG.parlour.shortName}
                </h2>
                <div className="flex items-start gap-3 text-sm mb-5">
                  <MapPin className="w-5 h-5 text-[#4A0E17] shrink-0 mt-0.5" />
                  <address className="not-italic leading-relaxed">
                    {SITE_CONFIG.location.formattedAddress}
                  </address>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-xs mb-6">
                  {["Bridal Makeup", "HD / Party Makeup", "Facial & Clean-up", "Hair Spa", "Waxing & Threading", "Mani & Pedicure", "Bridal Mehndi", "Hair Styling"].map((s) => (
                    <li key={s} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F3EAE1] border border-[#E8D5CE]">
                      <Scissors className="w-3 h-3 text-[#B8932A] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/beauty-services"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#FAF6F0] bg-[#4A0E17] hover:bg-[#380911] transition-colors"
                >
                  <span>View All Parlour Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICE HIGHLIGHTS (Everything You Need to Feel Beautiful) ─── */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase bg-[#F3EAE1] text-[#4A0E17] px-3.5 py-1 rounded-full border border-[#E8D5CE]">
              Studio Highlights
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D060D] mt-3 mb-3">
              Everything You Need to Feel Beautiful
            </h2>
            <p className="text-xs sm:text-sm text-[#7A585F] leading-relaxed">
              Thoughtfully curated beauty and bridal rituals, tailored with personal care for every occasion in Gola Gokaran Nath.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: BEAUTY */}
            <Link
              href="/beauty-services"
              className="group bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E8D5CE] hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#2D060D]">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
                  alt="Beauty parlour services including facials, hair spa and waxing in Gola Gokaran Nath"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF6F0]/90 text-[#4A0E17]">
                  Beauty Parlour
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-[#FAF6F0]">
                  <h3 className="text-xl font-serif font-bold">BEAUTY</h3>
                  <p className="text-xs text-[#E6C9BF]">Hair • Facial • Waxing • Threading</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#FAF6F0]">
                <p className="text-xs sm:text-sm text-[#473B3E] leading-relaxed mb-4">
                  Rejuvenating skin facials, clean-ups, D-Tan therapy, deep conditioning hair spa, gentle waxing, threading, and deluxe manicure &amp; pedicure.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A0E17] group-hover:text-[#6E1925] pt-3 border-t border-[#E8D5CE]">
                  <span>Explore Beauty Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 2: BRIDAL */}
            <Link
              href="/bridal-mehndi"
              className="group bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E8D5CE] hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#2D060D]">
                <Image
                  src="https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=900&q=80"
                  alt="Bridal makeup and party styling at Shakti Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF6F0]/90 text-[#4A0E17]">
                  Bridal Studio
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-[#FAF6F0]">
                  <h3 className="text-xl font-serif font-bold">BRIDAL</h3>
                  <p className="text-xs text-[#E6C9BF]">Bridal • Engagement • Party Makeup</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#FAF6F0]">
                <p className="text-xs sm:text-sm text-[#473B3E] leading-relaxed mb-4">
                  Waterproof HD bridal makeup, graceful engagement glow, party glamour, hair styling, floral buns, and personalized dupatta &amp; jewelry setting.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A0E17] group-hover:text-[#6E1925] pt-3 border-t border-[#E8D5CE]">
                  <span>Explore Bridal Makeup</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 3: MEHNDI */}
            <Link
              href="/bridal-mehndi"
              className="group bg-[#FAF6F0] rounded-3xl overflow-hidden border border-[#E8D5CE] hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#2D060D]">
                <Image
                  src="/images/mehndi-bridal-1.jpg"
                  alt="Intricate bridal and festive mehndi designs at Shakti Studio Gola Gokaran Nath"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF6F0]/90 text-[#4A0E17]">
                  Henna Art
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-[#FAF6F0]">
                  <h3 className="text-xl font-serif font-bold">MEHNDI</h3>
                  <p className="text-xs text-[#E6C9BF]">Bridal • Arabic • Festive Mehndi</p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#FAF6F0]">
                <p className="text-xs sm:text-sm text-[#473B3E] leading-relaxed mb-4">
                  100% natural organic dark-stain henna cones with delicate full-hand Indian bridal patterns, floral Arabic trails, and festive henna for Karwa Chauth &amp; Teej.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A0E17] group-hover:text-[#6E1925] pt-3 border-t border-[#E8D5CE]">
                  <span>Explore Mehndi Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. CREATIVE STUDIO PREVIEW (More Than Beauty) ─── */}
      <section className="py-16 sm:py-24 bg-[#F3EAE1]/60 border-y border-[#E8D5CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-[#E8D5CE] shadow-sm bg-[#2D060D]">
                <Image
                  src="/images/shakti-ghungroo-saree-detail.webp"
                  alt="Customized ghungroo border saree handmade at Shakti Studio"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-[#FAF6F0]/90 text-[11px] font-bold text-[#4A0E17]">
                  Custom Sarees
                </div>
              </div>

              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-[#E8D5CE] shadow-sm bg-[#2D060D] mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=800&q=80"
                  alt="Mitti Ki Murti clay art and idol sculpture work"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-[#FAF6F0]/90 text-[11px] font-bold text-[#4A0E17]">
                  Mitti Ki Murti &amp; Art
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold tracking-wider uppercase bg-[#F3EAE1] text-[#4A0E17] px-3.5 py-1 rounded-full border border-[#E8D5CE] inline-block">
                Secondary Creative Studio
              </span>

              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D060D]">
                More Than Beauty
              </h2>

              <p className="text-sm sm:text-base text-[#473B3E] leading-relaxed font-sans">
                From beauty and celebrations to handcrafted creativity, Shakti Studio brings together services made with patience, detail and imagination.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#2D2426]">
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8D5CE]">
                  <strong className="block text-[#4A0E17]">Customized Sarees</strong>
                  <span className="text-[11px] text-[#7A585F]">Iconic Ghungroo borders &amp; organza trims</span>
                </div>
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8D5CE]">
                  <strong className="block text-[#4A0E17]">Portrait Sketches</strong>
                  <span className="text-[11px] text-[#7A585F]">Hand-drawn pencil art from your photo</span>
                </div>
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8D5CE]">
                  <strong className="block text-[#4A0E17]">Mitti Ki Murti</strong>
                  <span className="text-[11px] text-[#7A585F]">Pure eco-friendly clay pooja idols</span>
                </div>
                <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8D5CE]">
                  <strong className="block text-[#4A0E17]">Handmade Gifts</strong>
                  <span className="text-[11px] text-[#7A585F]">Bespoke festival keepsakes</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/creative-studio"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#4A0E17] hover:bg-[#380911] transition-all shadow-sm"
                >
                  <span>Explore Creative Studio</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. GALLERY PREVIEW ─── */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-wider uppercase bg-[#F3EAE1] text-[#4A0E17] px-3.5 py-1 rounded-full border border-[#E8D5CE]">
              Curated Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D060D] mt-3 mb-2">
              Our Work &amp; Style Inspiration
            </h2>
            <p className="text-xs sm:text-sm text-[#7A585F]">
              Authentic work and design references across beauty, bridal henna, customized sarees, and pencil portrait sketches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#2D060D]">
              <Image
                src="https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=600&q=80"
                alt="Bridal makeup style inspiration"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-bold text-[#FAF6F0]">
                Bridal Makeup
              </div>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#2D060D]">
              <Image
                src="/images/mehndi-bridal-1.jpg"
                alt="Bridal henna full hand design"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-bold text-[#FAF6F0]">
                Bridal Henna
              </div>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#2D060D]">
              <Image
                src="/images/saree-sample-sky-blue.jpg"
                alt="Sky blue ghungroo border saree actual Shakti Studio creation"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-bold text-[#FAF6F0]">
                Ghungroo Saree
              </div>
            </div>

            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#2D060D]">
              <Image
                src="/images/sketch-sample-pencil.jpg"
                alt="Hand-drawn pencil portrait sketch from photograph"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[11px] font-bold text-[#FAF6F0]">
                Portrait Sketch
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/creative-studio"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A0E17] hover:text-[#6E1925] underline underline-offset-4 decoration-[#D4AF37]"
            >
              <span>Explore Creative Studio &amp; Art Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. FINAL CONVERSION SECTION (Planning Your Next Look?) ─── */}
      <section className="py-16 sm:py-24 bg-[#3D0A12] text-[#FAF6F0] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-semibold tracking-wider uppercase bg-[#29070D] text-[#D4AF37] px-3.5 py-1 rounded-full border border-[#52131D] inline-block mb-3">
            Enquire &amp; Visit
          </span>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#FAF6F0] mb-3">
            Planning Your Next Look?
          </h2>

          <p className="text-xs sm:text-base text-[#E6C9BF] max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Tell us what you are looking for and we&apos;ll help you with services, pricing and availability directly on WhatsApp or welcome you to our studio in Gola Gokaran Nath.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl("Hi Shivangi, I am planning my look and would like to enquire about services, pricing and availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#FAF6F0] bg-[#25D366] hover:bg-[#20ba5a] shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp for Pricing</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#4A0E17] bg-[#FAF6F0] hover:bg-[#F3EAE1] shadow-md transition-all border border-[#E8D5CE]"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Visit Studio</span>
            </Link>
          </div>

          <p className="text-[11px] text-[#D1B8B3] mt-6 italic">
            Gola Gokaran Nath, Uttar Pradesh • Direct WhatsApp consultation without saving contact
          </p>
        </div>
      </section>
    </div>
  );
}
