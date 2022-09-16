import * as React from 'react';
import * as reUI from '@reui/reui';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import type { Component } from '../../utils/components';

interface Props {
	components: Array<Component>;
}

export default function Components(props: Props) {
	return (
		<div className="p-4">
			<h1>Components</h1>
			<nav>
				<ul className="grid auto-cols-fr grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
					{(props.components || []).map(({ route, example, frontmatter }) => {
						const { description, title = route } = frontmatter.data;
						return (
							<li key={route}>
								<Link href={`/component/${route}`}>
									<a className="group h-full">
										<div className="flex h-full flex-col gap-2">
											<div className="pointer-events-none flex h-full items-center justify-center justify-self-stretch rounded border border-gray-200 bg-gray-100 p-4 group-hover:shadow ">
												<div className="w-full blur-[1px] grayscale transition duration-150 group-hover:blur-none group-hover:grayscale-0">
													<MDXRemote
														{...example}
														// @ts-ignore shhh
														components={reUI}
													/>
												</div>
											</div>
											<div>
												<div className="text-sm font-medium">{title}</div>
												{description ? <div className="text-xs text-gray-600">{description}</div> : null}
											</div>
										</div>
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const { getAllDocs } = await import('../../utils/components');
	const components = await getAllDocs();

	return {
		props: {
			components,
		},
	};
};
