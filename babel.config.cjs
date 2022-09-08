'use strict';

const config = require('@reui/babel-config');

module.exports = (api) => ({
	...config(api),
	babelrcRoots: ['./packages/*'],
});
