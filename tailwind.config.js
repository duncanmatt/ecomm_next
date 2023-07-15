/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'g': '#c1c1c1',
        'success': '#389466',
        'warning': '#e4300c',
      },
      height: {
        '60': '60px',
      },
      flexBasis: {
        '100': '100%',
        '60': '60%',
        '50': '50%',
        '40': '40%',
        '30': '30%',
      },
      padding: {
        '1rem': '1rem',
        '2rem':'2rem',
        '3rem': '3rem',
      },
      margin: {
        '1rem': '1rem',
        '2rem':'2rem',
        '3rem': '3rem',
      },
      borderRadius: {
        'reg': '1.25rem' 
      }
    },
  },
  plugins: [],
}
