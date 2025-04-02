/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        BowlbyOne: ["Bowlby One", "sans-serif"],
        FjallaOne: ["Fjalla One", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        blue: "#142C58",
        yellow: "#FFDA1D",
        lightYellow: "#ffdd38",
        red: "#D9232E",
        lightBlue: "#49BCFF",
      },
      flex: {
        1: "1 1 0%",
        0: "0 0 auto",
        auto: "1 1 auto",
      },
      fontSize: {
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        48: "48px",
        64: "64px",
        110: "110px",
      },
      fontWeight: {
        600: "600",
        700: "700",
        800: "800",
      },
      padding: {
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
      },
      margin: {
        10: "10px",
        20: "20px",
        30: "30px",
      },
      height: {
        69: "69px",
        120: "120.2px",
        200: "200px",
        800: "800px",
        997: "997px",
      },
      width: {
        900: "900px",
      },
      gap: {
        10: "10px",
        28: "28px",
        55: "55px",
      },
    },
  },
  plugins: [],
};
