import * as React from 'react';
import { useFocus, useTextField } from 'react-aria';
import type { AriaTextFieldProps } from 'react-aria';
import clsx from 'clsx';

interface Props extends AriaTextFieldProps {
	leadingIcon?: React.ComponentType<any>;
	trailingIcon?: React.ComponentType<any>;
}

export function TextField({ leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...props }: Props) {
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
	const [hasValue, setHasValue] = React.useState(false);
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
					'flex h-14 items-center rounded border-2 bg-white py-2 px-4',
					isFocused && 'ring-4 ring-primary-500 ring-opacity-50',
					props.isDisabled && 'cursor-not-allowed opacity-70',
					props.errorMessage ? 'border-red-600' : 'border-gray-200'
				)}
			>
				<label {...labelProps} className="flex grow items-center space-x-2">
					{LeadingIcon ? (
						<div aria-hidden className="h-full w-10">
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
								'absolute top-3 inline-flex transform gap-1 rounded bg-white transition-[font-size,color,transform] duration-100 ease-in-out',
								(isFocused || hasValue) && '-translate-y-2 text-xs font-medium text-primary-700'
							)}
						>
							{props.label}
							{props.isRequired ? (
								<span aria-hidden className="text-red-600">
									*
								</span>
							) : null}
						</div>
					</div>

					{TrailingIcon ? (
						<div aria-hidden className="h-10 w-10">
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
				<div {...errorMessageProps} className="pl-3 pt-1 text-sm text-red-600">
					{props.errorMessage}
				</div>
			) : null}
		</div>
	);
}