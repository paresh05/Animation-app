import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      textOrientation: {
        upright: "upright",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".writing-mode-vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        ".text-orientation-upright": {
          "text-orientation": "upright",
        },
        ".text-gradient": {
          background:
            "radial-gradient(75.98% 130.43% at 18.04% 28.7%, #09f, #188edd 60.59%, #0561e2)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
export default config;
