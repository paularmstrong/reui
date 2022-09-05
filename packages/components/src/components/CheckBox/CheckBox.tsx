import * as React from 'react';
import clsx from 'clsx';
import { useCheckboxGroupState, useToggleState } from 'react-stately';
import type { CheckboxGroupState } from 'react-stately';
import { useFocusRing, useCheckbox, useCheckboxGroup, useCheckboxGroupItem, VisuallyHidden } from 'react-aria';
import type { AriaCheckboxGroupProps, AriaCheckboxGroupItemProps, AriaCheckboxProps } from 'react-aria';

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
					'flex h-4 w-4 rounded-sm border-2 transition-colors duration-150',
					isFocusVisible && 'ring-4 ring-primary-500 ring-opacity-50',
					isDisabled && 'border-gray-200 bg-gray-100',
					isSelected
						? 'border-primary-500 bg-primary-500 bg-[url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")] text-white'
						: !isDisabled && 'border-gray-300 bg-white'
				)}
			></div>

			<div className={clsx('inline-flex flex-grow leading-3', isDisabled && 'text-gray-600')}>{props.children}</div>
		</label>
	);
}
