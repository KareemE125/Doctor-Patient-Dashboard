/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        "grey": "#f3f4f5",
        "accent": "#01F0D0",
        "accent-dark": "#072635"
      }
    },
  },
  plugins: [],
}