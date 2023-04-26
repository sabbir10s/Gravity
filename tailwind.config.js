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
      custom_secondary: "rgba(0, 0, 0, 0.030) 5.4px 2.4px 3.2px",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: {
        '50': '#ecf9ff',
        '100': '#d4f0ff',
        '200': '#b2e6ff',
        '300': '#7dd8ff',
        '400': '#40bfff',
        '500': '#149dff',
        '600': '#007bff',
        '700': '#0063ff',
        '800': '#0052d4',
      },
      secondary: {
        '50': '#eaf4ff',
        '100': '#d8eaff',
        '200': '#b9d5ff',
        '300': '#8eb9ff',
        '400': '#628eff',
        '500': '#3e65ff',
        '600': '#1d37ff',
        '700': '#1228f0',
        '800': '#090e36',
      },
    },
  },
  plugins: [],
};
