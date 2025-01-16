const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include JS, TS, JSX, and TSX files for purging unused styles
  ],
  darkMode: "class", // Enable dark mode using the class method
  theme: {
    extend: {
      spacing: {
        '30': '30px',
        '31': '31px',
        '32': '32px',
        '38': '38px',
      },
      // Add more theme customizations here if necessary
    },
  },
  plugins: [
    // Add custom plugins here, like the one for color variables
    require('tailwind-scrollbar')({ nocompatible: true }),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
  addBase({
    ":root": newVars,
  });
}
