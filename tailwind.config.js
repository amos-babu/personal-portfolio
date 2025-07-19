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
        midnight: {
          50: '#f4f6f9',
          100: '#e2e6f0',
          200: '#c4ccdf',
          300: '#9da9c7',
          400: '#6e7fa8',
          500: '#4a5d8c',
          600: '#36446b',
          700: '#2a3555',
          800: '#1f2941',
          900: '#0e1528',
        },
        primary: colors.midnight,
      },
    },
  },
  plugins: [],
}

