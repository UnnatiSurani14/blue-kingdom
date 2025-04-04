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
        transparent:"transparent",
        white: "#FFFFFF",
        crem: "#F1F1F1",
        black: "#303133",
        blue: "#142C58",
        yellow: "#FFDA1D",
        lightYellow: "#ffdd38",
        red: "#D9232E",
        lightBlue: "#49BCFF",
        Gray:"#a4a5a5",
      },
      flex: {
        1: "1 1 0%",
        0: "0 0 auto",
        auto: "1 1 auto",
      },
      fontSize: {
        12:"12px",
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
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        90: "90px",
        120: "120px",
      },
      margin: {
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        20: "20px",
        30: "30px",
        55: "55px",
      },
      height: {
        69: "69px",
        120: "120.2px",
        200: "200px",
        530: "530px",
        550: "550px",
        600: "600px",
        800: "800px",
        913: "913px",
        997: "997px",
      },
      width: {
        200: "206px",
        335: "335.5px",
        662: "662px",
        800: "800px",
        900: "900px",
      },
      gap: {
        4:"4px",
        8: "8px",
        10: "10px",
        20: "20px",
        28: "28px",
        40: "40px",
        60: "60px",
        55: "55px",
      },
      screens: {
        lg: { min: "1024px" },
        xl: { min: "1200px" },
        xxl: { min: "1366px" },
        xxxl: { min: "1440px" },
        xl2: { min: "1510px" },
        xl3: { min: "1600px" },

        2560: { max: "2560px" },
        1450: { max: "1450px" },
        1366: { max: "1366px" },
        1199: { max: "1199.9px" },
        1023: { max: "1023px" },
        991: { max: "991px" },
        767: { max: "767px" },
        639: { max: "639px" },
        575: { max: "575px" },
        479: { max: "479px" },
        375: { max: "375px" },
        320: { max: "320px" },
      },
    },
  },
  plugins: [],
};
