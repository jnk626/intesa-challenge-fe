/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      '1/3': '33%'
    },
    colors: {
      primary: '#258900',
      white: '#FFFFFF',
      lightWhite: '#F8F8F8',
      black: '#323232',
      gray: '#6F6F6F',
      green: '#258900'
    },
    extend: {},
  },
  plugins: [],
};
