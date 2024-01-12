/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      // gridTemplateRows: {
      //   8: 'repeat(8, minmax(0, 1fr))',
      // },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-1': 'span 1 / span 1',
      },
    },
    colors: {
      white: '#ffffff',
      'logo-orange': '#E9573A',
      'light-pink': '#F4AB9D',
      'input-grey': '#17171750',
      'text-paragraph': '#000000',
      'background-navbar': '#FDEEEB',
      'red-error': '#ae3232',
      'bg-card': '#FFFFFF',
      'background-home': '#FEF7F5',
      'bg-profile': '#FEF7F5',
    },
    backgroundImage: {
      'close-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
      'open-menu': 'url("../src/assets/Navbar icons/icon-hamburger.svg")',
    },
  },
  plugins: [],
};
