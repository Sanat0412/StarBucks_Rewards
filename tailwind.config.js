const defaultColors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  theme: {
    colors: {
      primary: {
        50: '#F1F8F5',
        100: '#D4E9E2',
        200: '#008248',
        300: '#00653E',
        400: '#1E3932',
      },
      secondary: {
        100: '#F3F1E7',
        200: '#CBA258',
      },
      white: defaultColors.white,
      gray: defaultColors.gray,
      black: defaultColors.black,
    },

    extend: {
      height: {
        18: '4.5rem',
      },
      backgroundImage: (theme) => ({
        'mobile-star':
          "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
