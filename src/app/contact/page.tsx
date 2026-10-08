"use client";

import React, { useState } from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("Custom Ghungroo Saree");
  const [occasion, setOccasion] = useState("");
  const [notes, setNotes] = useState("");

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hi Shivangi, I am reaching out from your website contact page.`;
    text += `\n\n• Service of interest: ${selectedService}`;
    if (occasion) text += `\n• Occasion/Date: ${occasion}`;
    if (notes) text += `\n• My Requirement: ${notes}`;
    text += `\n\nPlease let me know your availability and details. Thank you!`;

    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <PageBanner
        badge="Direct Connections"
        title="Contact & Studio Location"
        description="Have a question or looking to place a custom order? Shivangi Saxena is available directly on WhatsApp. Choose your details below or send a direct text to connect."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      {/* Interactive WhatsApp Message Generator Tool */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-100 rounded-3xl p-6 sm:p-10 border border-gold-300/80 shadow-soft">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                Quick Enquiry Assistant
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-3 mb-2">
                Draft Your WhatsApp Message
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700">
                Choose your desired service below to generate a pre-formatted message ready to send directly to Shivangi.
              </p>
            </div>

            <form onSubmit={handleGenerateWhatsApp} className="space-y-5 max-w-2xl mx-auto">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-maroon-900 mb-2">
                  1. Select Service of Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm font-medium text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-maroon-600 shadow-xs"
                >
                  <option value="Beauty Parlour: Facial, Clean-up & D-Tan">Beauty Parlour: Facial, Clean-up & D-Tan</option>
                  <option value="Beauty Parlour: Hair Spa & Styling">Beauty Parlour: Hair Spa & Styling</option>
                  <option value="Beauty Parlour: Manicure & Pedicure">Beauty Parlour: Manicure & Pedicure</option>
                  <option value="Beauty Parlour: Threading & Waxing">Beauty Parlour: Threading & Waxing</option>
                  <option value="Bridal HD & Party Makeup">Bridal HD & Party Makeup</option>
                  <option value="Bridal & Festive Mehndi">Bridal & Festive Mehndi</option>
                  <option value="Custom Ghungroo Saree">Customized Ghungroo Saree</option>
                  <option value="Mitti Ki Murti / Clay Art">Mitti Ki Murti & Handmade Clay Art</option>
                  <option value="Custom Sketch Portrait">Custom Portrait Sketch Art</option>
                  <option value="General Studio Consultation">General Studio Enquiry / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-maroon-900 mb-2">
                  2. Occasion or Event Date (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="e.g. Wedding on 15th Nov / Karwa Chauth / Birthday gift"
                    className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-charcoal-900 placeholder:text-charcoal-700/60 focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-maroon-600 shadow-xs"
                  />
                  <Calendar className="w-4 h-4 text-gold-600 absolute right-4 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-maroon-900 mb-2">
                  3. Details or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. I have a reference photo of a blue saree / Want an A3 sketch of 2 people..."
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-charcoal-900 placeholder:text-charcoal-700/60 focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-maroon-600 shadow-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-cream-50 bg-maroon-800 hover:bg-maroon-900 shadow-md hover:shadow-lg transition-all border border-maroon-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600"
              >
                <MessageCircle className="w-5 h-5 text-gold-300" />
                <span>Open in WhatsApp & Send Message</span>
              </button>

              <p className="text-center text-[11px] text-charcoal-700 italic">
                No automatic registration or sign-up needed. Opens directly in WhatsApp to chat with Shivangi.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Phone, Address, Community */}
      <Contact />

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
