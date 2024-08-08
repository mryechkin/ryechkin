/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{js,css,mdx}'],
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
        neon: `2px 2px 0px ${theme('colors.indigo.100')}`,
        'neon-dark': `2px 2px 0px ${theme('colors.indigo.800')}`,
        retro: `6px 6px 0px ${theme('colors.indigo.100')}`,
        'retro-dark': `6px 6px 0px ${theme('colors.indigo.800')}`,
        underline: `0 -2px 0 0 ${theme('colors.sky.300')} inset`,
      }),
      textShadow: ({ theme }) => ({
        retro: `3px 2px 0px ${theme('colors.indigo.600')}, 5px 4px 0px ${theme(
          'colors.indigo.100',
        )}`,
        'retro-dark': `3px 2px 0px ${theme('colors.pink.500')}, 5px 4px 0px ${theme(
          'colors.amber.400',
        )}`,
      }),
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        serif: ['Libre Franklin', ...defaultTheme.fontFamily.serif],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      // Disables the backtick (`) character applied by prose classes for <code>
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '' },
            'code::after': { content: '' },
          },
        },
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
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
    typography,
  ],
};
