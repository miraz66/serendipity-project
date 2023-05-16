/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        popup: "popup 4s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(50px, 50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 60px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        popup: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.4)",
          },
          "60%": {
            transform: "scale(1.1)",
          },
          "70%": {
            transform: "scale(1.2)",
          },
          "80%": {
            transform: "scale(0.9)",
          },
          "90%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
