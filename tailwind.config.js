/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#343A40', // Add your custom color here
        'custom-body':'#6C757D'
      },
    },
  },
  plugins: [],
}

