/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

    },
    colors: {
      'logo-orange': '#E9573A',
      'white': '#FFFFFF',
      'light-pink': '#F4AB9D',
      'input-grey': '#17171750',
      'text-paragraph':'#000000'
    },
  },
  plugins: [],
}

