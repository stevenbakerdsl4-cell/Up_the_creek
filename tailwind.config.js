/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f5f3',
          100: '#e9e6e1',
          200: '#d1ccc3',
          300: '#a9a093',
          400: '#7d7367',
          500: '#5c5347',
          600: '#463e34',
          700: '#332d25',
          800: '#221e19',
          900: '#16130f',
          950: '#0d0b08',
        },
        clay: {
          50: '#fbf4ef',
          100: '#f5e3d6',
          200: '#eac6ad',
          300: '#dfa07a',
          400: '#d47a4f',
          500: '#c75e2e',
          600: '#a8471f',
          700: '#873818',
          800: '#622a14',
          900: '#3f1c0e',
        },
        moss: {
          50: '#f3f6f1',
          100: '#e3eadd',
          200: '#c6d4ba',
          300: '#9fb38e',
          400: '#76915f',
          500: '#5a7345',
          600: '#465c37',
          700: '#38492d',
          800: '#2c3a24',
          900: '#1f2919',
        },
        sky: {
          50: '#eef7f8',
          100: '#d4ebee',
          200: '#abd6dd',
          300: '#78b9c6',
          400: '#4d97a8',
          500: '#357d8e',
          600: '#2a6472',
          700: '#24515d',
          800: '#21434d',
          900: '#1c3941',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        heading: ['"Archivo"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'mega': '0.06em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-down': 'slideDown 0.25s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
