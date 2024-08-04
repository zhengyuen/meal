/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#7F8487',
        brown: '#6C4A4A',
        lightGray: '#D0D4CA'
      }
    },
  },
  plugins: [],
}

