/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //special configuration is to add into the tailwind to enable the dark theme using the lass name
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}

