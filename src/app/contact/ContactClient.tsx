"use client";

import React, { useState } from "react";
import { MessageCircle, Calendar, Sparkles, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/data/constants";

export function ContactClient() {
  const [selectedService, setSelectedService] = useState("Beauty Parlour: Facial & Skin Care");
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
    <div className="bg-cream-100/90 rounded-3xl p-6 sm:p-10 border border-gold-300/80 shadow-soft">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-semibold tracking-wider uppercase text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
          WhatsApp Enquiry Assistant
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mt-3 mb-2">
          Start Your Enquiry on WhatsApp
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-700">
          Choose your desired service below to generate a pre-formatted message ready to send
          directly to Shivangi.
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
            <option value="Beauty Parlour: Facial & Skin Care">Beauty Parlour: Facial & Skin Care</option>
            <option value="Beauty Parlour: Hair Spa & Styling">Beauty Parlour: Hair Spa & Styling</option>
            <option value="Beauty Parlour: Manicure & Pedicure">Beauty Parlour: Manicure & Pedicure</option>
            <option value="Beauty Parlour: Waxing & Threading">Beauty Parlour: Waxing & Threading</option>
            <option value="Bridal HD & Party Makeup">Bridal HD & Party Makeup</option>
            <option value="Bridal & Festive Henna / Mehndi">Bridal & Festive Henna / Mehndi</option>
            <option value="Customized Ghungroo Saree">Customized Ghungroo Saree</option>
            <option value="Custom Pencil Portrait Sketch">Custom Pencil Portrait Sketch</option>
            <option value="Mitti Ki Murti / Eco-Friendly Clay Art">Mitti Ki Murti & Eco-Friendly Clay Art</option>
            <option value="Studio Visit Consultation / Other">Studio Visit Consultation / Other</option>
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
              placeholder="e.g. Wedding on 18th Nov / Karwa Chauth / Birthday gift"
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
            placeholder="e.g. Saree reference photo ready / Need A3 couple sketch / Bridal package enquiry..."
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-sm text-charcoal-900 placeholder:text-charcoal-700/60 focus:outline-none focus:ring-2 focus:ring-maroon-600 focus:border-maroon-600 shadow-xs resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-cream-50 bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-600"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span>Open in WhatsApp & Send Message</span>
        </button>

        <p className="text-center text-[11px] text-charcoal-700 italic">
          Opens directly in WhatsApp with your message pre-filled. Connect directly with Shivangi.
        </p>
      </form>
    </div>
  );
}
