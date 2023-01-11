/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "**/*.php",
  ],
  theme: {
    extend: {},
    fontFamily: {},
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: {
              DEFAULT: '#000000',
          },
          white: {
              DEFAULT: '#ffffff',
          },
          red: {
              DEFAULT: '#EC1A23',
          },
          green: {
              DEFAULT: '#B3C390',
          },
          grey: {
              DEFAULT: '#626262',
          },
          darkgrey: {
              DEFAULT: '#1F2628',
          }
      },
  },
  plugins: [],
}
