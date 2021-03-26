const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: colors.fuchsia
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
  plugins: [],
}
