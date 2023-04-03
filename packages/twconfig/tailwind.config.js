module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        xxxs: "2px",
        xxs: "4px",
        xs: "8px",
        st: "12px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        xxl: "80px",
      },
      borderRadius: {
        standard: "2px",
      },
      keyframes: {
        "high-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-200%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "loading-dot-1": "high-bounce 1.1s infinite",
        "loading-dot-2": "high-bounce 1.1s infinite -0.8s",
        "loading-dot-3": "high-bounce 1.1s infinite -0.6s",
      },
    },
  },
  plugins: [],
}
