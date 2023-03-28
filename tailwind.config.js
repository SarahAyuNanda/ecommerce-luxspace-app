/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'light': '0px 10px 10px -10px rgba(33, 35, 38, 0.1)'
      }
    },
  },
  plugins: [require('tailwindcss'), require('postcss'), require('autoprefixer')],
}
