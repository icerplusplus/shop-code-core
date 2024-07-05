import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg_top: "#0e294e",
        bg_center: "#1a3a70",
        bg_bottom: "#1a3364",
        icon: "#5066d2",
      },
      dropShadow: {
        button: "filter: drop-shadow(0 25px 25px rgb(22 117 221 / 0.2));",
      },
      gridTemplateColumns: {
        post: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      margin: {
        "0-auto": "0 auto",
      },
      aspectRatio: {
        "post-img": "4 / 3",
      },
      borderColor: {
        default: "#30363d",
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
        post: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      keyframes: {
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        unExpandWidth: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        expandWidth: 'expandWidth 2000ms ease-in-out forwards',
        unExpandWidth: 'expandWidth 2000ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
