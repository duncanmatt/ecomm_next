/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ss: 'Jost, sans-serif',
      d: 'Playfair Display, serif',
    },
    maxWidth: {
      container: '1400px',
    },
    colors: {
      5: '#070707',
      10: '#111111',
      15: '#1a1a1a',
      20: '#242424',
      25: '#2e2e2e',
      30: '#383838',
      35: '#555555',
      50: '#868686',
      g: '#eeeeee',
      b: '#070707',
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
      glass:
        'w-full h-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    extend: {
      height: {
        60: '60px',
        main: '100dvh',
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
      maxHeight: {
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
