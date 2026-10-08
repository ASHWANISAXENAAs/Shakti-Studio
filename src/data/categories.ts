import { getWhatsAppUrl } from "./constants";

export interface VarietyItem {
  name: string;
  hindiName?: string;
  tagline: string;
  description: string;
  popularFor: string;
  highlights: string[];
  timeline: string;
  whatsappMessage: string;
}

export interface StudioCategory {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  badge: string;
  iconName: "Sparkles" | "Palette" | "Heart" | "Scissors" | "Smile";
  seoKeywords: string[];
  shortDesc: string;
  detailedDesc: string;
  image: string;
  varieties: VarietyItem[];
}

export const STUDIO_PILLARS: StudioCategory[] = [
  {
    id: "beauty-parlour",
    slug: "beauty-parlour-makeup-mehndi",
    title: "Beauty Parlour, Makeup & Mehndi Studio",
    hindiTitle: "ब्यूटी पार्लर, ब्राइडल मेकअप, फेशियल व हेयर केयर",
    badge: "Beauty Parlour Hub",
    iconName: "Smile",
    seoKeywords: [
      "Beauty parlour in Gola Gokaran Nath",
      "Facial and clean up in Gola Gokaran Nath",
      "Hair spa and styling salon Gola",
      "Manicure and pedicure parlour Kheri",
      "Bridal makeup artist Kheri UP",
      "Threading and waxing beauty parlour",
      "Best mehndi artist Gola Gokaran Nath",
    ],
    shortDesc:
      "Complete salon & parlour care: Facials, Hair Spa, Manicure & Pedicure, Threading, Waxing, HD Bridal Makeup, and Dark-Stain Mehndi.",
    detailedDesc:
      "A complete beauty parlour sanctuary for women in Gola Gokaran Nath. From soothing facials, skin clean-ups, and hair spa nourishment to royal bridal HD makeup and dark-stain henna, we make you look and feel your absolute best.",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80",
    varieties: [
      {
        name: "Facials, Clean-ups & D-Tan Treatments",
        hindiName: "फेशियल, डी-टैन व स्किन क्लीनअप",
        tagline: "Instant bridal glow, dead skin removal, and herbal hydration",
        description:
          "Targeted facial treatments according to your skin type: Gold Glow, Diamond Polish, Fruit & Herbal Facials, Instant D-Tan, and deep pore cleansing with steam and blackhead removal.",
        popularFor: "Weddings, Festivals, Pre-Bridal Care, Regular Monthly Glow",
        highlights: [
          "Gold / Diamond / Herbal Facial options",
          "Effective D-Tan & sun damage repair",
          "Relaxing face & neck lymphatic massage",
          "Steam, blackhead removal & cooling packs",
        ],
        timeline: "45 – 75 minute session",
        whatsappMessage:
          "Hi Shivangi, I want to book an appointment for Facial / Clean-up / D-Tan treatment at your beauty parlour.",
      },
      {
        name: "Hair Spa, Hair Styling & Care",
        hindiName: "हेयर स्पा, हेयर स्टाइलिंग व हेयर कट",
        tagline: "Deep nourishment for silky hair, floral buns, and party curls",
        description:
          "Intensive conditioning hair spa to repair dry, frizzy, or chemically treated hair, split-end trimming, and designer party hairstyles including floral bridal buns, soft curls, and blowouts.",
        popularFor: "Bridal Hairstyle, Sangeet Curls, Dry Hair Repair, Split-Ends",
        highlights: [
          "Deep conditioning hair spa cream bath",
          "Bridal floral buns & trending braids",
          "Soft curls, crimping & volume blow dry",
          "Gentle hair trimming & conditioning",
        ],
        timeline: "Same-day appointments available",
        whatsappMessage:
          "Hi Shivangi, I would like to book Hair Spa / Hair Styling services at your parlour.",
      },
      {
        name: "Manicure, Pedicure & Nail Care",
        hindiName: "मेनीक्योर, पेडीक्योर व नेल केयर",
        tagline: "Soothing hand & foot spa, dead skin buffing, and glossy nails",
        description:
          "Pamper your tired hands and feet with herbal soak, dead heel exfoliation, cuticle trimming, nail shaping, and long-lasting glossy nail polish. Essential prep before bridal mehndi!",
        popularFor: "Pre-Bridal Grooming, Mehndi Preparation, Cracked Heel Relief",
        highlights: [
          "Aromatherapy foot soak & salt scrub",
          "Dead skin & heel buffing",
          "Cuticle care, nail shaping & shine buff",
          "Hand & foot moisturizing massage",
        ],
        timeline: "45 – 60 minute session",
        whatsappMessage:
          "Hi Shivangi, I want to book Manicure & Pedicure services at your parlour.",
      },
      {
        name: "Bridal HD Makeup & Styling",
        hindiName: "ब्राइडल एचडी मेकअप व हेयर स्टाइलिंग",
        tagline: "Royal, long-lasting glow tailored for your wedding day",
        description:
          "Complete bridal transformation including skin preparation, HD foundation, contouring, jewelry setting, dupatta draping, and customized hairstyle.",
        popularFor: "Wedding Day, Reception, Varmala",
        highlights: [
          "High-definition sweat-proof finish",
          "Dupatta, jewelry & bindi setting included",
          "Personalized pre-consultation",
        ],
        timeline: "Prior booking mandatory",
        whatsappMessage:
          "Hi Shivangi, I would like to enquire about Bridal HD Makeup & Styling availability and packages.",
      },
      {
        name: "Party & Engagement Makeup",
        hindiName: "पार्टी व सगाई मेकअप लुक",
        tagline: "Subtle elegance and festive glamour for family celebrations",
        description:
          "Chic, balanced occasion makeup crafted to complement your outfit for sangeet, cocktail, ring ceremony, or festival parties.",
        popularFor: "Engagement, Sangeet, Anniversaries, Cocktails",
        highlights: [
          "Lightweight & breathable base",
          "Eye makeup matched to attire",
          "Quick & comfortable session",
        ],
        timeline: "Advance booking recommended",
        whatsappMessage:
          "Hi Shivangi, I am looking for Party/Engagement Makeup styling for an upcoming event.",
      },
      {
        name: "Threading, Waxing & Grooming",
        hindiName: "थ्रेडिंग, वैक्सिंग व बॉडी पॉलिशिंग",
        tagline: "Flawless eyebrow shaping and gentle, smooth waxing",
        description:
          "Essential hygiene and grooming with gentle hands. Sharp eyebrow shaping, upper lip threading, full arms/legs smooth waxing, and soothing after-wax cooling lotion.",
        popularFor: "Monthly Grooming, Pre-Event Readiness",
        highlights: [
          "Pain-minimized eyebrow shaping",
          "Smooth waxing for arms & legs",
          "Upper lip, chin & forehead threading",
          "Soothing skin lotion post-treatment",
        ],
        timeline: "Walk-in & slot booking",
        whatsappMessage:
          "Hi Shivangi, I want to book Threading / Waxing grooming at your parlour.",
      },
      {
        name: "Traditional Full-Hand Bridal Mehndi",
        hindiName: "पारंपरिक ब्राइडल मेहंदी (फुल हैंड)",
        tagline: "Intricate storytelling motifs and guaranteed rich dark stain",
        description:
          "Deeply detailed bridal henna extending to elbows and feet featuring traditional Indian shehnai, doli, lotus blossoms, and personalized couple initials.",
        popularFor: "Weddings, Sangeet Night, Shagun Mehndi",
        highlights: [
          "100% natural organic henna cones",
          "Custom couple figure designs",
          "Dark-stain aftercare guidance",
        ],
        timeline: "Reserve 1–2 weeks in advance",
        whatsappMessage:
          "Hi Shivangi, I want to book Bridal Mehndi for my wedding date. Please share your availability.",
      },
      {
        name: "Festive & Arabic Henna Styling",
        hindiName: "फेस्टिव व अरेबिक मेहंदी",
        tagline: "Modern floral and bold trail patterns for auspicious occasions",
        description:
          "Stunning floral trails, shaded jaal, and contemporary Arabic patterns designed for quick application and eye-catching elegance.",
        popularFor: "Karwa Chauth, Teej, Raksha Bandhan, Diwali, Family Functions",
        highlights: [
          "Bold artistic shading",
          "Quick drying & dark hue",
          "Suitable for family groups",
        ],
        timeline: "Festive slot reservations",
        whatsappMessage:
          "Hi Shivangi, I would like to book a slot for Festive / Arabic Mehndi.",
      },
    ],
  },
  {
    id: "customise-saree",
    slug: "customised-sarees-designer-attire",
    title: "Customised Sarees & Designer Outfits",
    hindiTitle: "कस्टमाइज्ड साड़ियां व डिजाइनर परिधान",
    badge: "Signature Craft",
    iconName: "Scissors",
    seoKeywords: [
      "Customised ghungroo saree UP",
      "Handcrafted designer saree Gola Gokaran Nath",
      "Custom organza saree online",
      "Bespoke festive sarees Uttar Pradesh",
      "Ghungroo border saree maker",
    ],
    shortDesc:
      "Iconic ghungroo border sarees, customized organza drapes, and personalized festive attire handcrafted to your exact color, fabric, and styling choices.",
    detailedDesc:
      "Every saree is uniquely embellished by hand. We integrate melodic ghungroo borders, custom trims, and matching designer blouses so your celebration drape is strictly one-of-a-kind.",
    image: "/images/shakti-ghungroo-saree-detail.webp",
    varieties: [
      {
        name: "Handcrafted Ghungroo Border Sarees",
        hindiName: "घुंघरू बॉर्डर साड़ियां (सिग्नेचर क्रिएशन)",
        tagline: "Delicate chime, regal aesthetic, and hand-stitched detailing",
        description:
          "Our iconic signature saree featuring intricately attached golden brass ghungroos along the border and pallu, turning every step into celebration music.",
        popularFor: "Sangeet, Dance Performances, Karwa Chauth, Festive Receptions",
        highlights: [
          "Authentic hand-attached ghungroo trim",
          "Premium organza, silk or georgette",
          "Custom color harmonies",
        ],
        timeline: "7 – 14 business days",
        whatsappMessage:
          "Hi Shivangi, I am interested in ordering a Custom Handcrafted Ghungroo Border Saree.",
      },
      {
        name: "Organza & Tissue Luxury Sarees",
        hindiName: "ऑर्गेंजा व टिश्यू लक्जरी ड्रेप्स",
        tagline: "Featherlight modern royalty with bespoke border finishes",
        description:
          "Airy, sheer organza and lustrous tissue drapes customized with pearl, zardozi, or golden laces tailored to your preferred drape silhouette.",
        popularFor: "Daytime Weddings, Ring Ceremonies, Chic Parties",
        highlights: [
          "Lightweight, graceful drape",
          "Custom pastel or jewel color dye",
          "Matching border accessories",
        ],
        timeline: "7 – 10 business days",
        whatsappMessage:
          "Hi Shivangi, I would like to discuss a custom Organza/Tissue Saree design with you.",
      },
      {
        name: "Festive Silk & Georgette Customized Drapes",
        hindiName: "फेस्टिव सिल्क व जॉर्जेट कस्टमाइज्ड साड़ियां",
        tagline: "Timeless traditional heritage tailored for family milestones",
        description:
          "Rich textures enhanced with personalized border work, customized pallu embellishments, and color combinations curated to match your family function theme.",
        popularFor: "Diwali, Pooja Ceremonies, Family Weddings, Anniversaries",
        highlights: [
          "Rich, long-lasting fabrics",
          "Heavy festive border options",
          "Custom color coordination",
        ],
        timeline: "7 – 12 business days",
        whatsappMessage:
          "Hi Shivangi, I am looking for a Festive Silk/Georgette Saree tailored for an upcoming family occasion.",
      },
      {
        name: "Designer Blouses & Custom Latkans",
        hindiName: "डिजाइनर ब्लाउज व हैंडमेड लटकन",
        tagline: "Handcrafted accessories that complete your bespoke outfit",
        description:
          "Custom matching blouse border trims, personalized fabric hangings, potlis, and handcrafted latkans designed to complement your saree perfectly.",
        popularFor: "Bridal Trousseau, Coordinated Event Looks",
        highlights: [
          "Handmade fabric latkans",
          "Coordinated back dori styling",
          "Theme-matched aesthetics",
        ],
        timeline: "Crafted alongside your saree",
        whatsappMessage:
          "Hi Shivangi, I would like matching designer blouse detailing and latkans for my saree.",
      },
    ],
  },
  {
    id: "art-and-craft",
    slug: "handmade-art-craft-murti-sketches",
    title: "Handmade Art, Craft & Mitti Ki Murti",
    hindiTitle: "हस्तनिर्मित आर्ट, मिट्टी की मूर्तियां व स्केच",
    badge: "Artisan Heritage",
    iconName: "Palette",
    seoKeywords: [
      "Mitti ki murti Gola Gokaran Nath",
      "Handmade clay art Kheri UP",
      "Custom pencil portrait sketch Uttar Pradesh",
      "Eco friendly clay idols Lakshmi Ganesh",
      "Handmade anniversary gift sketch",
    ],
    shortDesc:
      "Eco-friendly clay idols (Mitti Ki Murti), expressive hand-drawn portrait sketches from your photos, and custom handcrafted celebratory gifts.",
    detailedDesc:
      "Handmade with meditative patience and devotion. We shape pure clay into sacred idols and decorative sculptures, and transform your favorite photographs into lifelike graphite sketches.",
    image:
      "https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=1000&q=80",
    varieties: [
      {
        name: "Mitti Ki Murti (Eco-Friendly Clay Idols)",
        hindiName: "मिट्टी की मूर्तियां (इको-फ्रेंडली शुद्ध मिट्टी)",
        tagline: "Sacred, traditionally sculpted idols for festive rituals",
        description:
          "Sculpted with pure, natural clay for auspicious poojas including Lakshmi-Ganesh for Diwali, Durga, and decorative spiritual art. Dissolves naturally with 100% devotion.",
        popularFor: "Diwali Pooja, Ganesh Utsav, Navratri, Temple Altar Decor",
        highlights: [
          "100% natural chemical-free clay",
          "Fine artistic facial expressions",
          "Traditional artisanal coloring",
        ],
        timeline: "5 – 10 business days (seasonal advance orders)",
        whatsappMessage:
          "Hi Shivangi, I would like to order handcrafted Mitti Ki Murti idols for upcoming pooja/festivals.",
      },
      {
        name: "Personalized Pencil Portrait Sketches",
        hindiName: "हाथ से बने पेंसिल पोर्ट्रेट स्केच (फोटो से)",
        tagline: "Turn your beloved photograph into an artistic pencil keepsake",
        description:
          "Exquisite graphite and charcoal portraits hand-drawn by Shivangi from your reference photo, capturing expression, eyes, and deep emotion with lifelike realism.",
        popularFor: "Birthday Surprises, Anniversaries, Parents' Tribute, Weddings",
        highlights: [
          "Drawn from your phone photo",
          "Available in A4 & A3 sizes",
          "Protective packaging ready for framing",
        ],
        timeline: "3 – 7 business days",
        whatsappMessage:
          "Hi Shivangi, I have a photo that I would like drawn into a Custom Pencil Portrait Sketch.",
      },
      {
        name: "Framed Couple & Milestone Artworks",
        hindiName: "कपल व फैमिली कस्टमाइज्ड पोर्ट्रेट",
        tagline: "Timeless handcrafted memory to adorn your home walls",
        description:
          "Special multi-subject sketches and couple portraits crafted with detailed shading and personal dates/names lettered with artisanal precision.",
        popularFor: "Wedding Gifts, 25th/50th Anniversaries, Housewarming",
        highlights: [
          "Couple & family composition",
          "Personalized lettering possible",
          "Unique keepsake that lasts forever",
        ],
        timeline: "5 – 8 business days",
        whatsappMessage:
          "Hi Shivangi, I want to order a Framed Couple / Family Sketch Portrait.",
      },
      {
        name: "Artisan Clay Decor & Handmade Gifts",
        hindiName: "हैंडमेड क्ले डेकोर व क्राफ्ट उपहार",
        tagline: "Artistic handmade figurines, diyas, and celebratory gifts",
        description:
          "Hand-shaped terracotta home accents, decorative diyas, and personalized festive gift pieces that convey authentic handmade warmth.",
        popularFor: "Festive Gifting, Return Gifts, Home Decor",
        highlights: [
          "Small-batch handmade charm",
          "Customizable colors & themes",
          "Direct artisan creation",
        ],
        timeline: "4 – 7 business days",
        whatsappMessage:
          "Hi Shivangi, I would like to enquire about Artisan Clay Decor and Handmade Gifts.",
      },
    ],
  },
];
