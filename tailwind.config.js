/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,mdx}', './data/**/*.mdx'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'pattern-dark': "url('/assets/pattern-dark.svg')",
        'pattern-dark-sm': "url('/assets/pattern-dark-sm.svg')",
        'pattern-light': "url('/assets/pattern-light.svg')",
        'pattern-light-sm': "url('/assets/pattern-light-sm.svg')",
      },
      boxShadow: {
        link: '0 -6px 0 0 var(--colors-sky10) inset',
        underline: '0 -2px 0 0 var(--colors-sky10) inset',
      },
      colors: {
        pink: colors.fuchsia,
        'sky-accent': 'var(--colors-sky10)',
      },
      fontFamily: {
        sans: ['Heebo', ...defaultTheme.fontFamily.sans],
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
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
