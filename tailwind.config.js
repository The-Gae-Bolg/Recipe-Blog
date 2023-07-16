/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px', 
      'md': '768px',
      'mdMax': {'max': '768px'},
      'lg': '1024px',
    },
    extend: {
      boxShadow: {
        'card-sd': '0px 0px 20px 0px #0000001A',
      }
    },
    fontFamily: {
      'Montserrat': ['Montserrat', 'serif'],
      'PlayfairDisplay': ['PlayfairDisplay', 'serif'],
    }
  },
  plugins: [],
}

