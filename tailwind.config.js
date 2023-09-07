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
    },
  },
  plugins: [require('tailwindcss'), require('postcss'), require('autoprefixer')],
}
