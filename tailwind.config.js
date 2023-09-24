/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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

        "dark-background": "#121212",
        "dark-secondary-background": "#1E1E1E",
        "dark-primary-text": "#FFFFFF",
        "dark-secondary-text": "#CCCCCC",
        "dark-accent-1": "#4CAF50",
        "dark-accent-2": "#FFC107",
        "dark-accent-3": "#2196F3",
        "dark-success": "#4CAF50",
        "dark-warning": "#FFC107",
        "dark-error": "#F44336",
        "dark-information": "#2196F3",
        "dark-borders": "#333333",
        "dark-dividers": "#1E1E1E",
        "dark-elevated-background": "#1E1E1E",
        "dark-elevated-text": "#FFFFFF",
      },
      fontFamily: {
        neueMachina: ["Neue Machina", "sans-serif"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
