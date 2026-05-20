import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["monospace"],
      },
      colors: {
        background: "#0B0F1A",
        surface: "#111827",
        "surface-raised": "#1F2937",
        border: "rgba(255,255,255,0.08)",
        primary: "#818CF8",
        "primary-dim": "#6366F1",
        secondary: "#22D3EE",
        success: "#4ADE80",
        text: {
          primary: "#F9FAFB",
          secondary: "#D1D5DB",
          muted: "#9CA3AF",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "shimmer": "shimmer 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 20s linear infinite",
        "float-delayed": "float 25s linear infinite -5s",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%": { transform: "translateY(100vh) translateX(-10px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.15" },
          "90%": { opacity: "0.15" },
          "100%": { transform: "translateY(-100px) translateX(20px) rotate(360deg)", opacity: "0" },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};

export default config;
