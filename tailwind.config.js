/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-vazirmatn)', 'system-ui', 'sans-serif'],
				poppins: ['var(--font-poppins)', 'sans-serif'],
				jost: ['var(--font-jost)', 'sans-serif'],
				vazir: ['var(--font-vazirmatn)', 'sans-serif'],
			},
		},
	},
	plugins: [],
	// Add this to reduce CSS file size in production
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
