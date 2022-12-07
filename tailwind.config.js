/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily: {
        'nitti': ['Nitti', 'mono'],
        'spaceGrotesk':['"Space Grotesk"', 'sans'],
        'GTWalsheim':['GTWalsheimPro', 'sans']
      },
    },
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}

