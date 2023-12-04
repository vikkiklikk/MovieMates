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
      textColorDark: '#282828',
      dropDown: '#C4EBC8',
      lightText: '#86A5D9',
      white: '#F5F5F5',
    },
  },
  plugins: [],
}
