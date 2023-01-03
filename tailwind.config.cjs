/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'white',
        'on-background': 'black',
        surface: '#f8f8f8',
        'on-surface': '#908f8f',
        'inverse-surface': '#111111',
        primary: 'black',
        secondary: 'gray',
        tertiary: '#cfc7c7',
        accent: '#71bef9',
        cursor: '#685C5C',
        error: 'red',
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'Poppins'],
      },
      fontSize: {
        '2xs': '0.5em',
      },
      transitionProperty: {
        top: 'top',
        height: 'height',
      },
      borderRadius: {
        half: '50%',
      },
    },
  },
  plugins: [],
};
