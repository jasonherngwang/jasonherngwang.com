const { fontFamily } = require('tailwindcss/defaultTheme');
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
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography'), addVariablesForColors],
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
