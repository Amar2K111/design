import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Semantic tokens */
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
        },
        brand: {
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
          light: "var(--brand-light)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",

        /* Legacy aliases — mapped to semantic tokens for gradual migration */
        black: "var(--foreground)",
        "black-secondary": "var(--foreground)",
        calque: "var(--background)",
        beton: "var(--surface)",
        encre: "var(--foreground)",
        "encre-soft": "var(--muted)",
        ligne: "var(--border)",
        navy: "var(--brand)",
        "navy-hover": "var(--brand-hover)",
        blue: "var(--primary)",
        "blue-hover": "var(--primary-hover)",
        "blue-dark": "var(--brand)",
        "blue-secondary": "var(--brand)",
        "blue-light": "var(--brand-light)",
        acier: "var(--brand)",
        "acier-soft": "var(--muted)",
        info: "var(--primary)",
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
