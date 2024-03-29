/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/2": "min-content max-content",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'newsBreakmd': '500px',
      'homePhone': '450px',
      'tablet': '880px',
      'sm2': {'max': '480px'},
      'myXl': '1150px',
      '2xl': '1350px',
    },
    backgroundImage: {
      'bgGradient': 'linear-gradient(120deg, transparent 0%, transparent 50%, #dc2626 50%)'
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}