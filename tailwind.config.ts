import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Bishkek0: "url('/images/Bishkek0.jpeg')",
        Bishkek1: "url('/images/Bishkek1.jpeg')",
        Bishkek2: "url('/images/Bishkek2.jpeg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
