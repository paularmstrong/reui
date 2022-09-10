import * as React from 'react';
import clsx from 'clsx';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from 'react-stately';
import type { Node } from '@react-types/shared';
import { useListBox, useListBoxSection, useOption } from 'react-aria';
import { useIcons } from '../../context';

interface ListBoxProps extends AriaListBoxOptions<unknown> {
	state: ListState<unknown>;
}

interface SectionProps {
	section: Node<unknown>;
	state: ListState<unknown>;
}

interface OptionProps {
	item: Node<unknown>;
	state: ListState<unknown>;
}

export const ListBox = React.forwardRef<HTMLUListElement, ListBoxProps>(function ListBox(props, ref) {
	const { state } = props;
	const { listBoxProps } = useListBox(props, state, ref as React.RefObject<HTMLUListElement>);

	return (
		<ul {...listBoxProps} ref={ref} className="flex flex-col p-1 outline-none">
			{[...state.collection].map((item) =>
				item.type === 'section' ? (
					<ListBoxSection key={item.key} section={item} state={state} />
				) : (
					<Option key={item.key} item={item} state={state} />
				)
			)}
		</ul>
	);
});

function ListBoxSection({ section, state }: SectionProps) {
	const { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		'aria-label': section['aria-label'],
	});

	return (
		<li {...itemProps} className="pt-2">
			{section.rendered && (
				<span {...headingProps} className="mx-3 text-xs font-bold uppercase text-gray-500">
					{section.rendered}
				</span>
			)}
			<ul {...groupProps}>
				{[...section.childNodes].map((node) => (
					<Option key={node.key} item={node} state={state} />
				))}
			</ul>
		</li>
	);
}

function Option({ item, state }: OptionProps) {
	const ref = React.useRef<HTMLLIElement>(null);
	const { CheckIcon } = useIcons();
	const { optionProps, isDisabled, isSelected, isFocused } = useOption(
		{
			key: item.key,
			shouldSelectOnPressUp: !state.selectionManager.isSelected(item.key),
		},
		state,
		ref
	);

	return (
		<li
			{...optionProps}
			ref={ref}
			className={clsx(
				'flex cursor-default items-center justify-between rounded-md p-2 text-sm text-gray-800 outline-none dark:text-gray-300',
				isFocused && 'bg-primary-500/10 dark:bg-primary-500/40',
				isSelected && 'font-bold',
				{
					'text-gray-700 dark:text-gray-300': isDisabled,
					'text-primary-600 dark:text-primary-400': isFocused || isSelected,
				}
			)}
		>
			{item.rendered}
			{isSelected ? (
				<div className="text-primary-500">
					<div className="h-4 w-4">
						<CheckIcon />
					</div>
				</div>
			) : null}
		</li>
	);
}
