/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'orchid-pink': '#F6C7D6',
        'tuscany': '#BC93A4'
      },
      boxShadow: {
        'light': '-4px 9px 25px -6px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [require('tailwindcss'), require('postcss'), require('autoprefixer')],
}
