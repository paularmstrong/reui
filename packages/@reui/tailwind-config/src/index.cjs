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
		},
		colors: {
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
			// https://tailwind.ink?p=8.f4f8f8ddf1f7b4e3ee7ec5d643a2b731829729687b234f5f19354310202df8fafbeaf0fcd3d7f9b0b2f09488e57b63dd6547cc4c35a934257b1d174af8f9f8eef1f2dadee1b3bcc08494976673725258563f42412b2d2e1a1b1efdfcfbfcf1eff9cddef19ebcef6d95e54975d03054aa243c7d19274c1014fcfbf8faf0d7f5d8ade6af79d8814bc25f2ca4451c7e331757231137160bfaf9f1f8efa8efdf66d6bc3bae941d8c760e715e095747093c3108291e07f5f8f5e5f1edc1e5d48ac8a947a579328750296f3923542e193923112219f6f9fbe0f1fcbddcfa90baf16594e64f70dc4154cb333eaa232a7c141a4f
			primary: {
				50: '#f6f9f8',
				100: '#e3f1f7',
				200: '#c1e2ec',
				300: '#8ec3d3',
				400: '#539eb2',
				500: '#3d7d91',
				600: '#326374',
				700: '#294a58',
				800: '#1d323e',
				900: '#111e29',
			},
			secondary: {
				50: '#f8fafb',
				100: '#eaf0fc',
				200: '#d3d7f9',
				300: '#b0b2f0',
				400: '#9488e5',
				500: '#7b63dd',
				600: '#6547cc',
				700: '#4c35a9',
				800: '#34257b',
				900: '#1d174a',
			},
			gray: {
				50: '#f8f9f8',
				100: '#eef1f2',
				200: '#dadee1',
				300: '#b3bcc0',
				400: '#849497',
				500: '#667372',
				600: '#525856',
				700: '#3f4241',
				800: '#2b2d2e',
				900: '#1a1b1e',
			},
			red: {
				50: '#fdfcfb',
				100: '#fcf1ef',
				200: '#f9cdde',
				300: '#f19ebc',
				400: '#ef6d95',
				500: '#e54975',
				600: '#d03054',
				700: '#aa243c',
				800: '#7d1927',
				900: '#4c1014',
			},
			orange: {
				50: '#fcfbf8',
				100: '#faf0d7',
				200: '#f5d8ad',
				300: '#e6af79',
				400: '#d8814b',
				500: '#c25f2c',
				600: '#a4451c',
				700: '#7e3317',
				800: '#572311',
				900: '#37160b',
			},
			yellow: {
				50: '#faf9f1',
				100: '#f8efa8',
				200: '#efdf66',
				300: '#d6bc3b',
				400: '#ae941d',
				500: '#8c760e',
				600: '#715e09',
				700: '#574709',
				800: '#3c3108',
				900: '#291e07',
			},
			green: {
				50: '#f5f8f5',
				100: '#e5f1ed',
				200: '#c1e5d4',
				300: '#8ac8a9',
				400: '#47a579',
				500: '#328750',
				600: '#296f39',
				700: '#23542e',
				800: '#193923',
				900: '#112219',
			},
			blue: {
				50: '#f6f9fb',
				100: '#e0f1fc',
				200: '#bddcfa',
				300: '#90baf1',
				400: '#6594e6',
				500: '#4f70dc',
				600: '#4154cb',
				700: '#333eaa',
				800: '#232a7c',
				900: '#141a4f',
			},
		},
	},
};