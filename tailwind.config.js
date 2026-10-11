/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#070b14", soft: "#0c1220" },
        surface: "#0f1526",
        line: "#202942",
        accent: "#7c9cff",
        gold: "#e3c27a",
        muted: "#9aa5bd",
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: { soft: "0 20px 50px -20px rgba(0,0,0,0.6)" },
    },
  },
  plugins: [],
};
