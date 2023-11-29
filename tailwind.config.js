/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      'logo-orange': '#E9573A',
      'light-pink': '#F4AB9D',
      'input-grey': '#17171750',
      'text-paragraph': '#000000',
      'bubble-gum': '#FDEEEB',
    },
    backgroundImage: {
      'close-menu': 'url("../src/assets/icon-hamburger.svg")',
      'open-menu': 'url("../src/assets/icon-hamburger.svg")',
    },
  },
  plugins: [],
};
