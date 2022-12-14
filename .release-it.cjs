'use strict';

module.exports = {
	git: {
		commitMessage: 'chore: release v${version}',
		requireCleanWorkingDir: true,
	},
	plugins: {
		'@release-it-plugins/workspaces': {
			skipChecks: true,
			workspaces: ['packages/@reui/*'],
		},
		'@release-it/conventional-changelog': {
			preset: {
				name: 'conventionalcommits',
				types: [
					{ type: 'fix', section: '๐ Bug Fixes' },
					{ type: 'feat', section: '๐ Features' },
					{ type: 'infra', section: '๐ Internal improvements', hidden: true },
					{ type: 'perf', section: 'โก๏ธ Performance enhanchements' },
					{ type: 'chore', section: '๐งผ Chores', hidden: true },
					{ type: 'test', section: 'โ Test coverage', hidden: true },
					{ type: 'docs', section: '๐ Documentation' },
					{ type: 'refactor', section: 'โป๏ธ Refactors' },
				],
			},
			infile: 'docs/docs/changelog.md',
			header: '# Changelog',
		},
	},
	hooks: {
		'after:@release-it/conventional-changelog:bump': ['yarn'],
		'before:init': ['yarn build'],
	},
	npm: false,
	github: false,
};
