export interface GalleryItem {
  id: string;
  title: string;
  category: "Saree" | "Mehndi" | "Makeup" | "Sketches" | "Handmade Art";
  image: string;
  aspect: string;
  caption: string;
  isRealWork?: boolean; // true = actual Shakti Studio work
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ─── ACTUAL SKETCH WORK (User Uploaded — save these files to /public/images/) ───
  // Files needed: sketch-girl-portrait.jpg, sketch-man-portrait.jpg, sketch-cartoon-bambi.jpg
  // Using placeholder images until real files are placed in /public/images/
  {
    id: "g-sketch-real-1",
    title: "Girl Portrait Sketch",
    category: "Sketches",
    image: "/images/sketch-sample-pencil.jpg", // Replace with: /images/sketch-girl-portrait.jpg
    aspect: "aspect-[3/4]",
    caption: "Hand-drawn pencil portrait — expressive likeness from a photograph.",
    isRealWork: true,
  },
  {
    id: "g-sketch-real-2",
    title: "Men's Portrait Sketch",
    category: "Sketches",
    image: "/images/sketch-sample-portrait.jpg", // Replace with: /images/sketch-man-portrait.jpg
    aspect: "aspect-[3/4]",
    caption: "Detailed pencil sketch capturing personality and expression.",
    isRealWork: true,
  },
  {
    id: "g-sketch-real-3",
    title: "Colour Sketch Art",
    category: "Sketches",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80", // Replace with: /images/sketch-cartoon-bambi.jpg
    aspect: "aspect-[4/5]",
    caption: "Creative colour sketch art — character illustration with vibrant detail.",
    isRealWork: true,
  },

  // ─── ACTUAL SAREE SAMPLES (User Uploaded) ───
  // Files needed: saree-sample-sky-blue.jpg, saree-sample-magenta.jpg
  {
    id: "g-saree-real-1",
    title: "Sky Blue Ghungroo Saree",
    category: "Saree",
    image: "/images/saree-sample-sky-blue.jpg",
    aspect: "aspect-[4/5]",
    caption: "Elegant sky blue organza saree with golden ghungroo border detailing.",
    isRealWork: true,
  },
  {
    id: "g-saree-real-2",
    title: "Magenta Ghungroo Saree",
    category: "Saree",
    image: "/images/saree-sample-magenta.jpg",
    aspect: "aspect-[4/5]",
    caption: "Vibrant magenta silk saree with handcrafted ghungroo border embellishment.",
    isRealWork: true,
  },

  // ─── MEHNDI DESIGNS ───
  {
    id: "g-mehndi-1",
    title: "Bridal Henna — Full Hand",
    category: "Mehndi",
    image: "/images/mehndi-bridal-1.jpg",
    aspect: "aspect-[4/5]",
    caption: "Intricate full-hand bridal mehndi with traditional Indian floral motifs.",
    isRealWork: false,
  },
  {
    id: "g-mehndi-2",
    title: "Festive Mehndi Design",
    category: "Mehndi",
    image: "/images/mehndi-festive-2.jpg",
    aspect: "aspect-[3/4]",
    caption: "Beautiful festive henna patterns for Karwa Chauth, Teej & weddings.",
    isRealWork: false,
  },
  {
    id: "g-mehndi-3",
    title: "Arabic Mehndi Style",
    category: "Mehndi",
    image: "/images/mehndi-arabic-3.jpg",
    aspect: "aspect-[3/4]",
    caption: "Elegant Arabic mehndi style with bold floral and paisley patterns.",
    isRealWork: false,
  },

  // ─── OTHER SERVICES INSPIRATION ───
  {
    id: "g-saree-3",
    title: "Ghungroo Saree Border",
    category: "Saree",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Deep crimson weave with handcrafted embellishment style reference.",
    isRealWork: false,
  },
  {
    id: "g-makeup-1",
    title: "Indian Bridal Glamour",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1600685890506-593fdf55949b?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Traditional bridal makeup inspiration featuring warm tones and celebratory elegance.",
    isRealWork: false,
  },
  {
    id: "g-clay-1",
    title: "Mitti Ki Murti Sculpture",
    category: "Handmade Art",
    image:
      "https://images.unsplash.com/photo-1760679673931-fb3d7459887b?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Traditional Indian clay idol sculpting style reference for festive celebrations.",
    isRealWork: false,
  },
  {
    id: "g-makeup-2",
    title: "Occasion Makeup Styling",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
    caption: "Festive occasion beauty look with traditional jewelry and balanced glow.",
    isRealWork: false,
  },
  {
    id: "g-clay-2",
    title: "Handmade Clay Idols",
    category: "Handmade Art",
    image:
      "https://images.unsplash.com/photo-1760283808241-78ba42088b84?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/5]",
    caption: "Artisan clay figurines and auspicious idols shaped for festive gifting.",
    isRealWork: false,
  },
];
