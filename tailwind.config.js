/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_layout: "#1D1D1D",
        darker_layout: "#0B0B0B",
        darkest_layout: "#1A1A1A",
        gray_layout: "#D7D7D7",
        placeholder_layout: "#8B8B8B",
      },
      backgroundImage: {
        'modal-background': "url('./src/assets/common/modal_background.jpg')",
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        advent_pro: ['"Advent Pro"', "sans-serif"],
        open_sans: ['"Open Sans"', "sans-serif"],
      },
      screens: {
        'phone_sm': '275px',
        'phone_md': '390px',
        'phone_lg': '440px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}