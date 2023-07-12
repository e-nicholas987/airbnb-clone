/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF385C",
        primary: "#222222",
        secondary: "#717171",
        gray: "#B0B0B0",
        "primary-border": "#DDDDDD",
        "scroll-btn-bg": "rgb(255, 255, 255, 0.9)",
      },
      boxShadow: {
        "nav-filter-shadow":
          "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
        "primary-hover-shadow": "0 2px 4px rgba(0,0,0,0.18)",
        "left-scoll-btn-shadow": "-68px -1px 39px 57px rgba(0,0,0,0.15)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
  },
    screens: {
      sm: "550px",
      md: "780px",
      lg: "950px",
      xl: "1128px",
      "2xl": "1440px",
      "3xl": "1640px",
      "4xl": "1880px",
    },
  },

  plugins: [],
};
