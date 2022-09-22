import * as React from 'react';

interface SnackProps {
	children: React.ReactNode;
}

export function Snack(props: SnackProps) {
	return (
		<aside className="pointer-events-auto rounded-md bg-slate-900/80 px-6 py-2 text-slate-100 shadow-xl backdrop-blur dark:bg-slate-100/80 dark:text-slate-900">
			<div role="status" aria-relevant="additions">
				<div aria-atomic="false">{props.children}</div>
			</div>
		</aside>
	);
}
