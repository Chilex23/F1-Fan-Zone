/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'homePhone': '450px',
      'tablet': '880px',
      'sm2': {'max': '480px'},
      'myXl': '1150px',
      '2xl': '1350px',
    }
  },
  plugins: [
    require('daisyui'),
  ],
}