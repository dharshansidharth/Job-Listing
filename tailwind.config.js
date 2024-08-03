/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Roboto' , 'sans-serif']
      },
      gridTemplateColumns : {
        '70/30' : '70% 20%' 
      }
    },
  },
  plugins: [],
}

