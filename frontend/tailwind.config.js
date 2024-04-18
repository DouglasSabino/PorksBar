/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./assets/bg-brics.jpg')",
      },
      fontSize: {
        '4xl': '4rem', // Tamanho de fonte personalizado
      },
      boxShadow: {
        'neon': '0 0 80px 20px #fff, 0 0 40px 20px #fff, 0 0 10px 20px #0ff, 0 0 20px 20px #0ff, 0 0 30px 20px #0ff'
      },
      colors: {
        'neon-blue': '#0ff'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}