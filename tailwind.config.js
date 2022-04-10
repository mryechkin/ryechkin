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
        'pattern-dark': "url('/assets/graph-paper-dark.svg')",
        'pattern-light': "url('/assets/graph-paper-light.svg')",
        'circuit-dark': "url('/assets/circuit-board-dark.svg')",
        'circuit-light': "url('/assets/circuit-board-light.svg')",
      },
      boxShadow: {
        link: '0 -6px 0 0 #7dd3fc inset',
        underline: '0 -2px 0 0 #7dd3fc inset',
      },
      colors: {
        pink: colors.fuchsia,
        'sky-accent': '#7dd3fc',
      },
      fontFamily: {
        sans: ['Heebo', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.5rem',
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
