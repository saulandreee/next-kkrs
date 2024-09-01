/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        mandy: {
          DEFAULT: "#E85D75",
          50: "#FFFEFE",
          100: "#FCECEF",
          200: "#F7C8D0",
          300: "#F2A4B2",
          400: "#ED8193",
          500: "#E85D75",
          600: "#E12C4B",
          700: "#BA1A36",
          800: "#891328",
          900: "#580D1A",
          950: "#400912",
        },
        pourri: {
          50: "#FFFCFA",
          100: "#FEF9F6",
          200: "#FEF6F1",
          300: "#FDEFE7",
          400: "#FDECE3",
          500: "#FCE7DB",
          600: "#F5AE85",
          700: "#ED722B",
          800: "#AE490F",
          900: "#552407",
          950: "#2A1204",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
