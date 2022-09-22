'use strict';
const path = require('path');
const glob = require('glob');

const packages = glob.sync('@reui/*', { cwd: path.join(__dirname, '..') });

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [require('remark-prism')],
		rehypePlugins: [],
	},
});

const withTM = require('next-transpile-modules')([...packages, 'react-aria']);

/** @type {import('next').NextConfig} */
module.exports = withTM(
	withMDX({
		pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
		distDir: 'dist',
		trailingSlash: true,
		reactStrictMode: false,
	})
);