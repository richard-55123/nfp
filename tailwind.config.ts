import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nfp: {
          blue: "#2E3192",   // Bleu du texte NFP
          yellow: "#FDB913", // Jaune/orange du cercle
          black: "#000000",  // Texte secondaire
          white: "#FFFFFF",  // Fond clair
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Montserrat'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",  // petit mobile
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.1)",
        bold: "0 6px 20px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
