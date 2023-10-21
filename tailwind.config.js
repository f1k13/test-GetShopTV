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
      },
      fontSize: {
        "14px": "14px",
        "26px": "26px",
        "32px": "32px",
      },
    },
  },
  plugins: [],
};
