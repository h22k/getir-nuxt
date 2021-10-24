const plugin = require("tailwindcss/plugin");
const _ = require('lodash')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        getir: '#5d3ebc'
      },
      spacing: {
        15: '3.75rem'
      },
      outline: {
        getir: '2px solid #5d3ebc'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, theme, e }) {
      const spacingUtilities = _.map(theme('spacing'), (value, key) => {
        return {
          [`.${e(`calc-h-full-${key}`)}`]: {
            height: `calc(100% - ${value})`
          },
          [`.${e(`calc-w-full-${key}`)}`]: {
            width: `calc(100% - ${value})`
          },
          [`.${e(`calc-top-full-${key}`)}`]: {
            top: `calc(0 - ${value})`
          },
          [`.${e(`calc-bottom-full-${key}`)}`]: {
            bottom: `calc(0 - ${value})`
          }
        }
      })
      addUtilities(spacingUtilities, {
        variants: ['hover', 'responsive']
      })
    })
  ]
}
