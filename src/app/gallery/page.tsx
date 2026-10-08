import React from "react";
import type { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import Gallery from "@/components/Gallery";
import { Sparkles, MessageCircle, Users } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export const metadata: Metadata = {
  title: "Style Gallery & Recent Works | Photos & Inspiration | Shakti Studio",
  description:
    "Browse our complete portfolio of handcrafted ghungroo sarees, pencil sketch portraits, bridal and festive mehndi designs, and artisan clay creations by Shakti Studio in Gola Gokaran Nath.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageBanner
        badge="Curated Portfolio"
        title="Artisan Gallery & Real Creations"
        description="Explore authentic handcrafted creations by Shakti Studio alongside style inspirations. Use the category filters and pagination below to browse our collection."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* Paginated Gallery Component with 6 items per page */}
      <Gallery isPaginated={true} itemsPerPage={6} showHeading={false} />

      {/* WhatsApp Community Showcase Note */}
      <section className="pb-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-maroon-900 to-maroon-950 text-cream-50 rounded-2xl p-6 sm:p-8 border border-gold-400/40 shadow-soft text-center">
            <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-300 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream-50 mb-2">
              Have a design reference of your own?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/90 max-w-xl mx-auto mb-6">
              Found a saree pattern on Pinterest, a portrait photo you want drawn, or an intricate mehndi design? Share the picture directly on WhatsApp and Shivangi will discuss options with you!
            </p>
            <a
              href={getWhatsAppUrl("Hi Shivangi, I have a photo/reference design I'd like to share with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gold-400 hover:bg-gold-500 text-maroon-950 transition-colors shadow-soft"
            >
              <MessageCircle className="w-4 h-4 text-maroon-950" />
              <span>Share Your Reference Photo on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
