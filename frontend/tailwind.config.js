/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif'],
        'title': ['Oceanwide', 'sans-serif'],
        'logo': ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        'screen': { 'max': '1920px' },
        'desktop': { 'max': '1279px' },
        'laptop': { 'max': '1023px' },
        'tablet': { 'max': '767px' },
        'mobile': { 'max': '429px' },
      },
      spacing: {
        '100': '25rem',
      },
      backgroundImage: {
        'astroOne': "url('./src/assets/astroOne.png')",
        'astroTwo': "url('./src/assets/astroTwo.png')",
        'rocket': "url('./src/assets/rocket.png')",
        'rocketRed': "url('./src/assets/rocketRed.png')",
        'nick': "url('./src/assets/nick.png')",
      },
    },
  },
  plugins: [],
}

