/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "570px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        primary: "Cormorant Upright, serif",
        secondary: "Open Sans, sans-serif",
      },
      colors: {
        primary: "#F35627",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/Simple Shiny.svg')",
      },
    },
  },
  variants: {
    extends: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
