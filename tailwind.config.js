/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridAutoFlow: {
        dense: 'dense',
      },
    }
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
};
