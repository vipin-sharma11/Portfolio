/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // slate-900 (Main text/Dark backgrounds)
          light: "#334155", // slate-700
          accent: "#059669", // emerald-600 (Buttons/Highlights)
        },
        background: "#f8fafc", // slate-50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Check if user wants to keep serif for headers, typically modern simple = all sans
        // decided to remove serif for simple professional look
      }
    },
  },
  plugins: [],
}
