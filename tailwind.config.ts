import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");


const config: Config = {
  //  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //       "2xl": "1400px",
    //   },
    // },
    extend: {
      boxShadow: {
        glow: '0 0 10px rgba(59, 130, 246, 0.6), 0 0 10px rgba(59, 130, 246, 0.6)', // Blue glow
      },
      fontWeight: {
        '400': '400',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-orange': '#FF5722',
      },
      fontFamily: {
        opensans: ["var(--opensans)", ...fontFamily.sans],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
          xs: "375px",
          sm: "480px",
          sm2: "568px",
          sm3: "640px",
          md: "768px",
          md2: "840px",
          md3: "960px",
          lg: "1080px",
          xl: "1280px",
          "2xl": "1400px",
          d2xl: { max: "1400px" },
          dxl: { max: "1280px" },
          dlg: { max: "1080px" },
          dmd3: { max: "960px" },
          dmd2: { max: "840px" },
          dmd: { max: "768px" },
          dsm3: { max: "640px" },
          dsm2: { max: "568px" },
          dsm: { max: "480px" },
          dxs: { max: "375px" },
      },
      keyframes: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
        fadeIn: {
            "0%": { opacity: "0.2" },
            "100%": { opacity: "1" },
        },
        rollIn: {
          '0%': { transform: 'translateX(18%) rotate(70deg) ' },
          '100%': { transform: 'translateX(0) rotate(0deg) ' },
        },
        wiggle: {
            "0%, 100%": { transform: "rotate(-5deg)" },
            "50%": { transform: "rotate(5deg)" },
        },
        swivvleV: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(10%)" },
      },
        swivvle: {
            "0%, 100%": { transform: "translateX(-10%)" },
            "50%": { transform: "translate(10%)" },
        },
        scaleUp: {
            from: { transform: "scale(70%)" },
            to: { transform: "scale(100%)" },
        },
        slideRtL: {
            from: { transform: "translateX(50%)" },
            to: { transform: "translateX(0%)" },
        },
        slideLtR: {
            from: { transform: "translateX(-5%)" },
            to: { transform: "translateX(0%)" },
        },
        slideTtB: {
            from: { transform: "translateY(-25%)" },
            to: { transform: "translateY(0%)" },
        },
        slideBtT: {
            from: { transform: "translateY(35%)" },
            to: { transform: "translateY(0%)" },
        },
      },
      animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          fadeIn: "fadeIn 1.5s ease-in-out",
          wiggle: "wiggle 1s ease-in infinite",
          swivvleV: "swivvleV 1.5s ease-in-out infinite",
          swivvle: "swivvle 1.5s ease-in-out infinite",
          slideRtL: "slideRtL 1s ease-in-out ",
          slideLtR: "slideLtR 1s ease-in-out ",
          slideTtB: "slideTtB 1s ease-in-out ",
          slideBtT: "slideBtT 1s ease-in-out ",
          scaleUp: "scaleUp 1s ease-in-out ",
          rollIn: "rollIn 1.5s ease-in-out "
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
