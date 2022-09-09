import * as React from 'react';
import clsx from 'clsx';
import { useId } from 'react-aria';
import type { AriaProgressCircleProps } from '@react-types/progress';

interface Props extends AriaProgressCircleProps {
	children?: React.ReactNode;
}

export function ActivityIndicator(props: Props) {
	const labelId = useId();
	return (
		<div
			role="progressbar"
			className={clsx('flex flex-col items-center')}
			aria-labelledby={props.children ? labelId : undefined}
		>
			<svg viewBox="0 0 50 50" className="h-8 w-8 animate-spin">
				<circle
					cx="25"
					cy="25"
					r="20"
					fill="none"
					className="animate-stroke stroke-primary-600 stroke-[0.33rem]"
					strokeLinecap="round"
				/>
			</svg>
			{props.children ? (
				<div id={labelId} className="whitespace-nowrap">
					{props.children}
				</div>
			) : null}
		</div>
	);
}
