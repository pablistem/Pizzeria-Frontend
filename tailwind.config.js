/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
    colors: {
      'logo-orange': '#E9573A',
      'light-pink': '#F4AB9D',
      'input-grey': '#17171750',
      'text-paragraph': '#000000',
      'bubble-gum': '#FDEEEB',
      'red-error': '#ae3232',
      'bg-card': '#FFFFFF',
    },
    backgroundImage: {
      'close-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
      'open-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
    },
  },
  plugins: [],
};
