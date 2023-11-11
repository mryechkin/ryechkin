/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const wtf = require('@wtf-ds/tailwind');

module.exports = {
  content: ['./src/**/*.{js,css,mdx}'],
  presets: [wtf],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'pattern-dark': "url('/assets/graph-paper-dark.svg')",
        'pattern-light': "url('/assets/graph-paper-light.svg')",
        'circuit-dark': "url('/assets/circuit-board-dark.svg')",
        'circuit-light': "url('/assets/circuit-board-light.svg')",
      },
      boxShadow: ({ theme }) => ({
        link: `0 -6px 0 0 ${theme('colors.sky.300')} inset`,
        underline: `0 -2px 0 0 ${theme('colors.sky.300')} inset`,
      }),
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Franklin', ...defaultTheme.fontFamily.serif],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
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
};
