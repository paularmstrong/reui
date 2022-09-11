'use strict';

module.exports = {
	git: {
		commitMessage: 'chore: release v${version}',
		requireCleanWorkingDir: true,
	},
	github: {
		release: true,
	},
	plugins: {
		'@release-it-plugins/workspaces': {
			skipChecks: true,
			workspaces: ['./packages/@reui/*', './packages/reui'],
		},
		'@release-it/conventional-changelog': {
			preset: 'conventionalcommits',
			infile: 'docs/docs/changelog.md',
			header: '# Changelog',
			strictSemVer: true,
		},
	},
	hooks: {
		'before:init': ['yarn build'],
	},
	npm: false,
};
