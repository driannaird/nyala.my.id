import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#46B54D",
        neutral: "#333333",
        text: "#282829",
        danger: "#B92B26",
        border: "#DDDDDD",
        "text-drop": "#898989",
        icon: "#555555",
        hover: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
export default config;
