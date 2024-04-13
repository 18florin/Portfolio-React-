/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#18191A",
        lightBg: "#F0F2F5",
        darkTxt: "#E7E9ED",
        darkBg2: "#242526",
        lightTxt: "#050505",
      },
    },
  },
  plugins: [],
};
