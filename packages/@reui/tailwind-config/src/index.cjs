'use strict';

/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			animation: {
				stroke: 'stroke 1.5s ease-in-out infinite',
			},
			keyframes: {
				stroke: {
					'0%': { 'stroke-dasharray': '1, 150', 'stroke-dashoffset': '0' },
					'50%': { 'stroke-dasharray': '90, 150', 'stroke-dashoffset': '-35' },
					'100%': { 'stroke-dasharray': '90, 150', 'stroke-dashoffset': '-125' },
				},
			},
			colors: {
				primary: {
					50: '#f0fdfa',
					100: '#e3f1f7',
					200: '#ccfbf1',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a',
				},
			},
		},
	},
};
