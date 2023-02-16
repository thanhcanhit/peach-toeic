/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				12: "0.75rem",
				14: "0.875rem",
				15: "0.9375rem",
				18: "1.125rem ",
				20: "1.25rem",
				32: "2rem"
			},
			fontFamily: {
				rowdies: ['Rowdies', 'cursive']
			},
			colors: {
				primary: "#7A9CC6",
        "dark-blue": "#646E78",
        "light-gray": "#EEEEEE",
				black: "#424242",
			},
			keyframes: {
				"sidebar-text": {
					"0%": { transform: "translateY(-20%)", opacity: 0 },
					"100%": { transform: "translateY(0%)", opacity: 1 },
				},
				"cat-jump": {
					"0%": { transform: "rotate(-8deg)"},
					"50%": { transform: "translateY(-20%) rotate(0)"},
					"100%": { transform: "rotate(-8deg)"}
				},
				"fade-in": {
					"0%": {opacity: 0},
					"100%": {opacity: 1}
				}
			},
			animation: {
				"sidebar-text": "sidebar-text ease .3s",
				"cat-jump": "cat-jump ease-in-out 2s infinite",
				"fade-in": "fade-in ease .3s"
			},
		},
	},
	plugins: [],
};
