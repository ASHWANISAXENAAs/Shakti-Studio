import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5D0E1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shakti Studio | Beauty Parlour, Customised Sarees, Mitti Ki Murti & Sketches | Gola Gokaran Nath",
  description:
    "Shakti Studio by Shivangi Saxena in Gola Gokaran Nath, UP — Specializing in Beauty Parlour & Bridal Makeup, Customised Ghungroo Sarees, Mitti Ki Murti Clay Art, Handmade Sketches & Bridal Mehndi. Connect directly on WhatsApp.",
  keywords: [
    "Shakti Studio",
    "Beauty parlour in Gola Gokaran Nath",
    "Bridal makeup artist Kheri UP",
    "Customised Ghungroo Sarees",
    "Ghungroo border saree",
    "Mitti Ki Murti Gola Gokaran Nath",
    "Handmade Clay Art",
    "Custom Sketch Art",
    "Pencil portrait sketch artist",
    "Bridal Mehndi Booking",
    "Karwa Chauth and Teej Mehndi",
    "Party Makeup Gola Gokaran Nath",
    "Shivangi Saxena",
    "Gola Gokaran Nath Kheri",
    "Lakhimpur Kheri Uttar Pradesh",
  ],
  authors: [{ name: "Shivangi Saxena" }],
  creator: "Shivangi Saxena",
  publisher: "Shakti Studio",
  formatDetection: {
    telephone: false,
    email: false,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shakti Studio | Beauty Parlour, Customised Sarees & Handmade Art",
    description:
      "Bridal makeup & beauty parlour, customized ghungroo sarees, mitti ki murti clay art, portrait sketches, and festive mehndi in Gola Gokaran Nath, Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "Shakti Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Shakti Studio Handcrafted Sarees, Beauty Parlour & Artistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakti Studio | Beauty Parlour, Customised Sarees & Art",
    description:
      "Handcrafted customized sarees, bridal beauty styling, clay art, portrait sketches, and mehndi in Gola Gokaran Nath, UP.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Schema.org LocalBusiness + BeautySalon + Service List Schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": "https://shaktistudio.in/#business",
        name: SITE_CONFIG.name,
        description:
          "Boutique beauty parlour, bridal makeup, handcrafted customized ghungroo sarees, eco-friendly mitti ki murti clay art, custom pencil portrait sketches, and bridal mehndi by Shivangi Saxena in Gola Gokaran Nath, UP.",
        founder: {
          "@type": "Person",
          name: SITE_CONFIG.owner,
          jobTitle: SITE_CONFIG.ownerRole,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.location.street,
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.state,
          postalCode: SITE_CONFIG.location.pincode,
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "City", name: "Gola Gokaran Nath" },
          { "@type": "AdministrativeArea", name: "Kheri" },
          { "@type": "State", name: "Uttar Pradesh" },
          { "@type": "Country", name: "India" },
        ],
        slogan: SITE_CONFIG.tagline,
        sameAs: [
          SITE_CONFIG.whatsappCommunityUrl,
        ],
      },
      {
        "@type": "Service",
        serviceType: "Beauty Parlour & Bridal Makeup",
        provider: { "@id": "https://shaktistudio.in/#business" },
        areaServed: "Gola Gokaran Nath, Uttar Pradesh",
        description: "HD bridal makeup, party makeup, engagement styling, and traditional dark-stain mehndi.",
      },
      {
        "@type": "Service",
        serviceType: "Customised Ghungroo Sarees",
        provider: { "@id": "https://shaktistudio.in/#business" },
        areaServed: "India",
        description: "Handcrafted customized ghungroo border sarees, organza drapes, and designer bridal attire.",
      },
      {
        "@type": "Service",
        serviceType: "Mitti Ki Murti & Handmade Art",
        provider: { "@id": "https://shaktistudio.in/#business" },
        areaServed: "India",
        description: "Hand-sculpted eco-friendly mitti ki murti idols and personalized pencil portrait sketches from photographs.",
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-cream-50 text-charcoal-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
