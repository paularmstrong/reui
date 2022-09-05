'use strict';
const path = require('path');
const baseConfig = require('@reui/tailwind');

module.exports = {
	...baseConfig,
	content: [
		'./src/**/*.tsx',
		'./docs/**/*.{mdx,md}',
		`${path.dirname(require.resolve('@reui/components'))}/**/*.{ts,tsx,mdx,md}`,
		...(baseConfig.content || []),
	],
};
