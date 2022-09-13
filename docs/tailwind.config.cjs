'use strict';
const path = require('path');

module.exports = {
	presets: [require('@reui/tailwind-config/src/index.cjs')],
	darkMode: 'class',
	content: [
		'./src/**/*.tsx',
		'./docs/**/*.{mdx,md}',
		`${path.join(__dirname, '..', 'packages', '@reui')}/**/*.{ts,tsx}`,
	],
};
