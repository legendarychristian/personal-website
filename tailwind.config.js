/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        b1: "#DFF5FF",
        b2: "#515B89",
        b3: "#1E2B63",
        b4: "#C9E8F7",
        b5: "#44477C",
        offWhite: "#EDF6F9",
        darkGreen: "#003eb4",
        lightGreen: "#5acbff",
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'], // Add Jost as a custom font
        openSans: ['Open Sans', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

