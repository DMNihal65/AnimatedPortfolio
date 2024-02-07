/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Neuefont:['Neue,sans-serif'],
        Ico:['Icomoon,sans-serif'],
        Founderfont:['Founder,sans-serif'],
      }
    },
  },
  plugins: [],
}