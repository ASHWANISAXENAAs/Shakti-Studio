import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SITE_CONFIG } from "@/data/constants";

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
  themeColor: "#4A0E17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: "Beauty Parlour in Gola Gokaran Nath | Shivangi Shakti Studio",
    template: "%s | Shivangi Shakti Studio",
  },
  description:
    "Shivangi Shakti Studio in Gola Gokaran Nath, UP — Professional beauty parlour, bridal makeup, festive mehndi, facial, hair styling, customized ghungroo sarees, and handcrafted art.",
  keywords: [
    "Shivangi Shakti Studio",
    "Shakti Studio",
    "Beauty Parlour in Gola Gokaran Nath",
    "Beauty Services in Gola Gokaran Nath",
    "Bridal Makeup in Gola Gokaran Nath",
    "Mehndi in Gola Gokaran Nath",
    "Bridal Henna Gola Gokaran Nath",
    "Facial in Gola Gokaran Nath",
    "Hair Spa Gola Gokaran Nath",
    "Customized Sarees in Gola Gokaran Nath",
    "Mitti Ki Murti Gola Gokaran Nath",
    "Custom Portrait Sketch Artist UP",
    "Lakhimpur Kheri Beauty Parlour",
  ],
  authors: [{ name: "Shivangi Saxena" }],
  creator: "Shivangi Saxena",
  publisher: "Shivangi Shakti Studio",
  formatDetection: {
    telephone: false,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
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
    title: "Shivangi Shakti Studio | Beauty, Bridal, Mehndi & Creative Studio",
    description:
      "Professional beauty parlour, bridal makeup, intricate mehndi, and bespoke creative crafts in Gola Gokaran Nath, Uttar Pradesh.",
    url: SITE_CONFIG.siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Shivangi Shakti Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Shivangi Shakti Studio Beauty, Bridal and Artistry in Gola Gokaran Nath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivangi Shakti Studio | Beauty Parlour in Gola Gokaran Nath",
    description:
      "Beauty parlour, bridal makeup, mehndi, customized sarees, and handcrafted art in Gola Gokaran Nath.",
    images: [
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pure, authentic Schema.org LocalBusiness & BeautySalon markup (no phone numbers, no fake ratings)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": `${SITE_CONFIG.siteUrl}/#business`,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        url: SITE_CONFIG.siteUrl,
        description:
          "Professional beauty parlour, bridal makeup, hair styling, facials, waxing, threading, bridal mehndi, customized sarees, and handmade creative crafts in Gola Gokaran Nath, Uttar Pradesh.",
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
          {
            "@type": "City",
            name: SITE_CONFIG.location.city,
          },
          {
            "@type": "AdministrativeArea",
            name: "Kheri",
          },
          {
            "@type": "AdministrativeArea",
            name: SITE_CONFIG.location.state,
          },
        ],
        hasMap: SITE_CONFIG.mapsUrl,
        sameAs: [SITE_CONFIG.whatsappCommunityUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.siteUrl}/#website`,
        url: SITE_CONFIG.siteUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.tagline,
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
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF6F0] text-[#1F191A] antialiased selection:bg-[#E8D5CE] selection:text-[#4A0E17]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
