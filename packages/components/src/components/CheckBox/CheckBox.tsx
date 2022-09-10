import * as React from 'react';
import clsx from 'clsx';
import { useCheckboxGroupState, useToggleState } from 'react-stately';
import type { CheckboxGroupState } from 'react-stately';
import {
	mergeProps,
	useFocusRing,
	useCheckbox,
	useCheckboxGroup,
	useCheckboxGroupItem,
	useId,
	VisuallyHidden,
} from 'react-aria';
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
	errorMessage?: React.ReactNode;
	description?: React.ReactNode;
}
type CheckboxProps = Props & AriaCheckboxProps;
type CheckboxGroupProps = Props & AriaCheckboxGroupItemProps;

export function CheckBox(props: CheckboxProps | CheckboxGroupProps) {
	const groupState = React.useContext(CheckBoxContext);
	const state = useToggleState(props);
	const { CheckIcon } = useIcons();
	const ref = React.useRef<HTMLInputElement>(null);
	const { inputProps } = groupState
		? useCheckboxGroupItem(props as AriaCheckboxGroupItemProps, groupState, ref) // eslint-disable-line react-hooks/rules-of-hooks
		: useCheckbox(props, state, ref); // eslint-disable-line react-hooks/rules-of-hooks
	const { isFocusVisible, focusProps } = useFocusRing();
	const errorId = useId();
	const descriptionId = useId();

	const isDisabled = groupState?.isDisabled || props.isDisabled;
	const isSelected = groupState ? groupState.isSelected(props.value) : state.isSelected;
	const { errorMessage, description } = props;

	return (
		<div className="w-full">
			<label className="flex w-full cursor-pointer items-center justify-center gap-2">
				<VisuallyHidden>
					<input
						{...mergeProps(inputProps, focusProps)}
						aria-invalid={Boolean(errorMessage)}
						aria-describedby={
							errorMessage || description
								? `${errorMessage ? errorId : ''} ${description ? descriptionId : ''}`
								: undefined
						}
						ref={ref}
					/>
				</VisuallyHidden>

				<div
					className={clsx(
						'flex h-4 w-4 rounded-sm border-2 text-white transition-colors duration-150 dark:text-gray-800',
						isFocusVisible && 'ring-4 ring-primary-500/50 dark:ring-primary-400/50',
						isDisabled && 'border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-600',
						isSelected
							? 'border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400'
							: !isDisabled && 'border-gray-300 bg-white dark:border-gray-400 dark:bg-gray-600'
					)}
				>
					{isSelected ? <CheckIcon /> : null}
				</div>

				<div className={clsx('inline-flex flex-grow leading-3', isDisabled && 'text-gray-600 dark:text-gray-500')}>
					{props.children}
					{props.isRequired ? (
						<span aria-hidden="true" className="text-red-600 dark:text-red-400">
							*
						</span>
					) : null}
				</div>
			</label>

			{description ? (
				<div id={descriptionId} className="pl-6 pt-1 text-xs">
					{description}
				</div>
			) : null}
			{errorMessage ? (
				<div id={errorId} className="pl-6 pt-1 text-sm text-red-600 dark:text-red-400">
					{errorMessage}
				</div>
			) : null}
		</div>
	);
}
