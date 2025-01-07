/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        offWhite: "#EDF6F9",
        darkGreen: "#003eb4",
        lightGreen: "#5acbff",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'], // Add Jost as a custom font
    },
    },
  },
  plugins: [],
}

