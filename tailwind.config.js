/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        edubridgeLight: {
          "primary": "#0f766e",
          "primary-content": "#f0fdfa",
          "secondary": "#d97706",
          "secondary-content": "#fffbeb",
          "accent": "#e11d48",
          "accent-content": "#fff1f2",
          "neutral": "#1f2937",
          "neutral-content": "#f8fafc",
          "base-100": "#f8fafc",
          "base-200": "#e2e8f0",
          "base-300": "#cbd5e1",
          "base-content": "#0f172a",
          "info": "#0891b2",
          "info-content": "#ecfeff",
          "success": "#0f766e",
          "success-content": "#f0fdfa",
          "warning": "#d97706",
          "warning-content": "#fffbeb",
          "error": "#e11d48",
          "error-content": "#fff1f2",
        },
      },
      {
        edubridgeDark: {
          "primary": "#2dd4bf",
          "primary-content": "#042f2e",
          "secondary": "#f59e0b",
          "secondary-content": "#451a03",
          "accent": "#fb7185",
          "accent-content": "#4c0519",
          "neutral": "#020617",
          "neutral-content": "#e2e8f0",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#e2e8f0",
          "info": "#67e8f9",
          "info-content": "#083344",
          "success": "#2dd4bf",
          "success-content": "#042f2e",
          "warning": "#f59e0b",
          "warning-content": "#451a03",
          "error": "#fb7185",
          "error-content": "#4c0519",
        },
      },
    ],
  },
}
