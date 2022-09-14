import * as React from 'react';
import clsx from 'clsx';
import { useRadioGroupState } from 'react-stately';
import type { RadioGroupState } from 'react-stately';
import { useFocusRing, useRadio, useRadioGroup, VisuallyHidden } from 'react-aria';
import type { AriaRadioGroupProps, AriaRadioProps } from 'react-aria';

const RadioContext = React.createContext<RadioGroupState>(
	// @ts-ignore
	null
);

interface RadioGroupProps extends AriaRadioGroupProps {
	children: Array<React.ReactElement<AriaRadioProps>>;
}

export function RadioGroup({ children, ...props }: RadioGroupProps) {
	const state = useRadioGroupState(props);
	const { radioGroupProps, labelProps } = useRadioGroup(props, state);

	return (
		<div {...radioGroupProps} className="flex flex-col gap-2">
			<span {...labelProps}>{props.label}</span>
			<RadioContext.Provider value={state}>{children}</RadioContext.Provider>
		</div>
	);
}

export function Radio(props: AriaRadioProps) {
	const state = React.useContext(RadioContext);
	const ref = React.useRef<HTMLInputElement>(null);
	const { inputProps, isSelected } = useRadio(props, state!, ref);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<label className="flex w-full cursor-pointer items-center gap-2">
			<div className="self-end">
				<VisuallyHidden>
					<input {...inputProps} {...focusProps} className="absolute left-48" ref={ref} />
				</VisuallyHidden>
				<div
					className={clsx(
						'flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white transition-all duration-100 dark:bg-gray-600',
						isFocusVisible && 'ring-4 ring-primary-500/50 dark:ring-primary-400/50',
						isSelected
							? 'border-[6px] border-primary-500 dark:border-primary-400'
							: 'border-gray-300 shadow-inner dark:border-gray-400'
					)}
				/>
			</div>

			<div className="inline-flex flex-grow leading-3">{props.children}</div>
		</label>
	);
}
