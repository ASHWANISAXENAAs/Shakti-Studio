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
  categoryGroup: "beauty" | "saree" | "art";
}

export const SERVICES: ServiceItem[] = [
  // ─── 1. BEAUTY PARLOUR: FACIAL & SKIN CARE ───
  {
    id: "facial-skincare",
    title: "Facial & Skin Care Treatments",
    shortDescription:
      "Deep cleansing facials, Gold/Diamond glow therapy, D-Tan treatments, and refreshing clean-ups.",
    description:
      "Restore your natural radiance before festivals and weddings with customized skin rejuvenation. We tailor every facial to your skin type for a spotless, hydrated glow.",
    features: [
      "Customized skin diagnosis (Oily, Dry, Sensitive)",
      "Gold, Diamond, Fruit & Herbal Facial treatments",
      "Instant D-Tan, blackhead removal & steam therapy",
      "Face & neck glowing massage with premium herbal packs",
    ],
    inclusions: [
      "Gold / Diamond Facial",
      "Fruit & Herbal Glow Facial",
      "Instant D-Tan Treatment",
      "Deep Clean-up & Steam",
      "Anti-Acne & Tan Removal",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to book an appointment for Facial & Skin Care treatments at Shakti Studio.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to book an appointment for Facial & Skin Care treatments at Shakti Studio."
    ),
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Relaxing professional facial and skincare treatment in beauty parlour",
    tag: "Skin Rejuvenation",
    categoryGroup: "beauty",
  },

  // ─── 2. BEAUTY PARLOUR: HAIR STYLING & HAIR SPA ───
  {
    id: "hair-styling-spa",
    title: "Hair Styling, Hair Spa & Care",
    shortDescription:
      "Nourishing hair spa, bridal updos, stylish party curls, smoothing, and celebration hairstyles.",
    description:
      "Give your hair the royal treatment. From deep-conditioning hair spa to control frizz and dandruff, to gorgeous bridal floral buns and party curls designed for your attire.",
    features: [
      "Deep nourishing hair spa & scalp massage",
      "Bridal buns, floral braids & contemporary updos",
      "Party curls, crimping & blowout volume styling",
      "Hair wash, conditioning & split-end trimming",
    ],
    inclusions: [
      "Nourishing Hair Spa",
      "Bridal Floral Buns & Updos",
      "Soft Curls & Blowout",
      "Party Hair Styling",
      "Hair Trim & Deep Conditioning",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to book Hair Styling / Hair Spa services at Shakti Studio.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to book Hair Styling / Hair Spa services at Shakti Studio."
    ),
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Professional hair styling and hair spa treatment in salon",
    tag: "Hair Studio",
    categoryGroup: "beauty",
  },

  // ─── 3. BEAUTY PARLOUR: MANICURE, PEDICURE & NAIL CARE ───
  {
    id: "manicure-pedicure",
    title: "Manicure, Pedicure & Nail Care",
    shortDescription:
      "Relaxing hand & feet spa, cuticle care, dead skin exfoliation, and elegant nail polish application.",
    description:
      "Pamper your hands and feet before your wedding or festival. Our manicure and pedicure treatments soften tired feet, cleanse nails, and give a polished finish ready for mehndi.",
    features: [
      "Herbal soak, salt scrub & dead skin buffing",
      "Gentle cuticle care, nail shaping & filing",
      "Relaxing hand & foot massage with nourishing creams",
      "Long-lasting glossy nail lacquer application",
    ],
    inclusions: [
      "Classic & Deluxe Manicure",
      "Spa Pedicure with Heel Scrub",
      "Cuticle & Nail Shaping",
      "Hand & Foot Polishing",
      "Pre-Mehndi Hand Preparation",
    ],
    prefilledMessage:
      "Hi Shivangi, I want to book a Manicure & Pedicure session at Shakti Studio.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I want to book a Manicure & Pedicure session at Shakti Studio."
    ),
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Deluxe manicure and pedicure spa treatment for hands and feet",
    tag: "Hand & Feet Spa",
    categoryGroup: "beauty",
  },

  // ─── 4. BEAUTY PARLOUR: BRIDAL & OCCASION MAKEUP ───
  {
    id: "makeup-services",
    title: "Bridal, Engagement & Party Makeup",
    shortDescription:
      "Flawless HD bridal makeup, engagement glow, party glamour, and personalized dupatta & jewelry setting.",
    description:
      "Radiant, high-definition makeup styling customized to highlight your natural elegance. Tailored for bridal, sangeet, reception, and festive family events.",
    features: [
      "High-definition (HD) waterproof base & contouring",
      "Eye makeup matched to your saree or lehenga",
      "Dupatta draping, maang tikka & jewelry setting",
      "Long-lasting sweat-proof makeup for Indian weddings",
    ],
    inclusions: [
      "Full Bridal HD Makeup",
      "Engagement & Roka Makeup",
      "Sangeet & Cocktail Glamour",
      "Light Party Makeup",
      "Dupatta & Saree Draping",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about your Bridal / Party Makeup Services and packages.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about your Bridal / Party Makeup Services and packages."
    ),
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Traditional Indian bridal makeup styling with ornate adornments",
    tag: "Boutique Glamour",
    categoryGroup: "beauty",
  },

  // ─── 5. BEAUTY PARLOUR: THREADING, WAXING & D-TAN ───
  {
    id: "threading-waxing",
    title: "Threading, Waxing & Body Polishing",
    shortDescription:
      "Gentle eyebrow shaping, upper lip threading, full body waxing, and full body D-tan polishing.",
    description:
      "Essential pre-bridal and hygiene grooming performed with gentle care. Clean, pain-minimized eyebrow shaping and smooth waxing for flawless skin.",
    features: [
      "Sharp, face-flattering eyebrow arch shaping",
      "Upper lip, chin & full face threading",
      "Smooth arm & leg waxing with soothing lotion",
      "Full hands & feet D-Tan skin brighten pack",
    ],
    inclusions: [
      "Eyebrow Shaping & Threading",
      "Upper Lip & Chin Threading",
      "Full Arms & Legs Waxing",
      "Underarm & Body Waxing",
      "Face & Neck D-Tan Pack",
    ],
    prefilledMessage:
      "Hi Shivangi, I want to book Threading / Waxing / Grooming services at Shakti Studio.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I want to book Threading / Waxing / Grooming services at Shakti Studio."
    ),
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Clean beauty parlour grooming and threading session",
    tag: "Hygiene & Grooming",
    categoryGroup: "beauty",
  },

  // ─── 6. BEAUTY PARLOUR: BRIDAL & FESTIVE MEHNDI ───
  {
    id: "mehndi-booking",
    title: "Bridal & Festive Mehndi",
    shortDescription:
      "Intricate, dark-staining traditional and Arabic henna tailored for weddings, Karwa Chauth and festivals.",
    description:
      "Artistic bridal, festive, and traditional mehndi patterns applied with patience and care for your celebratory milestones.",
    features: [
      "100% natural, skin-safe dark stain henna cones",
      "Full hand intricate Indian bridal motifs with figures",
      "Arabic floral trails and shaded contemporary patterns",
      "Family & group mehndi bookings for festivals and sangeet",
    ],
    inclusions: [
      "Bridal Full Hand Mehndi",
      "Festive Karwa Chauth & Teej",
      "Arabic & Indo-Arabic Henna",
      "Engagement & Sangeet Mehndi",
      "Dark Stain Natural Henna Care",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about Mehndi Booking for an upcoming occasion. Please share availability and details.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about Mehndi Booking for an upcoming occasion. Please share availability and details."
    ),
    image:
      "/images/mehndi-bridal-1.jpg",
    imageAlt: "Intricate traditional Indian bridal mehndi henna on hands",
    tag: "Auspicious Henna",
    categoryGroup: "beauty",
  },

  // ─── 7. CUSTOMISED SAREES ───
  {
    id: "ghungroo-sarees",
    title: "Customized Ghungroo Sarees",
    shortDescription:
      "Signature hand-attached ghungroo border sarees, organza drapes, and designer bridal trousseau.",
    description:
      "Every saree is customized with delicate ghungroo border accents, personalized color harmonies, and handcrafted embellishments designed to suit your occasion.",
    features: [
      "Custom attached musical brass ghungroo border detailing",
      "Choice of premium organza, tissue, georgette or silk",
      "Personalized border finishes, latkans & matching blouse",
      "Styled for sangeet, weddings, festive dance & special moments",
    ],
    inclusions: [
      "Ghungroo Border Organza Sarees",
      "Festive Silk & Georgette Sarees",
      "Custom Border Detailing",
      "Designer Blouse Accessories & Latkans",
      "Custom Color Harmonization",
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
    categoryGroup: "saree",
  },

  // ─── 8. MITTI KI MURTI / CLAY ART ───
  {
    id: "clay-art",
    title: "Mitti Ki Murti & Handmade Clay Art",
    shortDescription:
      "Eco-friendly clay idols for Lakshmi Ganesh pooja, artisan sculptures, and celebratory decor.",
    description:
      "Sculpted clay figurines, festive idols, and artisanal decorative pieces shaped from pure natural clay and finished with traditional hand-painted touches.",
    features: [
      "100% natural, eco-friendly chemical-free clay",
      "Auspicious Lakshmi Ganesh & Durga pooja idols",
      "Fine facial detailing and hand-painted festive trims",
      "Custom decorative figurines for home & gifting",
    ],
    inclusions: [
      "Diwali Lakshmi Ganesh Idols",
      "Eco-Friendly Clay Sculptures",
      "Festive Handcrafted Diyas",
      "Artisan Clay Wall Decor",
      "Custom Spiritual Figurines",
    ],
    prefilledMessage:
      "Hi Shivangi, I would like to enquire about your Mitti Ki Murti / Handmade Clay Art creations. Please share details and availability.",
    whatsappUrl: getWhatsAppUrl(
      "Hi Shivangi, I would like to enquire about your Mitti Ki Murti / Handmade Clay Art creations. Please share details and availability."
    ),
    image:
      "https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Handmade traditional clay idol and murti sculpting work",
    tag: "Eco-Friendly Art",
    categoryGroup: "art",
  },

  // ─── 9. CUSTOM SKETCH ART ───
  {
    id: "sketch-art",
    title: "Custom Pencil Portrait Sketches",
    shortDescription:
      "Personalised sketches created from your photographs — memorable keepsakes for birthdays & anniversaries.",
    description:
      "Transform cherished family memories, portrait photos, or couple moments into hand-drawn graphite and pencil portrait sketches.",
    features: [
      "Hand-drawn directly from your phone reference photographs",
      "Individual portrait, couple & milestone family sketches",
      "Fine pencil shading capturing realistic facial likeness",
      "Ready-to-frame packaging for milestone gifting",
    ],
    inclusions: [
      "Single Portrait Pencil Sketch",
      "Couple & Wedding Anniversary Sketch",
      "Family Milestone Artwork",
      "A4 & A3 Custom Size Options",
      "Protective Delivery Packaging",
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
    categoryGroup: "art",
  },
];
