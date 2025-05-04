/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["YourFontName", "sans-serif"], // Your custom font name
      },
    },
  },
  plugins: [],
};
