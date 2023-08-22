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
      container: '1920px',
    },
    colors: {
      5: '#070707',
      10: '#111111',
      15: '#1a1a1a',
      20: '#242424',
      25: '2e2e2e',
      30: '#383838',
      35: '#555555',
      40: '#696969',
      45: '#737373',
      50: '#868686',
      55: '#9a9a9a',
      60: '#a4a4a4',
      65: '#aeaeae',
      70: '#b7b7b7',
      75: '#cbcbcb',
      80: '#d5d5d5',
      85: '#dfdfdf',
      90: '#e8e8e8',
      95: '#f2f2f2',
      g: '#eeeeee',
      b: '#070707',
      success: '#389466',
      warning: '#e4300c',
      white: '#fff',
      transparent: 'rgba(0,0,0,0)',
    },
    borderRadius: {
      xs: '0.75rem',
      sm: '0.90rem',
      md: '1rem',
      reg: '1.25rem',
      circle: '1.875rem',
    },
    boxShadowColor: {
      bag: 'rgb(18,18,18)',
    },
    boxShadow: {
      bag: '0px 0px 10px -6px',
      head: 'inset 0 -1px 0 0 #eae8e4',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    extend: {
      height: {
        60: '60px',
        main: '100vh',
        menu: 'calc(100vh + 54px)',
      },
      lineHeight: {
        20: '20px',
      },
      fontSize: {
        cart: '10px',
      },
      letterSpacing: {
        logo: '-0.03rem',
        reg: '0.03px',
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
        1200: '1200px',
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
        menu: '60px, calc(100vh - 60px)',
      },
      backgroundColor: {
        faded: 'rgba(252,252,252,0.95)',
        light: '#f9f9f9',
        body: '#fcfcfc',
      },
      transitionTimingFunction: {
        menu: 'cubic-bezier(0.42,0,0.58,1)',
      },
      keyframes: {
        fadeIn: {
          '0%, 35%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        intro: {
          '0%, 35%': { opacity: '0', transform: 'translateY(8px)' },
          '60%': { opacity: '1' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out 1',
        fadeInFast: 'fadeIn 0.185s ease-in-out 1',
        intro: 'intro 0.875s ',
      },
    },
  },
  plugins: [],
};
