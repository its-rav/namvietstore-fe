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
        secondary: '#002651',
        'secondary-50': '#f3f8ff',
        'secondary-100': '#d9e4ff',
        'secondary-200': '#b5ccff',
        'secondary-300': '#8bb3ff',
        'secondary-400': '#6699ff',
        'secondary-500': '#3366ff',
        'secondary-600': '#004cff',
        'secondary-700': '#0033cc',
        'secondary-800': '#002299',
        'secondary-900': '#001166',
        'secondary-950': '#000033',
      },
      spacing: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        px: '1px',
        1: '1px',
        2: '4px',
        3: '8px',
        4: '12px',
        5: '16px',
        6: '18px',
        7: '22px',
        8: '26px',
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
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern:
        /(bg)-(primary|secondary)(-(50|100|200|300|400|500|600|700|800|900|950))?/,
    },
  ],
  plugins: [],
};
