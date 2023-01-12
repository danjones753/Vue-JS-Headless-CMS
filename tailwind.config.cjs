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
    fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '2.553rem',
        '4xl': '3.441rem',
        '5xl': '4.052rem',
      },
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: {
              DEFAULT: '#1C1C1C',
          },
          white: {
              DEFAULT: '#ffffff',
          },
          lightgrey: {
              DEFAULT: '#f3f3f3',
          },
          grey: {
              DEFAULT: '#808080',
          },
          lightblue: {
              DEFAULT: '#82B7DC',
          },
          blue: {
            DEFAULT: '#3466AA',
          },
          darkblue: {
            DEFAULT: "#114084",
          }
      },
  },
  plugins: [],
}
