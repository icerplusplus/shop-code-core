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
        icon: "#5066d2"
      },
      dropShadow: {
        button: "filter: drop-shadow(0 25px 25px rgb(22 117 221 / 0.2));"
      }
    },
  },
  plugins: [],
};
export default config;
