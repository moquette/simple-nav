const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.layout': {
          marginLeft: theme('margin.auto'),
          marginRight: theme('margin.auto'),
          width: theme('width.11/12'),
          maxWidth: theme('width.11/12'),
        },
      })
    }),
  ],
}
