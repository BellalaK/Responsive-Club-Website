const { default: fluid } = require("fluid-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#df6163",
      orange: "#f1bb4b",
      yellow: "#f8ee78",
      blue: "#83c3ff",
      purple: "#bc67fc",
      green: {
        100: "#bedba5",
        200: "#7b8c6a",
        300: "#4f5b45",
      },
    },
    extend: {},
  },
  plugins: [],
};

import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: [
      /* ... */
    ],
    screens,
    fontSize,
    extend: {
      screens: {
        xs: "20rem",
      },
    },
    extract,
  },
  plugins: [fluid],
};
