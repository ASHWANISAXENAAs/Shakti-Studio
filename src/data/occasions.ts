export interface OccasionItem {
  name: string;
  subtitle: string;
  iconName: string;
  badge?: string;
}

export const SPECIAL_OCCASIONS: OccasionItem[] = [
  {
    name: "Wedding",
    subtitle: "Bridal mehndi, occasion makeup & customized ghungroo sarees",
    iconName: "Sparkles",
    badge: "Bridal Special",
  },
  {
    name: "Engagement",
    subtitle: "Engagement makeup looks, intimate henna art & custom sketch gifts",
    iconName: "HeartHandshake",
  },
  {
    name: "Karwa Chauth",
    subtitle: "Traditional ceremonial mehndi designs & celebratory saree styling",
    iconName: "Moon",
    badge: "Festive Favorite",
  },
  {
    name: "Teej",
    subtitle: "Detailed festive palm mehndi & customized ghungroo saree touches",
    iconName: "Sun",
  },
  {
    name: "Festivals",
    subtitle: "Festive clay murtis, clay decor art & festive occasion makeup",
    iconName: "Flame",
  },
  {
    name: "Family Functions",
    subtitle: "Sangeet, Haldi & family celebrations mehndi & party makeup",
    iconName: "Users",
  },
  {
    name: "Anniversary",
    subtitle: "Heartfelt custom couple sketch portraits & tailored sarees",
    iconName: "Gift",
  },
  {
    name: "Birthday",
    subtitle: "Handmade clay figurines, commemorative sketches & party makeup",
    iconName: "Cake",
  },
  {
    name: "Baby Shower",
    subtitle: "Occasion makeup styling, keepsake sketch art & clay decor",
    iconName: "Flower2",
  },
  {
    name: "Gifting & Keepsakes",
    subtitle: "Personalised pencil sketches from photos & handmade clay art",
    iconName: "Palette",
  },
];
