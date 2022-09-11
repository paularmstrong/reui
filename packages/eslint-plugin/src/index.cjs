'use strict';

module.exports = {
	configs: {
		base: {
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},

			env: {
				commonjs: false,
				es6: true,
			},

			plugins: ['tailwindcss', '@typescript-eslint'],
			extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'plugin:@typescript-eslint/recommended'],

			rules: {
				'no-console': 'error',
				'no-undef': 'off',
				indent: 'off', // prettier instead

				'@typescript-eslint/ban-ts-comment': 'off', // sometimes you're smarter
				'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',

				'tailwindcss/classnames-order': 'error',
				'tailwindcss/enforces-negative-arbitrary-values': 'error',
				'tailwindcss/enforces-shorthand': 'error',
				'tailwindcss/migration-from-tailwind-2': 'off',
				'tailwindcss/no-arbitrary-value': 'off',
				'tailwindcss/no-custom-classname': 'error',
				'tailwindcss/no-contradicting-classname': 'error',
			},

			settings: {
				tailwindcss: {
					config: require.resolve('@reui/tailwind-config'),
				},
			},

			overrides: [
				{
					files: ['**/*.cjs'],
					env: { node: true, commonjs: true },
				},
				{
					files: ['**/*.tsx'],
					plugins: ['react', 'react-hooks'],
					extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
					settings: {
						react: {
							version: 'detect',
						},
					},
				},
				{
					files: ['**/*.test.tsx', '**/*.test.ts'],
					plugins: ['jest'],
					extends: ['plugin:jest/recommended'],
					rules: {
						'jest/consistent-test-it': ['error', { fn: 'test' }],
					},
				},
			],
		},
	},
};
