import * as React from 'react';
import { useButton } from 'react-aria';
import type { AriaButtonProps } from 'react-aria';
import clsx from 'clsx';

type Color = 'primary' | 'red' | 'green' | 'gray';

interface SharedButtonProps extends AriaButtonProps {
	className?: string;
	color?: Color;
	buttonStyle?: 'primary' | 'secondary' | 'plain';
}

const ButtonElement = {
	primary: PrimaryButton,
	secondary: SecondaryButton,
	plain: PlainButton,
};

export function Button({ buttonStyle = 'primary', ...props }: SharedButtonProps) {
	const Element = ButtonElement[buttonStyle];
	return <Element {...props} />;
}

interface ButtonProps extends AriaButtonProps {
	className?: string;
	color?: Color;
}

function PrimaryButton({ color = 'primary', ...props }: ButtonProps) {
	const ref = React.useRef<HTMLDivElement | HTMLAnchorElement>(null);
	const Element = props.href ? 'a' : 'div';
	const { buttonProps } = useButton({ ...props, type: 'button', elementType: Element }, ref);

	return (
		<Element
			{...buttonProps}
			// @ts-ignore no good way to do this
			ref={ref}
			className={clsx(
				'inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold text-white shadow outline-none transition hover:shadow-md focus:shadow-xl focus:outline-none focus:ring-4',
				props.isDisabled
					? 'cursor-not-allowed bg-gray-400'
					: {
							'bg-primary-500 focus:bg-primary-400 focus:ring-primary-500/50 active:bg-primary-600 dark:ring-primary-400/50':
								color === 'primary',
							'bg-red-500 focus:bg-red-400 focus:ring-red-500/50 active:bg-red-600': color === 'red',
							'bg-green-500 focus:bg-green-400 focus:ring-green-500/50 active:bg-green-600': color === 'green',
							'bg-gray-500 focus:bg-gray-400 focus:ring-primary-500/50 active:bg-gray-600 dark:ring-primary-400/50':
								color === 'gray',
					  }, // eslint-disable-line no-mixed-spaces-and-tabs
				props.className
			)}
		>
			{props.children}
		</Element>
	);
}

function PlainButton({ color = 'primary', ...props }: ButtonProps) {
	const ref = React.useRef<HTMLDivElement | HTMLAnchorElement>(null);
	const Element = props.href ? 'a' : 'div';
	const { buttonProps } = useButton({ ...props, type: 'button', elementType: Element }, ref);

	return (
		<Element
			{...buttonProps}
			// @ts-ignore no good way to do this
			ref={ref}
			className={clsx(
				'inline-flex cursor-pointer flex-row items-center gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4',
				props.isDisabled
					? 'cursor-not-allowed text-gray-500'
					: {
							'text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500/50 active:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-400/50':
								color === 'primary',
							'text-red-500 hover:bg-red-500/10 focus:ring-red-500/50 active:bg-red-500/10 dark:text-red-400':
								color === 'red',
							'text-green-500 hover:bg-green-500/10 focus:ring-green-500/50 active:bg-green-500/10 dark:text-green-400':
								color === 'green',
							'text-gray-500 hover:bg-gray-500/10 focus:ring-primary-500/50 active:bg-gray-500/10 dark:ring-primary-400/50':
								color === 'gray',
					  }, // eslint-disable-line no-mixed-spaces-and-tabs
				props.className
			)}
		>
			{props.children}
		</Element>
	);
}

function SecondaryButton({ color = 'primary', ...props }: ButtonProps) {
	const ref = React.useRef<HTMLDivElement | HTMLAnchorElement>(null);
	const Element = props.href ? 'a' : 'div';
	const { buttonProps } = useButton({ ...props, type: 'button', elementType: Element }, ref);

	return (
		<Element
			{...buttonProps}
			// @ts-ignore no good way to do this
			ref={ref}
			className={clsx(
				'inline-flex cursor-pointer flex-row items-baseline gap-2 space-x-1 whitespace-nowrap rounded px-4 py-2 text-lg font-bold outline-none transition focus:outline-none focus:ring-4',
				props.isDisabled
					? 'cursor-not-allowed border-2 border-gray-500 text-gray-500'
					: {
							'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500/50 active:bg-primary-500/10 dark:border-primary-400 dark:text-primary-400 dark:ring-primary-400/50':
								color === 'primary',
							'border-2 border-red-500 text-red-500 hover:bg-red-500/10	focus:ring-red-500/50 active:bg-red-500/10 dark:border-red-400 dark:text-red-400':
								color === 'red',
							'border-2 border-green-500 text-green-500 hover:bg-green-500/10 focus:ring-green-500/50 active:bg-green-500/10 dark:border-green-400 dark:text-green-400':
								color === 'green',
							'border-2 border-gray-500 text-gray-500 hover:bg-gray-500/10 focus:ring-primary-500/50 active:bg-gray-500/10 dark:ring-primary-400/50':
								color === 'gray',
					  }, // eslint-disable-line no-mixed-spaces-and-tabs
				props.className
			)}
		>
			{props.children}
		</Element>
	);
}
