const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', ...fontFamily.sans],
      },
      keyframes: {
        'grey-color-cycle': {
          '0%': {
            'background-color': colors.gray['300'],
          },
          '33%': {
            'background-color': colors.gray['500'],
          },
          '66%': {
            'background-color': colors.gray['400'],
          },
          '100%': {
            'background-color': colors.gray['300'],
          },
        },
      },
      animation: {
        'dot-color-change': 'grey-color-cycle 2s linear infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    addVariablesForColors,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
