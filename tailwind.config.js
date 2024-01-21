/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ejs}'],
  theme: {
    extend: {
      colors: {
        custom1: {
          100: '#7a7e83',
          200: '#64696f',
          300: '#4e535a',
          400: '#383e46',
          500: '#222831',
          600: '#1b2027',
           700: '#14181d',
          800: '#0e1014',
          900: '#030405',
        },
        custom2: 
        {
          100: '#c4c5c8',
          200: '#888b90',
          300: '#61656b',
          400: '#4d5159',
          500: '#393E46',
          600: '#33383f',
          700: '#2e3238',
          800: '#22252a',
          900: '#17191c',
        },
        custom3: {
          100: '#A3E5E9',
          200: '#87DDE1',
          300: '#54CCD3',
          400: '#27BCC4',
          500: '#00ADB5',
          600: '#009BA3',
          700: '#008A91',
          800: '#00787F',
          900: '#00676D',
        } ,
        custom4:  {
          100: '#f7f7f7',
          200: '#f5f5f5',
          300: '#f1f1f1',
          400: '#f0f0f0',
          500: '#EEEEEE',
          600: '#d6d6d6',
          700: '#bebebe',
          800: '#a7a7a7',
          900: '#777777',
        },
      }
    },
  },
  plugins: [],
}
