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
    default:
      "Nishamani Makeover & Beauty Parlour | Beauty Parlour in Gola Gokaran Nath, Kheri UP",
    template: "%s | Shakti Studio",
  },
  description:
    "Nishamani Makeover & Beauty Parlour, Cinema Road, Gola Gokaran Nath, Lakhimpur Kheri (UP) — bridal & HD makeup, facial, hair spa, waxing, threading, manicure, pedicure & bridal mehndi. A Shakti Studio venture.",
  keywords: [
    "Nishamani Makeover & Beauty Parlour",
    "Nishamani Beauty Parlour",
    "Nishamani Makeover Gola",
    "Beauty Parlour in Gola Gokaran Nath",
    "Best Beauty Parlour in Gola Gokaran Nath",
    "Beauty Parlour near me Gola",
    "Beauty Parlour Cinema Road Gola",
    "Ladies Beauty Parlour Gola Gokaran Nath",
    "Beauty Parlour in Gola Kheri",
    "Beauty Parlour in Lakhimpur Kheri",
    "Bridal Makeup in Gola Gokaran Nath",
    "Bridal Makeup Artist Lakhimpur Kheri",
    "HD Makeup Gola Gokaran Nath",
    "Party Makeup Gola Gokaran Nath",
    "Facial in Gola Gokaran Nath",
    "Hair Spa in Gola Gokaran Nath",
    "Waxing and Threading Gola Gokaran Nath",
    "Manicure Pedicure Gola Gokaran Nath",
    "Bridal Mehndi in Gola Gokaran Nath",
    "Mehndi Artist Gola Kheri",
    "Makeup Artist Gola Gokaran Nath",
    "Beauty Salon Gola Gokaran Nath Uttar Pradesh",
    "Shakti Studio",
    "Shakti Studio Gola",
    "Customized Sarees in Gola Gokaran Nath",
    "Mitti Ki Murti Gola Gokaran Nath",
  ],
  verification: {
    google: "6pT-4mn-Wb62hzIq3933iVokNnuk5mBVpOUUKtdXonk",
  },
  authors: [{ name: "Shivangi Saxena" }],
  creator: "Shivangi Saxena",
  publisher: "Shakti Studio",
  formatDetection: {
    telephone: true,
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
    title: "Nishamani Makeover & Beauty Parlour | Gola Gokaran Nath, Kheri",
    description:
      "Professional beauty parlour, bridal makeup, intricate mehndi, and bespoke creative crafts in Gola Gokaran Nath, Uttar Pradesh.",
    url: SITE_CONFIG.siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Shakti Studio",
    images: [
      {
        url: "/images/shakti-ghungroo-saree-hero.webp",
        width: 1200,
        height: 630,
        alt: "Shakti Studio Beauty, Bridal and Artistry in Gola Gokaran Nath",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishamani Makeover & Beauty Parlour | Gola Gokaran Nath, Kheri",
    description:
      "Beauty parlour, bridal makeup, mehndi, customized sarees, and handcrafted art in Gola Gokaran Nath.",
    images: [
      "/images/shakti-ghungroo-saree-hero.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pure, authentic Schema.org LocalBusiness & BeautySalon markup (no fake ratings)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": `${SITE_CONFIG.siteUrl}/#business`,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        url: SITE_CONFIG.siteUrl,
        telephone: SITE_CONFIG.phone,
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
        subOrganization: { "@id": `${SITE_CONFIG.siteUrl}/#parlour` },
      },
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": `${SITE_CONFIG.siteUrl}/#parlour`,
        name: SITE_CONFIG.parlour.name,
        alternateName: SITE_CONFIG.parlour.shortName,
        telephone: SITE_CONFIG.phone,
        url: `${SITE_CONFIG.siteUrl}/beauty-services`,
        image: `${SITE_CONFIG.siteUrl}/images/shakti-ghungroo-saree-hero.webp`,
        description:
          "Beauty parlour and makeover studio in Gola Gokaran Nath: facials, hair spa, bridal and HD makeup, manicure, pedicure, waxing and threading.",
        parentOrganization: { "@id": `${SITE_CONFIG.siteUrl}/#business` },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.location.street,
          addressLocality: SITE_CONFIG.location.city,
          addressRegion: SITE_CONFIG.location.state,
          postalCode: SITE_CONFIG.location.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.parlour.latitude,
          longitude: SITE_CONFIG.parlour.longitude,
        },
        hasMap: SITE_CONFIG.parlour.mapsUrl,
        sameAs: [SITE_CONFIG.parlour.mapsUrl],
        areaServed: [
          { "@type": "City", name: "Gola Gokaran Nath" },
          { "@type": "AdministrativeArea", name: "Lakhimpur Kheri" },
        ],
        priceRange: "₹₹",
        knowsAbout: [
          "Bridal Makeup",
          "HD Makeup",
          "Party Makeup",
          "Facial",
          "Hair Spa",
          "Waxing",
          "Threading",
          "Manicure",
          "Pedicure",
          "Bridal Mehndi",
        ],
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
    <html lang="en-IN" className={`${playfair.variable} ${plusJakarta.variable}`}>
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
