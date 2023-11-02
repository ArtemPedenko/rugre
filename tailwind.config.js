/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        s: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
      colors: {
        black: "#02102D",
        green: "#32a852",
      },
    },
  },
  plugins: [],
};
