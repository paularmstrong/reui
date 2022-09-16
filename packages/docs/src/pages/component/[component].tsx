import * as React from 'react';
import * as reUI from '@reui/reui';
import { SSRProvider } from 'react-aria';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Component } from '../../utils/components';

interface Props {
	content: MDXRemoteSerializeResult;
	components: Array<Component>;
	data: { title: string; description?: string };
}

export default function Component({ content, components, data }: Props) {
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<meta name="description" content={data.description || ''} />
			</Head>
			<nav>
				<ul>
					<li>
						<Link href="/component/">
							<a>Components</a>
						</Link>
						<ul>
							{components.map(({ route, frontmatter }) => (
								<li key={route}>
									<Link href={route}>{frontmatter.data.title || route}</Link>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</nav>

			<div className="p-4">
				<MDXRemote
					{...content}
					// @ts-ignore shhh
					components={{ ...reUI, SSRProvider }}
				/>
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	if (!context.params?.component) {
		throw new Error('Component does not exist');
	}

	const { getAllDocs } = await import('../../utils/components');
	const components = await getAllDocs();
	const route = components.find(({ route }) => route === context.params?.component);

	if (!route) {
		throw new Error('Route not found');
	}

	const content = await serialize(route.frontmatter.content.split('---')[1]);

	return {
		props: {
			content,
			data: route.frontmatter.data as Props['data'],
			components,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { getDocs } = await import('../../utils/components');
	const docs = getDocs();

	const paths = docs.map((component) => ({ params: { component } }));

	return {
		paths,
		fallback: false,
	};
};
