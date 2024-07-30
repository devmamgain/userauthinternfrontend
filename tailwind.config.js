/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'sm1':'640px',
      'sm2':'610px',
      'md': '843px',
      'lg': '1024px',
      'xl': '1400px',
      '2xl': '2400px',
    },
    extend: {},
  },
  plugins: [],
}