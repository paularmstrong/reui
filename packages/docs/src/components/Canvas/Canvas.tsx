import * as React from 'react';
import root from 'react-shadow';
import styles from '!raw-loader!./styles.css';
import { IconProvider } from '@reui/components';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Props {
	children: React.ReactNode;
}

export function Canvas({ children }: Props) {
	return (
		<root.div>
			<IconProvider value={{ CheckIcon }}>
				<div className="rounded-md border border-gray-200 bg-white p-6 shadow-inner dark:bg-gray-900">{children}</div>
			</IconProvider>
			<style>{styles}</style>
		</root.div>
	);
}
