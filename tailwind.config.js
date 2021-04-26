/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: colors.green,
        pink: colors.fuchsia,
        yellow: colors.yellow
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
