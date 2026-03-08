/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0ea5e9',
        'dark-blue': '#0c4a6e',
        'accent-blue': '#38bdf8',
      },
    },
  },
  plugins: [],
}
