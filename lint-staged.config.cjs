'use strict';

module.exports = {
	'*.{cjs,js,ts,tsx}': ['yarn lint --fix', () => 'yarn tsc'],
	'*.{ts,tsx,mdx}': ['yarn workspace docs css'],
	'*': 'yarn format --write',
};
