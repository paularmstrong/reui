import * as React from 'react';
import clsx from 'clsx';
import root from 'react-shadow';
import styles from '!raw-loader!./styles.css';
import { IconProvider } from '@reui/reui';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useColorMode } from '@docusaurus/theme-common';

interface Props {
	children: React.ReactNode;
}

export function Canvas({ children }: Props) {
	const { colorMode } = useColorMode();

	return (
		<root.div>
			<div className={clsx(colorMode === 'dark' && 'dark')}>
				<IconProvider value={{ CheckIcon, ChevronDownIcon, ChevronUpIcon, ChevronUpDownIcon }}>
					<div className={clsx('rounded-md border border-gray-200 bg-white p-6 shadow-inner dark:bg-gray-900')}>
						{children}
					</div>
				</IconProvider>
			</div>
			<style>{styles}</style>
		</root.div>
	);
}
