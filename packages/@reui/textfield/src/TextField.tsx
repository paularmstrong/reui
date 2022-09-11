import * as React from 'react';
import { useFocus, useTextField } from 'react-aria';
import type { AriaTextFieldProps } from 'react-aria';
import clsx from 'clsx';

interface TextFieldProps extends AriaTextFieldProps {
	leadingIcon?: React.ComponentType<any>;
	trailingIcon?: React.ComponentType<any>;
}

export function TextField({ leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...props }: TextFieldProps) {
	function handleChange(value: string) {
		setHasValue(!!value);
		props.onChange && props.onChange(value);
	}

	const ref = React.useRef<HTMLInputElement>(null);
	const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
		{ ...props, onChange: handleChange },
		ref
	);
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

	return (
		<div className="w-full">
			<div
				className={clsx(
					'flex h-14 items-center rounded border-2 bg-white py-2 px-4 dark:bg-gray-800',
					isFocused && 'ring-4 ring-primary-500/50 dark:ring-primary-400/50',
					props.isDisabled && 'cursor-not-allowed opacity-70',
					props.errorMessage ? 'border-red-600 dark:border-red-400' : 'border-gray-200 dark:border-gray-600'
				)}
			>
				<label {...labelProps} className="flex grow items-center space-x-2">
					{LeadingIcon ? (
						<div aria-hidden className="h-full w-4 text-gray-800 dark:text-gray-300">
							<LeadingIcon />
						</div>
					) : null}

					<div className="relative z-0 flex grow items-center justify-items-stretch">
						<input
							{...inputProps}
							{...focusProps}
							ref={ref}
							className="mt-4 h-8 grow bg-transparent font-normal focus:outline-none focus:ring-0"
						/>

						<div
							className={clsx(
								'absolute top-3 inline-flex transform gap-1 rounded bg-white transition-[font-size,color,transform] duration-100 ease-in-out dark:bg-gray-800',
								(isFocused || hasValue) && '-translate-y-2 text-xs font-medium text-primary-700 dark:text-primary-300'
							)}
						>
							{props.label}
							{props.isRequired ? (
								<span aria-hidden className="text-red-600 dark:text-red-400">
									*
								</span>
							) : null}
						</div>
					</div>

					{TrailingIcon ? (
						<div aria-hidden className="h-full w-4 text-gray-800 dark:text-gray-300">
							<TrailingIcon />
						</div>
					) : null}
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
