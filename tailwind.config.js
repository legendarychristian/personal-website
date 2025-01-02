/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        offWhite: "#edf6f9",
        darkGreen: "#006d77",
        lightGreen: "#83c5be",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'], // Add Jost as a custom font
    },
    },
  },
  plugins: [],
}

