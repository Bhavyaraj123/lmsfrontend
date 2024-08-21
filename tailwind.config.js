/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#343A40', // Add your custom color here
        'custom-body':'#6C757D',
        'custom-blue': 'rgb(228,245,252)',
        'custom-bg'   :'#F9F9F9',
        'custom-bg-2': '#F2F2F2'
      },
      
    },
  },
  plugins: [],
}

