/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "640px",
    },
    colors: {
      mred: "#F30050",
      sbarbk: "#292929",
      bl: "#390554",
    },

    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      wsans: ["Work Sans"],
    },
    extend: {},
  },
  plugins: [],
};
