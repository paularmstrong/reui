import * as React from 'react';
import { mergeProps, useFocus, useTextField } from 'react-aria';
import type { AriaTextFieldProps } from 'react-aria';
import { useIcons } from '@reui/icons';
import type { IconContext } from '@reui/icons';
import clsx from 'clsx';

interface TextFieldProps extends AriaTextFieldProps {
	leadingIcon?: keyof IconContext;
	leadingIconProps?: React.ComponentProps<'svg'>;
	trailingIcon?: keyof IconContext;
	trailingIconProps?: React.ComponentProps<'svg'>;
}

export function TextField({
	leadingIcon,
	leadingIconProps,
	trailingIcon,
	trailingIconProps,
	...props
}: TextFieldProps) {
	const icons = useIcons();
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

	const LeadingIcon = (leadingIcon && icons[leadingIcon]) || null;
	const TrailingIcon = (trailingIcon && icons[trailingIcon]) || null;

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
						<div
							aria-hidden
							className={clsx('h-full w-4 text-gray-800 dark:text-gray-300', leadingIconProps?.className)}
						>
							<LeadingIcon {...leadingIconProps} />
						</div>
					) : null}

					<div className="relative z-0 flex grow items-center justify-items-stretch">
						<input
							{...mergeProps(inputProps, focusProps)}
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
						<div
							aria-hidden
							className={clsx('h-full w-4 text-gray-800 dark:text-gray-300', trailingIconProps?.className)}
						>
							<TrailingIcon {...trailingIconProps} />
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
