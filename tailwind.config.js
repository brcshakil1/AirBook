/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006CE4",
        accent: "#FFB700",
      },
      fontFamily: {
        poppins: "Poppins , sans-serif",
      },
    },
  },
  plugins: [],
};
