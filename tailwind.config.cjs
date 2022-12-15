/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pricol: '#a67636',
        seccol: '#faf9f8',
      },
    },

  },
  plugins: [],
}