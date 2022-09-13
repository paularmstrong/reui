import { exec } from 'child_process';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import glob from 'glob';
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/* eslint-disable no-console */

async function build(packageJson) {
	const pkgs = glob.sync(`${root}/packages/@reui/*/package.json`);

	console.time('Total');
	const promises = [];

	for (const pkgPath of pkgs) {
		const { source: src, main, module: moduleFile, types, private: isPrivate, name } = require(pkgPath);
		if (!src || isPrivate) {
			continue;
		}
		const pkgRoot = path.dirname(pkgPath);
		const entryPoints = [path.resolve(pkgRoot, src)];

		const dts = types ? '--dts' : '';
		const formats = [];
		moduleFile && formats.push('esm');
		main && formats.push('cjs');

		promises.push(
			new Promise((resolve, reject) => {
				console.time(`Build ${name}`);
				exec(
					`yarn tsup-node ${entryPoints[0]} --format ${formats.join(',')} ${dts} --outDir ${path.join(
						pkgRoot,
						'dist'
					)}`,
					(err) => {
						console.timeEnd(`Build ${name}`);
						if (err) {
							reject(err);
							return;
						}
						resolve();
					}
				);
			})
		);
	}

	await Promise.all(promises);
	console.timeEnd('Total');
}

build();
