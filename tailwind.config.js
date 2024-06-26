/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ['Circular', 'sans-serif'],
      },
      colors: {
        'black': '#272829',
        'gray': '#61677A',
        'lightgray': '#D8D9DA',
        'cream': '#FFFCF5',
        
      },

    },
  },
  plugins: [],
}
