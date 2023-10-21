/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        telephone: "url('/src/shared/assets/promo-zone_1.jpg')",
      },
      colors: {
        mainBG: "#86D3F4",
        black: "#000",
        textSecondaryColor: "#565656",
        borderColor: "#4E4E4E",
        white: "#fff",
        errorColor: "#EA0000",
      },
      fontSize: {
        "14px": "14px",
        "16px": "16px",
        "26px": "26px",
        "32px": "32px",
      },
    },
  },
  plugins: [],
};
