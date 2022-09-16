import * as React from 'react';
import clsx from 'clsx';
import { HiddenSelect, mergeProps, useButton, useFocusRing, useOverlayPosition, useSelect } from 'react-aria';
import type { AriaSelectOptions } from 'react-aria';
import { useSelectState } from 'react-stately';
import { Popover } from '@reui/popover';
import { ListBox } from '@reui/listbox';
import { useIcons } from '@reui/icons';

export { Item } from 'react-stately';

export function SelectField<T extends Record<string, unknown>>(props: AriaSelectOptions<T>) {
	const triggerRef = React.useRef<HTMLButtonElement>(null);

	const popoverRef = React.useRef<HTMLDivElement>(null);

	const state = useSelectState(props);
	const { ChevronDownIcon, ChevronUpIcon } = useIcons();
	const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } = useSelect(
		props,
		state,
		triggerRef
	);
	const { buttonProps } = useButton(triggerProps, triggerRef);
	const { focusProps, isFocusVisible } = useFocusRing();

	const { overlayProps: positionProps } = useOverlayPosition({
		targetRef: triggerRef,
		overlayRef: popoverRef,
		placement: 'bottom',
		isOpen: state.isOpen,
	});

	const listBoxRef = React.useRef<HTMLUListElement>(null);

	return (
		<div className="w-full">
			<div
				className={clsx(
					'relative flex h-14 items-center rounded border-2 bg-white dark:bg-gray-800',
					isFocusVisible && 'ring-4 ring-primary-500/50 dark:ring-primary-400/50',
					props.isDisabled && 'cursor-not-allowed opacity-70',
					props.errorMessage ? 'border-red-600 dark:border-red-400' : 'border-gray-200 dark:border-gray-600'
				)}
			>
				<button {...mergeProps(buttonProps, focusProps)} className="absolute inset-0 outline-none" ref={triggerRef}>
					<HiddenSelect state={state} triggerRef={triggerRef} label={props.label} name={props.name} />
				</button>
				<div className="pointer-events-none flex grow flex-row items-center space-x-2 overflow-hidden py-2 px-4">
					<div className="relative flex grow items-center justify-items-stretch overflow-hidden">
						<span
							{...valueProps}
							className="pointer-events-none mt-4 h-8 grow overflow-hidden text-ellipsis whitespace-nowrap bg-transparent"
						>
							{state.selectedItem?.rendered || ''}
						</span>
						<div
							{...labelProps}
							className={clsx(
								'absolute top-3 inline-flex w-full transform gap-1 overflow-hidden text-ellipsis rounded bg-white transition-[font-size,color,transform] duration-100 ease-in-out dark:bg-gray-800',
								Boolean(state.selectedItem) &&
									'-translate-y-2 text-xs font-medium text-primary-700 dark:text-primary-300'
							)}
						>
							<span className="overflow-hidden text-ellipsis whitespace-nowrap">{props.label}</span>
							{props.isRequired ? (
								<span aria-hidden className="text-red-600 dark:text-red-400">
									*
								</span>
							) : null}
						</div>
					</div>

					<span className="relative z-10 w-4 text-base text-gray-800 dark:text-gray-300">
						{state.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
					</span>
				</div>
				{state.isOpen ? (
					<Popover isOpen={state.isOpen} onClose={state.close} ref={popoverRef} position={positionProps.style}>
						<ListBox {...menuProps} state={state} ref={listBoxRef} />
					</Popover>
				) : null}
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
