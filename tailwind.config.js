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
      'light-gray': '#F4F4F4',
      'text-gray': '#CACACA',
    },
    backgroundImage: {
      'close-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
      'open-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
      'open-cart': 'url("../src/assets/Navbar icons/cart_icon.svg")',
      'close-cart': 'url("../src/assets/Navbar icons/cart_icon.svg")',
    },
  },
  plugins: [],
};
