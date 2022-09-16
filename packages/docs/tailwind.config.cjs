'use strict';
const path = require('path');

module.exports = {
	presets: [require('@reui/tailwind-config')],
	darkMode: 'class',
	content: ['./src/**/*.{tsx,ts,mdx,md}', `${path.join(__dirname, '..', '@reui')}/**/*.{ts,tsx,mdx}`],
};
