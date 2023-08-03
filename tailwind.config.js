/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: '1280px',
    },
    colors: {
      g: '#eeeeee',
      b: '#121212',
      success: '#389466',
      warning: '#e4300c',
      white: '#fff',
      transparent: 'rgba(0,0,0,0)',
    },
    borderRadius: {
      xs: '0.75rem',
      sm: '1.125rem',
      reg: '1.25rem',
      circle: '1.875rem',
    },
    boxShadowColor: {
      bag: 'rgb(18,18,18)',
    },
    boxShadow: {
      bag: '0px 0px 10px -6px',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    extend: {
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
      gridTemplateRows: {
        cart: '1fr, min-content',
      },
      backgroundColor: {
        faded: 'rgba(252,252,252,0.95)',
        light: '#f9f9f9',
        body: '#fcfcfc',
      },
    },
  },
  plugins: [],
};
