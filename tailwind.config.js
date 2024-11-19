/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 12px 4px rgba(0, 0, 0, 0.1)', // Custom shadow
      }
    },
  },
  plugins: [],
}

