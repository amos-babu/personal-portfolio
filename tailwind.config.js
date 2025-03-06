/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cursive: ['cursive'],
        moonDance: ['Moon Dance', 'cursive']
      }
    },
  },
  plugins: [],
}

