/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    boxShadow: {
      custom: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      custom_secondary: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: "#ecf9ff",
        100: "#d4f0ff",
        200: "#b2e6ff",
        300: "#7dd8ff",
        400: "#40bfff",
        500: "#149dff",
        600: "#007bff",
        700: "#0063ff",
        800: "#0052d4",
      },
      secondary: {
        50: "#eaf4ff",
        100: "#d8eaff",
        200: "#b9d5ff",
        300: "#8eb9ff",
        400: "#628eff",
        500: "#3e65ff",
        600: "#1d37ff",
        700: "#1228f0",
        800: "#090e36",
      },

      gray: {
        50: "#f8f8f8",
        100: "#f0f0f0",
        200: "#e4e4e4",
        300: "#d1d1d1",
        400: "#b0b0b0",
        500: "#9a9a9a",
        600: "#818181",
        700: "#6a6a6a",
        800: "#5a5a5a",
      },
      link: {
        400: "#6AA0FC",
      },
    },
  },
  plugins: [],
};
