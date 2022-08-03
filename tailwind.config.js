/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/2": "1fr min-content",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}