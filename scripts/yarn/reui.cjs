const oRequire = require;

module.exports = {
	name: 'reUI',
	factory: (require) => {
		const { BaseCommand } = require('@yarnpkg/cli');
		const { Command, Option } = require('clipanion');
		const { mkdir, readFile, writeFile } = require('fs/promises');
		const { existsSync } = require('fs');
		const path = require('path');
		const glob = oRequire('glob');
		const handlebars = oRequire('handlebars');

		class CreateWorkspaceCommand extends BaseCommand {
			static paths = [['create-package']];

			static usage = Command.Usage({
				description: 'Generate a new reUI workspace',
				details: '',
				examples: [['Generate @reui/numberfield', 'yarn create-workspace NumberField']],
			});

			name = Option.String({ required: true });

			async execute() {
				const basePath = path.join(__dirname, 'templates', 'package');
				const shortname = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
				const name = `@reui/${shortname}`;
				const templates = glob.sync('**/*', { cwd: basePath, nodir: true });
				const vars = { shortname, name, component: this.name };
				const baseOutPath = path.join(__dirname, '..', '..', 'packages', '@reui', shortname);

				for (const tpl of templates) {
					const contents = await readFile(path.join(basePath, tpl), { encoding: 'utf-8' });
					const fn = handlebars.compile(contents);
					const result = fn(vars);
					const outFile = tpl.replace(/(__\w+__)/, (substr) => vars[substr.replace(/__/g, '')] || substr);

					const outPath = path.join(baseOutPath, outFile);

					if (!existsSync(path.dirname(outPath))) {
						await mkdir(path.dirname(outPath), { recursive: true });
					}

					await writeFile(outPath, result);
				}
			}
		}

		return {
			commands: [CreateWorkspaceCommand],
		};
	},
};
