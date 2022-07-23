/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#645cff",
        primaryDark: "#282566",
        primaryLight: "#a29dff",
        greyOne: "#102a42",
        greyFive: "#617d98",
        greyTen: "#f1f5f8",
        redDark: "hsl(360, 67%, 44%)",
        redLight: "hsl(360, 71%, 66%)",
      },
    },
  },
  plugins: [],
};
