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
        "shadow": "url('/Intro/shadow.png')",
        "shadow-stack": "url('/StackTechnology/shadow-stack.png')",
        "arrow": "url('/Intro/arrow.svg')",
      },
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
   
  },
  plugins: [],
};
export default config;
