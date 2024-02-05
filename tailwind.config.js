/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/**/*.{html,js}'
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

