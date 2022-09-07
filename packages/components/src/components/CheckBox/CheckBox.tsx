import * as React from 'react';
import clsx from 'clsx';
import { useCheckboxGroupState, useToggleState } from 'react-stately';
import type { CheckboxGroupState } from 'react-stately';
import { useFocusRing, useCheckbox, useCheckboxGroup, useCheckboxGroupItem, VisuallyHidden } from 'react-aria';
import type { AriaCheckboxGroupProps, AriaCheckboxGroupItemProps, AriaCheckboxProps } from 'react-aria';
import { useIcons } from '../../context';

const CheckBoxContext = React.createContext<CheckboxGroupState>(
	// @ts-ignore
	null
);

interface GroupProps extends AriaCheckboxGroupProps {
	children: Array<React.ReactElement<AriaCheckboxProps>>;
}

export function CheckBoxGroup({ children, ...props }: GroupProps) {
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps } = useCheckboxGroup(props, state);

	return (
		<div {...groupProps} className="flex flex-col gap-2">
			<span {...labelProps}>{props.label}</span>
			<CheckBoxContext.Provider value={state}>{children}</CheckBoxContext.Provider>
		</div>
	);
}

interface Props {
	value: string;
}
type CheckboxProps = Props & AriaCheckboxProps;
type CheckboxGroupProps = Props & AriaCheckboxGroupItemProps;

export function CheckBox(props: CheckboxProps | CheckboxGroupProps) {
	const groupState = React.useContext(CheckBoxContext);
	const { CheckIcon } = useIcons();
	const ref = React.useRef<HTMLInputElement>(null);
	const { inputProps } = groupState
		? useCheckboxGroupItem(props as AriaCheckboxGroupItemProps, groupState, ref) // eslint-disable-line react-hooks/rules-of-hooks
		: useCheckbox(props, useToggleState(props), ref); // eslint-disable-line react-hooks/rules-of-hooks
	const { isFocusVisible, focusProps } = useFocusRing();

	const isDisabled = groupState.isDisabled || props.isDisabled;
	const isSelected = groupState.isSelected(props.value);

	return (
		<label className="flex w-full cursor-pointer items-center justify-center gap-2">
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} className="absolute left-48" ref={ref} />
			</VisuallyHidden>
			<div
				className={clsx(
					'flex h-4 w-4 rounded-sm border-2 text-white transition-colors duration-150',
					isFocusVisible && 'ring-4 ring-primary-500 ring-opacity-50',
					isDisabled && 'border-gray-200 bg-gray-100',
					isSelected ? 'border-primary-500 bg-primary-500 text-white' : !isDisabled && 'border-gray-300 bg-white'
				)}
			>
				{isSelected ? <CheckIcon /> : null}
			</div>

			<div className={clsx('inline-flex flex-grow leading-3', isDisabled && 'text-gray-600')}>{props.children}</div>
		</label>
	);
}
