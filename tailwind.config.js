/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans 3', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1232px",
      }
    },
    extend: {
      colors: {
        primary: "#f9ab00",
        "green": "#29b474",
        "orange": "#eb5757",
        "dark": "#1a191f"
      },
    },
  },
  plugins: [],
}