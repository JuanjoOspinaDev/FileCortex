/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e40af",
        },
        secondary: "#f3f4f6",
        accent: "#fbbf24",
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(20,20,43,.08)",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),      // ← este sí existe
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
