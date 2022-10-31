/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				gradient: {
					from: '#4d6787',
					to: '#3e4b6e'
				},
				bck: '#343d5e',
				amber: {
					400: '#f9b043'
				},
				gray: {
					400: '#eceffc'
				},
				indigo: {
					400: '#8a98d8'
				},
				lime: {
					400: '#7fccc5'
				},
				pink: {
					400: '#da8fcc'
				},
				red: {
					400: '#f27b99'
				}
			}
		},
		fontFamily: {
			sans: ['Bebas Neue', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
