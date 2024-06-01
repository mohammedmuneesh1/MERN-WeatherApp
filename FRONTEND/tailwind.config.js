/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/src/Assets/bg.jpg')",
        
      }
    },
  },
  plugins: [],
}