/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1144px",
      },
      colors: {
        primary: " #F40404",
        hoverbg: " #f22323",
      },
    },
  },
  plugins: [],
};
