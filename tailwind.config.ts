import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFCF9",
          100: "#F9F6F0",
          200: "#F1EAE0",
          300: "#E6DBCB",
          400: "#D7C5AF",
        },
        maroon: {
          50: "#FAF0F2",
          100: "#F4DCE1",
          500: "#A8263B",
          600: "#8E1E31",
          700: "#751525",
          800: "#5D0E1C",
          900: "#440813",
          950: "#2B030A",
        },
        gold: {
          50: "#FDFBF5",
          100: "#FAF4E4",
          200: "#F2E4BF",
          300: "#E6CE93",
          400: "#D4B265",
          500: "#BD9338",
          600: "#9E7623",
          700: "#7A5817",
        },
        terracotta: {
          50: "#FAF3F1",
          100: "#F3E2DE",
          500: "#BA5B45",
          600: "#A04732",
          700: "#823523",
        },
        charcoal: {
          700: "#4A4042",
          800: "#2F2728",
          900: "#1E1718",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(93, 14, 28, 0.05)',
        'elevated': '0 10px 30px -4px rgba(93, 14, 28, 0.08), 0 4px 6px -2px rgba(93, 14, 28, 0.04)',
        'gold-glow': '0 0 25px rgba(212, 178, 101, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
