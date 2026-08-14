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
        brand: {
          light: "#E0F2FE",    // Light Blue accent
          ice: "#F0F7FD",      // Background soft blue
          primary: "#0284C7",  // Primary Sky/Light Blue
          dark: "#0B192C",     // Navy Deep Header
          navy: "#1E3E62",     // Secondary Navy
          green: "#15803D",    // Accent Emerald Dark Green CTA
          greenHover: "#166534", // Hover Green
          amber: "#D97706",    // Accent Amber
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
