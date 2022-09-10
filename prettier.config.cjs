'use strict';

module.exports = {
	printWidth: 120,
	singleQuote: true,
	useTabs: true,
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: require.resolve('@reui/tailwind-config'),
};
