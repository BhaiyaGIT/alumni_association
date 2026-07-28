module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: "#0b5fff",
				accent: "#ffb703",
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(12px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				fadeInUp: "fadeInUp 0.5s ease-out both",
				fadeIn: "fadeIn 0.4s ease-out both",
			},
		},
	},
	plugins: [],
};
