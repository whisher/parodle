/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gradient: {
					from: '#4d6777',
					to: '#3e4b5e'
				},
				bck: '#343d4e',
				amber: {
					400: '#f9b033'
				},
				gray: {
					400: '#ecefec'
				},
				indigo: {
					400: '#8a98c8'
				},
				lime: {
					400: '#7fccb5'
				},
				pink: {
					400: '#da8fbc'
				},
				red: {
					400: '#f27b89'
				}
			}
		},
		fontFamily: {
			sans: ['Bebas Neue', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
