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
  title: "Beauty Parlour in Gola Gokaran Nath | Shivangi Shakti Studio",
  description:
    "Shivangi Shakti Studio — Professional beauty parlour, bridal makeup, mehndi, facials, waxing, hair styling, customized sarees, and handcrafted art in Gola Gokaran Nath, UP.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#F3EAE1]/70 via-[#FAF6F0] to-[#FAF6F0]">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[#E8D5CE]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A0E17]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F3EAE1] text-[#4A0E17] border border-[#E8D5CE] shadow-xs mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>SHIVANGI SHAKTI STUDIO • Gola Gokaran Nath</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2D060D] tracking-tight leading-[1.12] mb-5">
                Beauty, Bridal &amp; Mehndi Studio in Gola Gokaran Nath
              </h1>

              <p className="font-serif italic text-lg sm:text-2xl text-[#6E1925] mb-4">
                &ldquo;Your Beauty. Your Glow. Your Moment.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#473B3E] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 mb-8">
                Professional beauty, bridal makeup, mehndi and creative services — thoughtfully crafted for every special moment by Shivangi Saxena.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
                <Link
                  href="/beauty-services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#FAF6F0] bg-[#4A0E17] hover:bg-[#380911] shadow-sm hover:shadow-md transition-all border border-[#52131D]"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>

                <a
                  href={getWhatsAppUrl("Hi Shivangi, I am visiting your website and would like to enquire about services, availability and pricing.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#FAF6F0] bg-[#25D366] hover:bg-[#20ba5a] shadow-sm hover:shadow-md transition-all border border-[#20ba5a]"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp for Enquiry</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#7A585F] pt-4 border-t border-[#E8D5CE]/70">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Unchi Bhood, Gola Gokaran Nath, Uttar Pradesh</span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#E8D5CE] bg-[#FAF6F0] p-2">
                  <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#2D060D]">
                    <Image
                      src="https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=1000&q=80"
                      alt="Traditional Indian bridal beauty styling and makeup at Shivangi Shakti Studio"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D060D]/85 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF6F0]/95 backdrop-blur-md border border-[#E8D5CE]">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                        Beauty &amp; Bridal Studio
                      </span>
                      <p className="text-sm font-serif font-bold text-[#4A0E17]">
                        Beauty Parlour • Bridal Makeup • Henna
                      </p>
                    </div>
                  </div>
                </div>
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
                  alt="Bridal makeup and party styling at Shivangi Shakti Studio"
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
