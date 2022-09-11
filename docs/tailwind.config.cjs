'use strict';
const path = require('path');
const baseConfig = require('@reui/tailwind-config');

module.exports = {
	...baseConfig,
	darkMode: 'class',
	content: [
		'./src/**/*.tsx',
		'./docs/**/*.{mdx,md}',
		`${path.join(__dirname, '..', 'packages')}/**/*.{ts,tsx,mdx,md}`,
		...(baseConfig.content || []),
	],
};
