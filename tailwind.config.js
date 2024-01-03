/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "url('/src/images/bg.jpeg')",
      },
    },
  },
  plugins: [],
};
