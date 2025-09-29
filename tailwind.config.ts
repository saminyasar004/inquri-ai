import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1800px",
			},
		},
		fontFamily: {
			openSans: ["Open Sans", "sans-serif"],
			arialRounded: ["Arial Rounded MT Bold", "sans-serif"],
		},
		extend: {
			colors: {
				"primary-500": "#06D206",
				"primary-600": "#3AD23A",
				"dark-foreground-500": "#E2E7EE",
				"primary-dark": "#1A1A1A",
				secondary: "#033333",
				warning: "#ff523b",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			dropShadow: {
				"contact-box": "0px -2px 10px rgba(204, 181, 253, 0.3)",
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
