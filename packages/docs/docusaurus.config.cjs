'use strict';
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ReUI',
	tagline: 'Dinosaurs are cool',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.cjs'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/paularmstrong/reui/tree/main/packages/docs/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/paularmstrong/reui/tree/main/packages/docs/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'components',
				path: path.dirname(require.resolve('@reui/components')),
				sidebarPath: path.join(path.dirname(require.resolve('@reui/components')), '..', 'docs', 'sidebars.cjs'),
				routeBasePath: 'components',
				include: ['**/*.{md,mdx}'],
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'ReUI',
				logo: {
					alt: 'ReUI Logo',
					src: 'img/logo.svg',
				},
				items: [
					{ to: '/docs', label: 'Documentation', position: 'left' },
					{ to: '/components', label: 'Components', position: 'left' },
					{ to: '/blog', label: 'Blog', position: 'right' },
					{
						href: 'https://github.com/paularmstrong/reui',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Documentation',
						items: [
							{
								label: 'Introduction',
								to: '/docs',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/paularmstrong/reui',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} ReUI. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
