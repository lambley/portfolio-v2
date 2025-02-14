import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        overlay: "var(--overlay)",
        bg: "var(--bg)",
        bw: "var(--bw)",
        blank: "var(--blank)",
        text: "var(--text)",
        mtext: "var(--mtext)",
        border: "var(--border)",
        ring: "var(--ring)",
        ringOffset: "var(--ring-offset)",

        secondaryBlack: "#212121",
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "3px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-3px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      fontFamily: {
        "public-sans": ['"Public Sans"', "sans-serif"],
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            h1: {
              marginTop: theme("spacing.8"),
              fontWeight: theme("fontWeight.semibold"),
              color: theme("colors.black"),
              fontSize: theme("fontSize.5xl"),
            },
            h2: {
              fontSize: theme("fontSize.4xl"),
            },
            h3: {
              fontSize: theme("fontSize.3xl"),
            },
            h4: {
              fontSize: theme("fontSize.2xl"),
            },
            h5: {
              fontSize: theme("fontSize.xl"),
            },
            h6: {
              fontSize: theme("fontSize.lg"),
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.white"),
              borderRadius: theme("borderRadius.lg"),
              fontFamily: theme("fontFamily.mono"),
              fontWeight: theme("fontWeight.normal"),
              boxShadow: theme("boxShadow.lg"),
              padding: `${theme("spacing.8")}`,
            },
            code: {
              color: theme("colors.white"),
              backgroundColor: theme("colors.gray.800"),
              borderRadius: theme("borderRadius.lg"),
              fontFamily: theme("fontFamily.mono"),
              fontWeight: theme("fontWeight.normal"),
              boxShadow: theme("boxShadow.lg"),
              padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code, blockquote code": {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
