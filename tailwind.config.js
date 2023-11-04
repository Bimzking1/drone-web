/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fog': "url('/src/assets/fog.jpg')",
        'rocky': "url('/src/assets/rockybeach.jpg')",
      }
    },
  },
  plugins: [],
}

