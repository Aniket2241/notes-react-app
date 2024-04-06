/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow with black color and 0.1 opacity
        "custom-blue": "0 4px 6px rgba(0, 0, 255, 0.1)", // Shadow with blue color and 0.1 opacity
        "custom-red": "0 4px 6px rgba(255, 0, 0, 0.1)", // Shadow with red color and 0.1 opacity
        // Add more custom shadow colors as needed
      },
    },
  },
  plugins: [],
};
