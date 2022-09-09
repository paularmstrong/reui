'use strict';

module.exports = function (api) {
	const asNodeNative = api.caller((caller) => caller.target === 'node') || api.env('test');
	const isCommonJS = process.env.COMMONJS || api.env('test');

	return {
		sourceType: 'unambiguous',
		presets: [
			[
				'@babel/preset-env',
				{
					modules: isCommonJS ? 'commonjs' : 'auto',
					targets: asNodeNative ? { node: '16.0.0' } : ['>0.2%', 'not dead', 'not op_mini all'],
					useBuiltIns: 'usage',
					corejs: 3,
					bugfixes: true,
				},
			],
			['@babel/preset-react', { development: !api.env('production') }],
			'@babel/preset-typescript',
		],
		plugins: [
			'@babel/plugin-transform-runtime',
			'babel-plugin-transform-react-remove-prop-types',
			'@babel/plugin-proposal-export-namespace-from',
			'@babel/plugin-proposal-export-default-from',
		],
	};
};
