/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "back-ground": "#F7F7F7",
      primary: "#2274A5",
      secondary: "#32936F",
      accent: "#EF6C35",
      text: "#333333",
      white: "#FFFFFF",
      twitter: "#1DA1F2",
      linkedIn: "#0077B5",
      "gray-light": "#d3dce6",
      "text-gray-dark": "#273444",
    },
    extend: {
      fontFamily: {
        neueMachina: ["Neue Machina", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
