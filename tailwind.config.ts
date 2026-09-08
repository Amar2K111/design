import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand
        black: "#0A0A0A",
        "black-secondary": "#111111",
        navy: "#0A0A0A",
        "navy-hover": "#111111",
        blue: "#155EEF",
        "blue-hover": "#0B3B8F",
        "blue-dark": "#0B3B8F",
        "blue-secondary": "#0B3B8F",
        "blue-light": "#EAF2FF",

        // Semantic aliases
        beton: "#FAFAFA",
        calque: "#FFFFFF",
        encre: "#0A0A0A",
        "encre-soft": "#6B7280",
        acier: "#0B3B8F",
        "acier-soft": "#6B7280",
        ligne: "#E5E7EB",

        // Status
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#155EEF",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        doc: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
