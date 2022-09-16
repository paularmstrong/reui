import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Component {
	name: `@reui/${string}`;
	example: MDXRemoteSerializeResult;
	filepath: string;
	frontmatter: Omit<matter.GrayMatterFile<string>, 'orig'>;
	route: string;
}

const rootPath = path.join(process.cwd(), '..', '@reui');

export async function getFrontmatter(component: string): Promise<Component> {
	const filepath = path.join(rootPath, component, 'src', 'docs.mdx');
	const { orig, ...frontmatter } = matter.read(filepath, { excerpt: true });
	const example = await serialize(frontmatter.excerpt || '');
	return {
		name: `@reui/${component}`,
		route: component,
		example,
		filepath,
		frontmatter,
	};
}

export function getDocs(): Array<string> {
	return glob.sync('*/src/docs.mdx', { cwd: rootPath }).map((doc) => doc.split('/')[0]);
}

export async function getAllDocs(): Promise<Array<Component>> {
	const docs = getDocs();
	const routes: Array<Component> = [];
	for (const doc of docs) {
		routes.push(await getFrontmatter(doc));
	}
	return routes;
}
