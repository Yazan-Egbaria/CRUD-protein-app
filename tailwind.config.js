/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow: "0 0 5px rgba(0,0,0,0.2)",
      },
      height: {
        "calc-100dvh-minus-64": "calc(100dvh - 64px)",
        "calc-100vh-minus-64": "calc(100vh - 64px)",
      },
      minHeight: {
        "min-calc-100dvh-minus-64": "calc(100dvh - 64px)",
        "min-calc-100vh-minus-64": "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
};
