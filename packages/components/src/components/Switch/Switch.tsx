import * as React from 'react';
import clsx from 'clsx';
import { useFocusRing, useSwitch, VisuallyHidden } from 'react-aria';
import { useToggleState } from 'react-stately';
import type { AriaSwitchProps } from 'react-aria';

interface Props extends AriaSwitchProps {
	labelPosition?: 'before' | 'after';
}

export function Switch({ labelPosition = 'after', ...props }: Props) {
	const ref = React.useRef<HTMLInputElement>(null);
	const state = useToggleState(props);
	const { inputProps } = useSwitch(props, state, ref);
	const { focusProps, isFocusVisible } = useFocusRing();

	return (
		<label className="flex w-full cursor-pointer items-center gap-2">
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>

			{props.children && labelPosition === 'before' ? (
				<div className="inline-flex flex-grow">{props.children}</div>
			) : null}

			<div className="relative mr-1 h-5 w-8 self-center">
				<div
					className={clsx(
						'absolute top-1 h-3 w-full rounded-full shadow-inner',
						!state.isSelected ? 'bg-gray-300' : 'bg-primary-300'
					)}
				/>
				<div
					className={clsx(
						'absolute inset-y-0 left-0 h-5 w-5 rounded-full shadow-md ring-opacity-50 transition-all duration-150',
						isFocusVisible && 'ring-4 ring-primary-500',
						state.isSelected ? 'translate-x-full bg-primary-600' : '-translate-x-2 bg-white'
					)}
				/>
			</div>

			{props.children && labelPosition === 'after' ? (
				<div className="inline-flex flex-grow leading-3">{props.children}</div>
			) : null}
		</label>
	);
}
