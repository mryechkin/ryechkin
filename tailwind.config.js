/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.NODE_ENV
    ? // JIT for `npm run dev`.
      'jit'
    : // No JIT for IDE class and generation & prettier runs.
      undefined,
  purge: ['./src/**/*.{js,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: colors.green,
        pink: colors.fuchsia,
        yellow: colors.yellow,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        body: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
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
