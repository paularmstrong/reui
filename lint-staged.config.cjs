'use strict';

module.exports = {
	'*.{cjs,js,ts,tsx}': ['yarn lint --fix', () => 'yarn tsc:check'],
	'*.{ts,tsx,mdx}': ['yarn workspace docs css'],
	'*': 'yarn format --write',
};
