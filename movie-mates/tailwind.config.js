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
    },
  },
  plugins: [],
}
