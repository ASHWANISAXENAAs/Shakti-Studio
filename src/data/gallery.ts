export interface GalleryItem {
  id: string;
  title: string;
  category: "Saree" | "Mehndi" | "Makeup" | "Sketches" | "Handmade Art";
  image: string;
  aspect: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-saree-1",
    title: "Ghungroo Saree Border Concept",
    category: "Saree",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Style inspiration for delicate ghungroo accents along custom pallu borders.",
  },
  {
    id: "g-mehndi-1",
    title: "Bridal Henna Intricacy",
    category: "Mehndi",
    image:
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    caption: "Full hand bridal mehndi style reference with fine floral and traditional motifs.",
  },
  {
    id: "g-makeup-1",
    title: "Indian Bridal Glamour",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Traditional bridal makeup inspiration featuring warm tones and celebratory elegance.",
  },
  {
    id: "g-sketch-1",
    title: "Pencil Portrait Study",
    category: "Sketches",
    image:
      "https://images.unsplash.com/photo-1593472807861-5bb884af28f6?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    caption: "Hand-rendered pencil portrait concept drawn from photograph references.",
  },
  {
    id: "g-clay-1",
    title: "Mitti Ki Murti Sculpture",
    category: "Handmade Art",
    image:
      "https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Traditional Indian clay idol sculpting style reference for festive celebrations.",
  },
  {
    id: "g-mehndi-2",
    title: "Ceremony & Festive Henna",
    category: "Mehndi",
    image:
      "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Intricate hand henna design inspiration for Karwa Chauth, Teej & weddings.",
  },
  {
    id: "g-saree-2",
    title: "Festive Drape Detailing",
    category: "Saree",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    caption: "Deep crimson weave with handcrafted embellishment style reference.",
  },
  {
    id: "g-makeup-2",
    title: "Occasion Makeup Styling",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Festive occasion beauty look with traditional jewelry and balanced glow.",
  },
  {
    id: "g-clay-2",
    title: "Handmade Clay Idols",
    category: "Handmade Art",
    image:
      "https://images.unsplash.com/photo-1760283808241-78ba42088b84?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    caption: "Artisan clay figurines and auspicious idols shaped for festive gifting.",
  },
  {
    id: "g-sketch-2",
    title: "Portrait Sketch Artwork",
    category: "Sketches",
    image:
      "https://images.unsplash.com/photo-1780037756323-f14d43763351?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Expressive hand-drawn portrait sketch capturing personal likeness.",
  },
];
