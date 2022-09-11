import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { IconProvider, useIcons } from '.';

function TestSvg(props: React.ComponentProps<'svg'>) {
	return <svg {...props} />;
}

function RenderAll() {
	const icons = useIcons();
	return (
		<>
			{Object.entries(icons).map(([name, Icon]) => (
				<Icon key={name} data-testid={name} />
			))}
		</>
	);
}

describe('Icons', () => {
	test('provides icons, available from the hook', async () => {
		render(
			<IconProvider
				value={{
					CheckIcon: TestSvg,
					ChevronDownIcon: TestSvg,
					ChevronUpIcon: TestSvg,
					ChevronUpDownIcon: TestSvg,
				}}
			>
				<RenderAll />
			</IconProvider>
		);

		expect(screen.queryByTestId('CheckIcon')).toBeInTheDocument();
		expect(screen.queryByTestId('ChevronDownIcon')).toBeInTheDocument();
		expect(screen.queryByTestId('ChevronUpIcon')).toBeInTheDocument();
		expect(screen.queryByTestId('ChevronUpDownIcon')).toBeInTheDocument();
	});

	test('can provide any other icons', async () => {
		render(
			<IconProvider
				value={{
					CheckIcon: TestSvg,
					ChevronDownIcon: TestSvg,
					ChevronUpIcon: TestSvg,
					ChevronUpDownIcon: TestSvg,
					Tacos: TestSvg,
				}}
			>
				<RenderAll />
			</IconProvider>
		);

		expect(screen.queryByTestId('Tacos')).toBeInTheDocument();
	});
});
