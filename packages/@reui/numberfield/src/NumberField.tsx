import * as React from 'react';
import clsx from 'clsx';
import { Button } from '@reui/button';
import { useIcons } from '@reui/icons';
import { mergeProps, useFocus, useLocale, useNumberField } from 'react-aria';
import type { AriaNumberFieldProps } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

export function NumberField(props: AriaNumberFieldProps) {
	const { locale } = useLocale();
	const { ChevronDownIcon, ChevronUpIcon } = useIcons();
	function handleChange(value: number) {
		setHasValue(isFinite(value));
		props.onChange && props.onChange(value);
	}
	const state = useNumberFieldState({ ...props, locale, onChange: handleChange });
	const ref = React.useRef<HTMLInputElement>(null);
	const [isFocused, setFocus] = React.useState(false);
	const [hasValue, setHasValue] = React.useState(Boolean(props.defaultValue || props.value));
	const { focusProps } = useFocus({
		onFocus() {
			setFocus(true);
		},
		onBlur() {
			setFocus(false);
		},
	});
	const {
		labelProps,
		descriptionProps,
		errorMessageProps,
		groupProps,
		inputProps,
		incrementButtonProps,
		decrementButtonProps,
	} = useNumberField(props, state, ref);

	return (
		<div className="w-full">
			<div
				className={clsx(
					'flex h-14 items-center rounded border-2 bg-white py-2 pl-4 pr-1 dark:bg-gray-800',
					isFocused && 'ring-4 ring-primary-500/50 dark:ring-primary-400/50',
					props.isDisabled && 'cursor-not-allowed opacity-70',
					props.errorMessage ? 'border-red-600 dark:border-red-400' : 'border-gray-200 dark:border-gray-600'
				)}
			>
				<label {...labelProps} className="flex grow items-center space-x-2 overflow-hidden">
					<div {...groupProps} className="relative z-0 flex grow items-center justify-items-stretch overflow-hidden">
						<input
							{...mergeProps(inputProps, focusProps)}
							ref={ref}
							className="mt-4 h-8 min-w-0 flex-shrink grow bg-transparent font-normal focus:outline-none focus:ring-0"
						/>

						<div
							className={clsx(
								'absolute top-3 inline-flex w-full transform gap-1 overflow-hidden text-ellipsis rounded bg-white pr-6 transition-[font-size,color,transform] duration-100 ease-in-out dark:bg-gray-800',
								(isFocused || hasValue) && '-translate-y-2 text-xs font-medium text-primary-700 dark:text-primary-300'
							)}
						>
							<span className="overflow-hidden text-ellipsis whitespace-nowrap">{props.label}</span>
							{props.isRequired ? (
								<span aria-hidden className="text-red-600 dark:text-red-400">
									*
								</span>
							) : null}
						</div>
						<div className="relative z-10 flex flex-col-reverse">
							<Button {...decrementButtonProps} buttonStyle="plain" className="px-2 py-1">
								<div className="h-full w-4 text-gray-800 dark:text-gray-300">
									<ChevronDownIcon />
								</div>
							</Button>
							<Button {...incrementButtonProps} buttonStyle="plain" className="px-2 py-1">
								<div className="h-full w-4 text-gray-800 dark:text-gray-300">
									<ChevronUpIcon />
								</div>
							</Button>
						</div>
					</div>
				</label>
			</div>

			{props.description ? (
				<div {...descriptionProps} className="pl-3 pt-1 text-xs">
					{props.description}
				</div>
			) : null}
			{props.errorMessage ? (
				<div {...errorMessageProps} className="pl-3 pt-1 text-sm text-red-600 dark:text-red-400">
					{props.errorMessage}
				</div>
			) : null}
		</div>
	);
}
