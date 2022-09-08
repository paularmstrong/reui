import * as React from 'react';
import { Button } from '../Button';
import { SnackBar } from '.';
import { useSnacks } from '../../context';

export function Example() {
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
