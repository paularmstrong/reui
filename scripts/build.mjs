import { execSync } from 'child_process';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import glob from 'glob';
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/* eslint-disable no-console */

const buildConfig = {
	bundle: true,
	sourcemap: true,
	target: ['esnext'],
	plugins: [nodeExternalsPlugin()],
};

async function build() {
	console.time('Total');
	const pkgs = glob.sync(`${root}/packages/@reui/*/package.json`);

	for (const pkgPath of pkgs) {
		const { source: src, main, module: moduleFile, private: isPrivate, name } = require(pkgPath);
		if (!src || isPrivate) {
			continue;
		}
		const pkgRoot = path.dirname(pkgPath);
		const entryPoints = [path.resolve(pkgRoot, src)];

		console.time(`Build ${name}`);
		if (moduleFile) {
			await esbuild.build({
				...buildConfig,
				plugins: [
					nodeExternalsPlugin({
						packagePath: pkgPath,
					}),
				],
				entryPoints,
				format: 'esm',
				outfile: path.resolve(pkgRoot, moduleFile),
			});
		}

		if (main) {
			await esbuild.build({
				...buildConfig,
				plugins: [
					nodeExternalsPlugin({
						packagePath: pkgPath,
					}),
				],
				entryPoints,
				format: 'cjs',
				outfile: path.resolve(pkgRoot, main),
			});
		}

		console.timeEnd(`Build ${name}`);
	}

	execSync('yarn tsc -b', { cwd: root });
	console.timeEnd('Total');
}

build();
