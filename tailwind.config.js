/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ enables dark mode using the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
