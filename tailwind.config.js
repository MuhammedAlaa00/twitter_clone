/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      inputBorderColor: '#CFD9DE',
      primaryColor: '#1D9BF0',
      secondColor: '#536471',
      blackColor: '#000',
      whiteColor:"#fff"
    },
    extend: {}
  },
  important: true,
  plugins: [require('@tailwindcss/forms')]
};
