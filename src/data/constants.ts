export const SITE_CONFIG = {
  name: "Shakti Studio",
  shortName: "Shakti Studio",
  tagline: "Beauty • Bridal • Mehndi • Creative Studio",
  subtitle: "Your Beauty. Your Glow. Your Moment.",
  owner: "Shivangi Saxena",
  ownerRole: "Founder & Creative Artist",
  whatsappNumber: "917275518725",
  phone: "+91-7275518725",
  phoneDisplay: "+91 72755 18725",
  phoneHref: "tel:+917275518725",
  whatsappCommunityUrl: "https://chat.whatsapp.com/JSUAWsf8WRPCfYBqXxrPqh",
  mapsUrl: "https://maps.app.goo.gl/7VquUyLoLvP2YbmHA",
  // Beauty parlour that operates under the Shakti Studio hub.
  // Keep name/address EXACTLY identical to the Google Business Profile (NAP consistency).
  parlour: {
    name: "Nishamani Makeover & Beauty Parlour",
    shortName: "Nishamani Beauty Parlour",
    mapsUrl: "https://maps.app.goo.gl/7VquUyLoLvP2YbmHA",
    latitude: 28.0738845,
    longitude: 80.4789168,
  },
  defaultWhatsAppMessage:
    "Hi Shivangi, I am visiting your website and would like to enquire about services, availability and pricing.",
  location: {
    street: "Cinema Road",
    city: "Gola Gokaran Nath",
    district: "Kheri",
    state: "Uttar Pradesh",
    pincode: "262802",
    country: "India",
    formattedAddress: "Cinema Road, Gola Gokaran Nath, Gola, Kheri, Uttar Pradesh – 262802",
    shortLocation: "Gola Gokaran Nath, Uttar Pradesh",
  },
  siteUrl: "https://shakti-studio.vercel.app",
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
