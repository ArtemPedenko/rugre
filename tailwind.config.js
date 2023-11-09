/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xxs: '390px',
				xs: '500px',
				sm: '599px',
				md: '767px',
				lg: '1024px',
				xl: '1200px',
			},
			colors: {
				black: '#02102D',
				green: '#197A81',
				light_green: '#e3e2dc',
			},
			fontFamily: {
				sans: ['var(--font-poppins)'],
			},
		},
	},
	plugins: [],
};
