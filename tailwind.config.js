/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#00000012",
        "background": "#101010",
        "cardbackground": "#1A1A1A",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      screens: {
        xss: "340px", // Correct
        xs: "475px",
        sm: "640px", // Correct
        md: "768px", // Correct
        lg: "1024px", // Correct
        "2lg": "1163px", // Correct
        xl: "1280px", // Correct
        mxl: "1440px", // Correct
        "2xl": "1536px", // Correct
        "3xl": "1868px", // Correct
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out", // Adjust the duration and easing as needed
      },
    },
  },
  plugins: [],
};
