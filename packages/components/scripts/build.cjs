'use strict';
const esbuild = require('esbuild');
const { mkdir, rm, writeFile } = require('fs/promises');
const { execSync } = require('child_process');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const path = require('path');

const root = path.resolve(__dirname, '..');

const packageJson = require(path.join(root, 'package.json'));

/* eslint-disable no-console */

const buildConfig = {
	entryPoints: [require.resolve('@reui/components')],
	bundle: true,
	sourcemap: true,
	target: ['esnext'],
	plugins: [nodeExternalsPlugin()],
};

async function build() {
	console.time('build');
	console.time('setup');
	try {
		await rm(path.join(root, 'dist'), { recursive: true, force: true });
		await mkdir(path.join(root, 'dist'));
	} catch (e) {
		if (e.code !== 'ENOENT') {
			throw e;
		}
	}
	console.timeEnd('setup');

	console.time('build esm');
	await esbuild.build({
		...buildConfig,
		outfile: path.join(root, 'dist', 'index.js'),
		format: 'esm',
	});
	console.timeEnd('build esm');

	console.time('build cjs');
	await esbuild.build({
		...buildConfig,
		outfile: path.join(root, 'dist', 'index.cjs'),
	});
	console.timeEnd('build cjs');

	console.time('build ts defs');
	execSync('yarn workspace @reui/components tsc -p tsconfig.build.json', { cwd: root });
	console.timeEnd('build ts defs');

	console.time('write package.json');
	await writeFile(
		path.join(root, 'dist', 'package.json'),
		JSON.stringify(
			{
				...packageJson,
				main: './index.cjs',
				module: './index.js',
				typings: './index.d.ts',
			},
			null,
			2
		)
	);
	console.timeEnd('write package.json');
	console.timeEnd('build');
}

build();
