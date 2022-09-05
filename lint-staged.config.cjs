'use strict';

module.exports = {
	'*.{cjs,js,ts,tsx}': ['yarn lint --fix', () => 'yarn tsc'],
	'*.{ts,tsx,mdx}': ['yarn workspace @reui/docs css'],
	'*': 'yarn format',
};
