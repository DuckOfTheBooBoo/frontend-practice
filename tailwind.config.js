/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './level1/**/*.{html,js}',
    './level2/**/*.{html,js}',
    './level3/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'abstract-blue': '#4C5FD5',
        'abstract-grey': '#dadbf1'
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}

