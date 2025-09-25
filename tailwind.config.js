/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'brand-bg-light': '#7f7679',
        'brand-bg-dark': '#272629',
        'brand-text': '#ecdcc9',
        'brand-button': '#5c4c43',
      },
      // ADD THESE TWO NEW PROPERTIES
      backgroundImage: {
        'dotted-pattern': "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'dotted-size': '25px 25px',
      },
    },
  },
  plugins: [],
};