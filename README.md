# Shakti Studio

> **"Handcrafted with Love • Styled for Your Moments"**  
> Founded & curated by **Shivangi Saxena** (Founder & Creative Artist)  
> **Location**: Unchi Bhood, Gola Gokaran Nath, Kheri, Uttar Pradesh – 262802

A production-ready, mobile-first boutique website designed for **Shakti Studio** — an Indian creative studio dedicated to custom ghungroo sarees, handmade clay art (*mitti ki murti*), custom sketch portraits, festive & bridal mehndi, and celebratory makeup styling.

---

## 🌟 Key Highlights & Design System

- **Zero-Friction WhatsApp Conversion**: All service cards, hero CTAs, and quick enquiry triggers link directly to WhatsApp (+91 72755 18725) with context-specific prefilled messages.
- **WhatsApp Community Integration**: Dedicated invitations to join the official Shakti Studio WhatsApp Community (`https://chat.whatsapp.com/JSUAWsf8WRPCfYBqXxrPqh`).
- **Authentic Local Business Information**: Full official address in Gola Gokaran Nath, Kheri, UP embedded in Contact, Footer, and Schema.org LocalBusiness JSON-LD.
- **Warm Indian Boutique Aesthetic**: Curated color palette featuring warm ivory/cream (`#FDFCF9`), royal deep maroon (`#5D0E1C`), antique champagne gold (`#D4B265`), and earthy terracotta (`#BA5B45`).
- **Transparent Style Inspiration**: Gallery cards and service previews clearly presented as style inspiration/design references, preserving trust while real portfolio photos are being compiled.
- **Honest Founder Representation**: Removed all stock photos of women posing as the founder; replaced with a bespoke decorative Shakti Studio monogram emblem (SS) until Shivangi's real portrait is provided.
- **No Database / No Auth / No Displayed Prices**: Lightweight, secure, ultra-fast static website ready for instant hosting.
- **Mobile-First Responsive Layout**: Tested across 360px, 390px, 768px, and desktop displays with smooth navigation and safe floating buttons.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + custom inline SVG Indian floral & lotus motifs
- **Fonts**: Google Fonts (`Playfair Display` for headings, `Plus Jakarta Sans` for body text)

---

## 🚀 Running the Project Locally

To run the website on your local machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. **Test production build locally**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Project Structure

```
shakti-studio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS directives, accessibility rules, smooth scroll
│   │   ├── icon.svg             # SVG favicon & app icon
│   │   ├── layout.tsx           # Global layout with SEO metadata & schema markup
│   │   ├── page.tsx             # Homepage integrating all sections
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Header.tsx           # Sticky header with mobile drawer & quick WhatsApp CTA
│   │   ├── Hero.tsx             # Brand hero section with CTAs and visual showcase
│   │   ├── Services.tsx         # 5 handcrafted services with custom WhatsApp prefilled messages
│   │   ├── Occasions.tsx        # 10 celebration categories with tasteful iconography
│   │   ├── Gallery.tsx          # Responsive gallery with category filter tabs
│   │   ├── HowItWorks.tsx       # 5-step easy booking & enquiry process
│   │   ├── About.tsx            # Genuine profile for Shivangi Saxena with monogram emblem
│   │   ├── WhatsAppCommunity.tsx# Community invite ("Stay Close to Shakti Studio")
│   │   ├── Faq.tsx              # Interactive accordion FAQ
│   │   ├── Contact.tsx          # Direct contact info, phone display, address & community link
│   │   ├── FloatingWhatsApp.tsx # Floating persistent WhatsApp button with safe margins
│   │   ├── Footer.tsx           # Dynamic copyright, quick links & address
│   │   └── ui/
│   │       ├── IndianMotif.tsx   # Indian lotus, paisley, and gold divider accents
│   │       └── SectionHeading.tsx# Reusable section header component
│   └── data/
│       ├── constants.ts         # Central contact details, address & WhatsApp link generator
│       ├── services.ts          # Service data, descriptions, and prefilled messages
│       ├── occasions.ts         # Special occasion definitions
│       ├── gallery.ts           # Gallery showcase items
│       ├── steps.ts             # How it works process steps
│       └── faqs.ts              # Frequently asked questions & answers
├── next.config.mjs              # Next.js configuration (Unsplash remote patterns)
├── tailwind.config.ts           # Custom Indian boutique color palette
├── tsconfig.json                # TypeScript strict configuration
└── package.json                 # Dependencies and scripts
```

---

## 📸 Replacing Placeholder Images with Real Business Assets Later

1. **Option A: Store locally in `public/images/`**
   - Place your real images into `public/images/` (e.g., `public/images/saree-1.jpg`).
   - In `src/data/services.ts` or `src/data/gallery.ts`, replace the image URLs with `/images/saree-1.jpg`.

2. **Shivangi's Founder Photograph**:
   - In `src/components/About.tsx`, a designated placeholder structure is ready to swap the monogram emblem card with her real portrait photograph.
