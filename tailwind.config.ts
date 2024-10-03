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
        pr50:  "var(--pr-50)",
        pr100:  "var(--pr-100)",
        pr200:  "var(--pr-200)",
        pr300:  "var(--pr-300)",
        pr400:  "var(--pr-400)",
        pr500:  "var(--pr-500)",
        pr600:  "var(--pr-600)",
        pr700:  "var(--pr-700)",
        pr800:  "var(--pr-800)",
        pr900:  "var(--pr-900)",
      },
    },
  },
  plugins: [],
};
export default config;
