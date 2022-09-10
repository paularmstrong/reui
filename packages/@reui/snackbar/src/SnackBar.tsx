import * as React from 'react';
import clsx from 'clsx';
import { Snack } from './Snack';
import { useSnacks } from './SnackContext';
import type { SnackDef } from './SnackContext';

interface Props {
	position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export function SnackBar({ position = 'bottom-center' }: Props) {
	const { removeSnack, snacks } = useSnacks();
	const [visible, setVisible] = React.useState<SnackDef | null>(null);

	React.useEffect(() => {
		if (!snacks.length || visible) {
			return;
		}

		const newVisible = snacks[0];
		setTimeout(() => {
			setVisible(newVisible);
			setTimeout(() => {
				removeSnack(newVisible);
				setVisible(null);
			}, 5000);
		}, 500);
	}, [snacks, visible]);

	return (
		<div
			className={clsx('pointer-events-none fixed inset-0 z-10 flex p-4 md:p-8', {
				'items-start justify-start': position === 'top-left',
				'items-start justify-center': position === 'top-center',
				'items-start justify-end': position === 'top-right',
				'items-end justify-start': position === 'bottom-left',
				'items-end justify-center': position === 'bottom-center',
				'items-end justify-end': position === 'bottom-right',
			})}
		>
			{visible ? <Snack {...visible} /> : null}
		</div>
	);
}
