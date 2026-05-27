import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate family
        slate: "#001E33",
        slateDeep: "#000F1C",
        slateMid: "#0B2842",
        slateLine: "#163756",
        // Gold family
        gold: "#FFC43E",
        goldDeep: "#C9922A",
        goldPale: "#F5D98A",
        // Mint family
        mint: "#B5DFD0",
        mintLight: "#DAEEE7",
        // Neutrals
        cream: "#F4F0E6",
        paper: "#F7F1DF",
        // America 250 palette
        americaNavy: "#1B2A4E",
        americaRed: "#B5152D",
        americaRedDeep: "#8E1023",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        condensed: [
          "var(--font-barlow-condensed)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
