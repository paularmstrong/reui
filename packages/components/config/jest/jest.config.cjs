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
	rootDir: '../../src',
	setupFilesAfterEnv: [path.join(__dirname, 'setup-browser.js')],
	testMatch: ['**/*.test.ts?(x)'],
	transformIgnorePatterns: ['node_modules'],
	transform: {
		'\\.[jt]sx?$': ['babel-jest', { rootMode: 'upward' }],
	},
};

module.exports = config;
