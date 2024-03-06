import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#701a75",
          secondary: "#3f6212",
          accent: "#c026d3",
          neutral: "#26281c",
          "base-100": "#27262b",
          info: "#075985",
          success: "#4da000",
          warning: "#e50000",
          error: "#ff556b",
          background: "#110B28",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
