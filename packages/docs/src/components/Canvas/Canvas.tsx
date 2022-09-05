import * as React from 'react';
import root from 'react-shadow';
import styles from '!raw-loader!./styles.css';

interface Props {
	children: React.ReactNode;
}

export function Canvas({ children }: Props) {
	return (
		<root.div>
			<div className="rounded-md border border-gray-200 bg-white p-6 shadow-inner">{children}</div>
			<style>{styles}</style>
		</root.div>
	);
}
