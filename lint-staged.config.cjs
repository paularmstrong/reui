'use strict';

module.exports = {
	'*.{cjs,js,ts,tsx}': ['yarn lint --fix', () => 'yarn tsc:check'],
	'*': 'yarn format --write',
};
