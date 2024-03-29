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
        xxs: "390px",
        xs: "500px",
        sm: "599px",
        md: "767px",
        lg: "1024px",
        xl: "1200px",
      },
      colors: {
        black: "#02102D",
        green: "#197A81",
        light_green: "#e3e2dc",
      },
      fontFamily: {
        sans: ["var(--font-bebas)"],
        serif: ["Arial"],
      },
      boxShadow: {
        sm: "1px 1px 5px 1px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        mobileMenuOpen: {
          "0%": { height: "0px", marginTop: "0px" },
          "100%": {
            height: "307px",
            boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.3)",
            marginTop: "12px",
          },
        },
        mobileMenuClose: {
          "0%": {
            height: "307px",
            boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.3)",
            marginTop: "12px",
          },
          "100%": { height: "0px", marginTop: "0px" },
        },
      },
      animation: {
        show: "mobileMenuOpen 0.3s linear forwards",
        hide: "mobileMenuClose 0.3s linear forwards",
      },
    },
  },
  plugins: [],
};
