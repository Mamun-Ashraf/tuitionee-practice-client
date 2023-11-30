/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: "#213547",
        blueFoot: "#11296B",
        blueHead: "#5b7c99",
        blueBody: "#adcad6",
        grayBody: "#f3f4f6",
        yellowLight: "#fde74c",
        yellowDeep: "#FFDB57",
        yellowBtn: "#f9e900",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
