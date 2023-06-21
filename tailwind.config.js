/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "back-ground": "#312E81",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#FFFFFF",
      "yellow-500": "#EAB308",
    },
    extend: {
      fontFamily: {
        neueMachina: ["Neue Machina", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
