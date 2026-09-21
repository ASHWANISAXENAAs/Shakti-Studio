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
  themeColor: "#5D0E1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Shakti Studio | Custom Sarees, Mehndi, Makeup & Handmade Art",
  description:
    "Handcrafted customized ghungroo sarees, mitti ki murti clay art, personalized sketch portraits, bridal & festive mehndi, and celebratory makeup styling by Shivangi Saxena in Gola Gokaran Nath, Uttar Pradesh.",
  keywords: [
    "Shakti Studio",
    "Customized Ghungroo Sarees",
    "Handmade Clay Art",
    "Mitti Ki Murti",
    "Custom Sketch Art",
    "Mehndi Booking",
    "Bridal Mehndi",
    "Festive Henna",
    "Bridal Makeup Services",
    "Party Makeup",
    "Shivangi Saxena",
    "Gola Gokaran Nath",
    "Kheri Uttar Pradesh",
  ],
  authors: [{ name: "Shivangi Saxena" }],
  creator: "Shivangi Saxena",
  publisher: "Shakti Studio",
  formatDetection: {
    telephone: true,
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
    title: "Shakti Studio | Custom Sarees, Mehndi, Makeup & Handmade Art",
    description:
      "Handcrafted customized sarees, clay art, portrait sketches, mehndi, and bridal beauty styled for your moments by Shivangi Saxena.",
    type: "website",
    locale: "en_IN",
    siteName: "Shakti Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Shakti Studio Handcrafted Indian Sarees and Artistry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakti Studio | Custom Sarees, Mehndi, Makeup & Handmade Art",
    description:
      "Handcrafted customized sarees, clay art, portrait sketches, mehndi, and bridal beauty styled for your moments.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description:
      "Handcrafted customized ghungroo sarees, mitti ki murti clay art, custom sketch portraits, bridal & festive mehndi, and celebratory makeup styling.",
    telephone: "+917275518725",
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
    slogan: SITE_CONFIG.tagline,
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
