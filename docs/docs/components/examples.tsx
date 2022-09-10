import * as React from 'react';
import { Button, SnackBar, useSnacks, Item, SelectField } from '@reui/reui';

export function SelectFieldExample(props: React.ComponentProps<typeof SelectField>) {
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

export function SnackBarExample() {
	const { addSnack } = useSnacks();
	return (
		<div className="relative">
			<SnackBar />
			<Button
				onPress={() => {
					addSnack({
						children: <div>Example snack with timestamp {new Date().valueOf()}</div>,
					});
				}}
			>
				Add snack
			</Button>
		</div>
	);
}
