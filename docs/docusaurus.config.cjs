'use strict';
// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkPlugins = [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]];

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'reUI',
	tagline: 'Dinosaurs are cool',
	url: 'https://reui.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'paularmstrong',
	projectName: 'reui',

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
					editUrl: 'https://github.com/paularmstrong/reui/tree/main/docs/',
					remarkPlugins,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/paularmstrong/reui/tree/main/docs/',
					remarkPlugins,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'reUI',
				logo: {
					alt: 'reUI Logo',
					src: 'img/logo.svg',
				},
				items: [
					{ to: '/docs', label: 'Documentation', position: 'left' },
					{ to: '/docs/components', label: 'Components', position: 'left' },
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
				copyright: `Copyright ?? ${new Date().getFullYear()} reUI. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
