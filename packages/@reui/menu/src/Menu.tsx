import * as React from 'react';
import clsx from 'clsx';
import {
	mergeProps,
	useMenu,
	useMenuItem,
	useMenuSection,
	useMenuTrigger,
	useOverlayPosition,
	useSeparator,
} from 'react-aria';
import type { AriaMenuItemProps, AriaMenuSectionProps } from 'react-aria';
import { useMenuTriggerState, useTreeState } from 'react-stately';
import type { MenuProps, MenuTriggerProps } from '@react-types/menu';
import type { TreeState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { Popover } from '@reui/popover';
import { Button } from '@reui/button';

interface MenuButtonProps<T> extends MenuTriggerProps, MenuProps<T> {
	label: React.ReactNode;
}

export function MenuButton<T extends object>(props: MenuButtonProps<T>) {
	const triggerRef = React.useRef<HTMLDivElement>(null);
	const popoverRef = React.useRef<HTMLDivElement>(null);
	const state = useMenuTriggerState(props);
	const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);

	const { overlayProps: positionProps } = useOverlayPosition({
		targetRef: triggerRef,
		overlayRef: popoverRef,
		placement: 'bottom',
		isOpen: state.isOpen,
	});

	return (
		<>
			<Button {...menuTriggerProps} ref={triggerRef} buttonStyle="plain">
				{props.label}
			</Button>
			{state.isOpen ? (
				<Popover
					className="mt-0 w-min"
					isOpen={state.isOpen}
					onClose={state.close}
					ref={popoverRef}
					position={positionProps.style}
				>
					{
						// @ts-ignore Revisit this – react-aria/stately types are a jumbled mess here
						<Menu {...mergeProps(props, menuProps)} />
					}
				</Popover>
			) : null}
		</>
	);
}

export function Menu<T extends object>(props: MenuProps<T>) {
	// Create menu state based on the incoming props
	const state = useTreeState(props);

	// Get props for the menu element
	const ref = React.useRef<HTMLUListElement>(null);
	const { menuProps } = useMenu(props, state, ref);

	return (
		<ul {...menuProps} ref={ref} className="flex flex-col p-1 outline-none">
			{[...state.collection].map((item) =>
				item.type === 'section' ? (
					<MenuSection key={item.key} section={item} state={state} />
				) : (
					<MenuItem key={item.key} item={item} state={state} />
				)
			)}
		</ul>
	);
}

interface MenuItemProps<T> extends AriaMenuItemProps {
	item: Node<T>;
	state: TreeState<T>;
}

export function MenuItem<T>({ item, state }: MenuItemProps<T>) {
	// Get props for the menu item element
	const ref = React.useRef<HTMLLIElement>(null);
	const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem({ key: item.key }, state, ref);

	return (
		<li
			{...menuItemProps}
			ref={ref}
			className={clsx(
				'flex cursor-default items-center justify-between rounded-md p-2 text-sm text-slate-800 outline-none dark:text-slate-300',
				isFocused && 'bg-primary-500/10 dark:bg-primary-600/40',
				isSelected && 'font-bold',
				{
					'text-slate-700 dark:text-slate-300': isDisabled,
					'text-primary-600 dark:text-primary-400': isFocused || isSelected,
				}
			)}
		>
			{item.rendered}
			{isSelected && <span aria-hidden="true">✅</span>}
		</li>
	);
}

interface MenuSectionProps<T> extends AriaMenuSectionProps {
	section: Node<T>;
	state: TreeState<T>;
}

function MenuSection<T>({ section, state }: MenuSectionProps<T>) {
	const { itemProps, headingProps, groupProps } = useMenuSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	});

	const { separatorProps } = useSeparator({
		elementType: 'li',
	});

	// If the section is not the first, add a separator element.
	// The heading is rendered inside an <li> element, which contains
	// a <ul> with the child items.
	return (
		<>
			{section.key !== state.collection.getFirstKey() && (
				<li
					{...separatorProps}
					style={{
						borderTop: '1px solid slate',
						margin: '2px 5px',
					}}
				/>
			)}
			<li {...itemProps}>
				{section.rendered && (
					<span
						{...headingProps}
						style={{
							fontWeight: 'bold',
							fontSize: '1.1em',
							padding: '2px 5px',
						}}
					>
						{section.rendered}
					</span>
				)}
				<ul
					{...groupProps}
					style={{
						padding: 0,
						listStyle: 'none',
					}}
				>
					{[...section.childNodes].map((node) => (
						<MenuItem key={node.key} item={node} state={state} />
					))}
				</ul>
			</li>
		</>
	);
}
