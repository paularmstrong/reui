'use strict';

module.exports = {
	git: {
		commitMessage: 'chore: release v${version}',
		requireCleanWorkingDir: false,
	},
	github: {
		release: true,
	},
	plugins: {
		'@release-it-plugins/workspaces': true,
		'@release-it/conventional-changelog': {
			preset: 'conventionalcommits',
			infile: 'docs/docs/changelog.md',
			header: '# Changelog',
			strictSemVer: true,
		},
	},
};
