/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "**/*.php",
  ],
  theme: {
    extend: {},
    fontFamily: {
        header: ['Fredoka One', 'cursive'],
        primary: ['Roboto', 'sans-serif'],
    },
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: {
              DEFAULT: '#000000',
          },
          white: {
              DEFAULT: '#ffffff',
          },
          lightgrey: {
              DEFAULT: '#f3f3f3',
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
