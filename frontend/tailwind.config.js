/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ===== Base Backgrounds =====
        bg: "#000000",
        bgSoft: "#1A1A1A",

        surface: "#212121",
        surfaceSoft: "#2A2A2A",
        surfaceHard: "#141414",

        // ===== Text =====
        textPrimary: "#fff",
        textMuted: "#ededed",
        textDark: "#7a7a7a",

        // ===== Accent / Brand =====
        accent: "#00a6f4",
        accentSoft: "#3B82F633",
        accentHover: "#0085c3",

        // ===== UI States =====
        hover: "#1F1F1F",
        border: "#2D2D2D",
        boxHover: "#141414",

        // ===== Status Colors =====
        success: "#10B981",
        successSoft: "#14532D",

        warning: "#FFB300",
        warningSoft: "#78350F",

        error: "#EF4444",
        errorSoft: "#881337",

        info: "#38BDF8",
        infoSoft: "#0B2A3A",

        // ===== Extra / Legacy =====
        blue: "#0082FB",
        purple: "#9333EA",
        shadow: "#000000",
      },
    },
  },
  plugins: [],
};
