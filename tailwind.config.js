/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['dancing-script', 'inter', 'sans-serif'],
      },
      colors: {
        midnight: '#37574d',
        midday:'#55277d',
        // primary: colors.midnight,
      },
    },
  },
  plugins: [],
}

