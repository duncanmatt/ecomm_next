/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      xs: '0.75rem',
      sm: '1.125rem',
      reg: '1.25rem',
    },
    boxShadowColor: {
      bag: 'rgb(18,18,18)'
    },
    boxShadow: {
      bag: '0px 0px 10px -6px',
    },
    extend: {
      colors: {
        g: '#e1e1e1',
        b: '#121212',
        success: '#389466',
        warning: '#e4300c',
      },
      height: {
        60: '60px',
      },
      flexBasis: {
        100: '100%',
        60: '60%',
        50: '50%',
        40: '40%',
        30: '30%',
      },
      padding: {
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
      },
      margin: {
        '1rem': '1rem',
        '2rem': '2rem',
        '3rem': '3rem',
      },
      minHeight: {
        main: 'calc(100vh - 60px)',
      },
      backgroundImage: {
        gradi:
          'linear-gradient(180deg,rgba(255, 255, 255, 0.15),rgba(255, 255, 255, 0));',
      },
      backdropBlur: {
        '6xl': '135px',
      },
      backgroundColor: {
        faded: 'rgba(249,249,249,0.95)',
      },
      gridTemplateRows: {
        cart: '1fr, min-content'
      }
    },
  },
  plugins: [],
};
