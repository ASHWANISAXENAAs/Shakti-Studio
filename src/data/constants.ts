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
  // Personal studio of Shivangi Saxena. Not affiliated with any parlour —
  // do not add a parlour name, parlour address or parlour Maps listing here.
  defaultWhatsAppMessage:
    "Hi Shivangi, I am visiting your website and would like to enquire about services, availability and pricing.",
  location: {
    street: "Unchi Bhood",
    city: "Gola Gokaran Nath",
    district: "Kheri",
    state: "Uttar Pradesh",
    pincode: "262802",
    country: "India",
    formattedAddress: "Unchi Bhood, Gola Gokaran Nath, Kheri, Uttar Pradesh – 262802",
    shortLocation: "Gola Gokaran Nath, Uttar Pradesh",
  },
  siteUrl: "https://shakti-studio.vercel.app",
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
