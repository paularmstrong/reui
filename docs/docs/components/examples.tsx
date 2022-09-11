import * as React from 'react';
import { Button, SnackBar, useSnacks, Item, SelectField } from '@reui/reui';

export function SelectFieldExample(props: React.ComponentProps<typeof SelectField>) {
	return (
		<SelectField label="Favorite Animal" {...props}>
			<Item key="red panda">Red Panda</Item>
			<Item key="cat">Cat</Item>
			<Item key="dog">Dog</Item>
			<Item key="aardvark">Aardvark</Item>
			<Item key="kangaroo">Kangaroo</Item>
			<Item key="snake">Snake</Item>
			<Item key="ape">Ape</Item>
			<Item key="chimpanzee">Chimpanzee</Item>
			<Item key="penguin">Penguin</Item>
			<Item key="lynx">Lynx</Item>
			<Item key="impala">Impala</Item>
			<Item key="gorilla">Gorilla</Item>
			<Item key="scorpion">Scorpion</Item>
			<Item key="tarantula">Tarantula</Item>
			<Item key="shark">Shark</Item>
			<Item key="sea cow">Sea cow</Item>
			<Item key="narwhal">Narwhal</Item>
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
