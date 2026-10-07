/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#429bf5',
        secondary: '#f8f9fa'
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
