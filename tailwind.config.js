/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ['"Bai Jamjuree"', "sans-serif"],
      },
      colors: {
        primary: "hsl(171, 66%, 44%)",
        secondary: "hsl(233, 100%, 69%)",
      },
    },
  },
  plugins: [],
};
