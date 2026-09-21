import React from "react";
import Image from "next/image";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import { SectionHeading } from "./ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Create & Style"
          title="Bespoke Handcrafted Services"
          subtitle="Explore our signature artisanal offerings. Each creation is thoughtfully customized and crafted with love for your special occasions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col bg-cream-100/70 rounded-2xl overflow-hidden border border-cream-200/90 hover:border-gold-300 shadow-soft hover:shadow-elevated transition-all duration-300 group ${
                  isFeatured ? "md:col-span-2 lg:col-span-1 border-gold-200/80" : ""
                }`}
              >
                {/* Image Container with replacement-friendly structure */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-maroon-900">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Service Category Tag */}
                  {service.tag && (
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-cream-50/90 backdrop-blur-sm text-maroon-900 border border-gold-200/60 shadow-sm flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-gold-600" />
                      <span>{service.tag}</span>
                    </div>
                  )}

                  {/* Bottom Image Overlay Title for clarity */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-widest block">
                      Custom Studio Service
                    </span>
                    <h3 className="text-xl font-serif font-bold text-cream-50 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-charcoal-700 leading-relaxed font-sans mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Features or Inclusions */}
                    {service.features && (
                      <div className="mb-5 space-y-2 pt-2 border-t border-cream-200/80">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                            <span className="text-xs text-charcoal-800 leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {service.inclusions && (
                      <div className="mb-5 pt-2 border-t border-cream-200/80">
                        <span className="text-[11px] font-semibold text-maroon-800 uppercase tracking-wider block mb-2">
                          Available For:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.inclusions.map((item, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cream-50 text-maroon-900 border border-cream-300/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA & Pricing Transparency */}
                  <div className="pt-4 border-t border-cream-200/90 mt-auto">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="text-charcoal-700 font-medium italic">
                        Customized to order
                      </span>
                      <span className="text-gold-700 font-semibold">
                        Ask for details on WhatsApp
                      </span>
                    </div>

                    <a
                      href={service.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-gold-300 group-hover/btn:scale-110 transition-transform" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
