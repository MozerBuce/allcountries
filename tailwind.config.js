/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'rede' : '#FF0000',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'hero' : "url('/src/assets/emprendimentos.png')",
      }
    },
  },
  plugins: [],
}

