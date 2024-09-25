/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        accent: "#F6F7FB",
        "accent-2": "#FF0000",
        light: "#F7FAFC",
        dark: "#1A202C",
        "dark-24%": "#1A202C3D",
        "dark-40%": "#1A202C66",
        secondary: "#2975FF",
        "secondary-10%": "#2975FF1A",
        tertiary: "#FFC123",
        "tertiary-10%": "#FFC1231A",
        "tertiary-2": "#FF66A0",
        "tertiary-2-10%": "#FF66A01A",
        primary: "#00CC96",
        "primary-10%": "#00CC961A",
        "bg-dark": "#1E1E27",
      },
      fontSize: {
        "heading-md": "2rem",
        "heading-lg": "2.5rem",
      },
      width: {
        26: "6.5rem",
        76: "19rem",
        112: "28rem",
        114: "28.5rem",
        120: "30rem",
      },
      margin: {
        26: "6.5rem",
      },
      padding: {
        13: "3.25rem",
        22: "5.5rem",
      },
      gap: {
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        picture: "2rem",
      },
    },
  },
  plugins: [],
};
