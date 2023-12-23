/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      'logo-orange': '#E9573A',
      'light-pink': '#F4AB9D',
      'input-grey': '#17171750',
      'text-paragraph': '#000000',
      'bubble-gum': '#FDEEEB',
      'red-error': '#ae3232',
      'bg-profile': '#FEF7F5',
    },
    backgroundImage: {
      'close-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
      'open-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
    },
  },
  plugins: [],
};
