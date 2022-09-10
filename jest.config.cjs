'use strict';

const path = require('path');

/** @type {import('jest').Config} */
const config = {
	displayName: 'components',
	resetMocks: true,
	resetModules: true,
	restoreMocks: true,
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	rootDir: '.',
	setupFilesAfterEnv: [path.join(__dirname, 'config', 'jest', 'setup-browser.js')],
	testMatch: ['**/*.test.ts?(x)'],
	transformIgnorePatterns: ['node_modules'],
	transform: {
		'\\.[jt]sx?$': ['esbuild-jest', { sourcemap: true }],
	},
};

module.exports = config;
