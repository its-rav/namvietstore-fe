/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1600px',
      '3xl': '1920px',
    },

    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },

    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },

      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      width: {
        'border-md': '1px',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        primary: '#850000',
        'primary-50': '#ffeeee',
        'primary-100': '#ffdada',
        'primary-200': '#ffbbbb',
        'primary-300': '#ff8b8b',
        'primary-400': '#ff4949',
        'primary-500': '#ff1111',
        'primary-600': '#ff0000',
        'primary-700': '#e70000',
        'primary-800': '#be0000',
        'primary-900': '#850000',
        'primary-950': '#560000',
      },
      spacing: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        px: '1px',
        1: '1px',
        2: '4px',
        3: '8px',
        4: '16px',
        5: '24px',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '50px',
        xs: '2px',
        sm: '25px',
        lg: '100px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
