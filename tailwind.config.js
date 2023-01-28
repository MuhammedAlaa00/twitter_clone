/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor:{
        light: "#fff",
        dark:"#15202B", 
        space:'#1D9BF0'
      },
      colors: {
        borderColor:"#26323C",
        inputBorderColor: '#CFD9DE',
        primaryColor: '#1D9BF0',
        secondColor: '#536471',
        blackColor: '#000',
        whiteColor: "#fff",
        errorColor: '#ef4444',
      },
      boxShadow:{
        dark:"0px 0px 10px rgba(0, 0, 0, 0.3)",
        light:"0px 0px 10px rgba(255, 255, 255, 0.3)"
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1023px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1297px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1535px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  important: true,
  plugins: [require('@tailwindcss/forms')]
};
