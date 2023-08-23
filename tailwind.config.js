/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#BBBBBB",
        headingColor: "#081e21",
        smallTextColor: "#BBBBBB",
        //smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};
