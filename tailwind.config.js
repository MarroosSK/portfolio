/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#111111 ",
        headingColor: "#081e21",
        smallTextColor: "#111111 ",
        //smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};
