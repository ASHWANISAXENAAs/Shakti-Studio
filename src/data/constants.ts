export const SITE_CONFIG = {
  name: "Shakti Studio",
  tagline: "Handcrafted with Love • Styled for Your Moments",
  owner: "Shivangi Saxena",
  ownerRole: "Founder & Creative Artist, Shakti Studio",
  phoneDisplay: "+91 72755 18725",
  whatsappNumber: "917275518725",
  whatsappCommunityUrl: "https://chat.whatsapp.com/JSUAWsf8WRPCfYBqXxrPqh",
  defaultWhatsAppMessage:
    "Hi Shivangi, I found Shakti Studio online and would like to know more about your services.",
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
};

export function getWhatsAppUrl(message?: string): string {
  const text = message || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
