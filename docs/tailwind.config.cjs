'use strict';
const path = require('path');

module.exports = {
	presets: [require('@reui/tailwind-config')],
	darkMode: 'class',
	content: [
		'./src/**/*.tsx',
		'./docs/**/*.{mdx,md}',
		`${path.join(path.dirname(require.resolve('@reui/reui')), '..', '..')}/**/*.{js,cjs}`,
	],
};
