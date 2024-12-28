import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DD4BF", // Vibrant teal
        secondary: "#4F46E5", // Darker indigo for better contrast
        accent: "#00FF94", // Bright neon green
        error: "#FF3366", // Warm red for errors/notifications
        dark: "#0F172A", // Deep blue-black
        light: "#F8FAFC", // Clean white
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-outfit)"],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
