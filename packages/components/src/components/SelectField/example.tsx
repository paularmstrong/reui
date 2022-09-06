import * as React from 'react';
import { Item, SelectField } from '.';

export function Example(props: React.ComponentProps<typeof SelectField>) {
	return (
		<SelectField label="Favorite Animal" {...props}>
			<Item>Red Panda</Item>
			<Item>Cat</Item>
			<Item>Dog</Item>
			<Item>Aardvark</Item>
			<Item>Kangaroo</Item>
			<Item>Snake</Item>
			<Item>Ape</Item>
			<Item>Chimpanzee</Item>
			<Item>Penguin</Item>
			<Item>Lynx</Item>
			<Item>Impala</Item>
			<Item>Gorilla</Item>
			<Item>Scorpion</Item>
			<Item>Tarantula</Item>
			<Item>Shark</Item>
			<Item>Sea cow</Item>
			<Item>Narwhal</Item>
		</SelectField>
	);
}
