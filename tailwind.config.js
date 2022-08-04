/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/2": "min-content min-content",
      }
    },
    screens: {
      'homePhone': '450px',
      'tablet': '880px',
      'sm2': {'max': '480px'},
    }
  },
  plugins: [
    require('daisyui'),
  ],
}