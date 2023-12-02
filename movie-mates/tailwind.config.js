/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      buttonColor: 'rgba(1, 22, 39, 0.8)',
      buttonHover: '#011627',
      textColor: '#FCFCFC',
      green: '#C4EBC8',
      lighBackground: '#F5F5F5',
      lightText: '#86A5D9',
      white: '#FFFFFF',
      lightGrey: '"D9D9D9'

    },
  },
  plugins: [],
}