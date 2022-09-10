import * as React from 'react';

interface SnackProps {
	children: React.ReactNode;
}

export function Snack(props: SnackProps) {
	return (
		<aside className="pointer-events-auto rounded-md bg-gray-900/80 px-6 py-2 text-white shadow-xl backdrop-blur">
			<div role="status" aria-relevant="additions">
				<div aria-atomic="false">{props.children}</div>
			</div>
		</aside>
	);
}
