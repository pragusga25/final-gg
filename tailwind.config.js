/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tn: '390px',
        xs: '480px',
        bg: '850px',
      },
    },
  },
  plugins: [require('daisyui')],
};
