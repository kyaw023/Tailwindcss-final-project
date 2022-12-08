/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        green:'rgba(255,255,255,0.2)',
        gra:'rgb(0 0 0 / 0%) 0px 0px 0px 1px'
      }
    },
   
  },
  
  plugins: [],
}
