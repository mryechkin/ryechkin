/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,mdx}', './data/**/*.mdx'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'pattern-dark': "url('/assets/pattern-dark.svg')",
        'pattern-light': "url('/assets/pattern-light.svg')",
      }),
      colors: {
        cyan: colors.cyan,
        green: colors.green,
        pink: colors.fuchsia,
        rose: colors.rose,
        yellow: colors.yellow,
        amber: colors.amber,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slow: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        slow: 'wiggle 2s ease-in-out infinite',
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
