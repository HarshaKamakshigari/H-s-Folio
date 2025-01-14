/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '30px',
        '31': '31px',
        '32': '32px',
        '38': '38px',
      }
    },
  },
  plugins: [],
};
