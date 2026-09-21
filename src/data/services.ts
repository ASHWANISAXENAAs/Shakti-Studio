import { getWhatsAppUrl } from "./constants";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  features?: string[];
  inclusions?: string[];
  prefilledMessage: string;
  whatsappUrl: string;
  image: string;
  imageAlt: string;
  tag?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ghungroo-sarees",
    title: "Customized Ghungroo Sarees",
    shortDescription:
      "Personalised sarees decorated with elegant ghungroo details and custom touches for celebrations and special occasions.",
    description:
      "Every saree is customized with delicate ghungroo border accents, personalized color harmonies, and handcrafted embellishments designed to suit your occasion.",
    features: [
      "Custom attached ghungroo border detailing",
      "Personalized border finishes & embellishments",
      "Drape styles and color palette tailored to you",
      "Styled for sangeet, weddings, festive dance & special moments",
    ],
    prefilledMessage:
      "Hi Shivangi, I am interested in a Customized Ghungroo Saree. Please share more details.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I am interested in a Customized Ghungroo Saree. Please share more details."
    ),
    image:
      "/images/shakti-ghungroo-saree-detail.webp",
    imageAlt: "Close-up of maroon embroidered saree border with decorative ghungroo detailing",
    tag: "Signature Craft",
  },
  {
    id: "clay-art",
    title: "Mitti Ki Murti / Handmade Clay Art",
    shortDescription:
      "Handcrafted clay creations made with care for gifting, decoration and special occasions.",
    description:
      "Sculpted clay figurines, festive idols, and artisanal decorative pieces shaped from clay and finished with traditional hand-painted touches.",
    features: [
      "Handcrafted clay creations & festive idols",
      "Traditional sculpting with artisanal finishes",
      "Custom decorative pieces for gifting & celebrations",
      "Customised to your requirement and occasion",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about your Mitti Ki Murti / Handmade Clay Art creations. Please share details and availability.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about your Mitti Ki Murti / Handmade Clay Art creations. Please share details and availability."
    ),
    image:
      "https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Handmade traditional clay idol and murti sculpting work",
    tag: "Handmade Art",
  },
  {
    id: "sketch-art",
    title: "Custom Sketch Art",
    shortDescription:
      "Personalised sketches created from your photographs — suitable for memorable gifts and special moments.",
    description:
      "Transform cherished family memories, portrait photos, or couple moments into hand-drawn graphite and pencil portrait sketches.",
    features: [
      "Drawn from your reference photographs",
      "Individual portrait, couple & milestone sketches",
      "Detailed pencil work focusing on expressive likeness",
      "Personalized gifts for birthdays, anniversaries & celebrations",
    ],
    prefilledMessage:
      "Hi Shivangi, I am interested in ordering a Custom Sketch Art from a photograph. Please let me know how to proceed.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I am interested in ordering a Custom Sketch Art from a photograph. Please let me know how to proceed."
    ),
    image:
      "https://images.unsplash.com/photo-1593472807861-5bb884af28f6?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Handmade pencil portrait sketch artwork on white paper",
    tag: "Personalised Keepsake",
  },
  {
    id: "mehndi-booking",
    title: "Mehndi Booking",
    shortDescription:
      "Intricate, dark-staining henna designs tailored for your auspicious occasions and celebrations.",
    description:
      "Artistic bridal, festive, and traditional mehndi patterns applied with patience and care for your celebratory milestones.",
    inclusions: [
      "Bridal Mehndi",
      "Festival Mehndi",
      "Engagement",
      "Karwa Chauth",
      "Teej",
      "Family Functions",
      "Other Special Occasions",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about Mehndi Booking for an upcoming occasion. Please share availability and details.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about Mehndi Booking for an upcoming occasion. Please share availability and details."
    ),
    image:
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Intricate traditional Indian bridal mehndi henna on hands",
    tag: "Auspicious Art",
  },
  {
    id: "makeup-services",
    title: "Makeup Services",
    shortDescription:
      "Subtle, radiant, and elegant makeup styling tailored to enhance your natural beauty.",
    description:
      "Graceful, occasion-ready makeup looks tailored to make you feel confident and celebratory for your special days.",
    inclusions: [
      "Simple Makeup",
      "Party Makeup",
      "Engagement Makeup",
      "Bridal Makeup",
      "Special Occasion Makeup",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about your Makeup Services. Please let me know your availability and details.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about your Makeup Services. Please let me know your availability and details."
    ),
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Traditional Indian bridal makeup styling with ornate adornments",
    tag: "Boutique Beauty",
  },
];
