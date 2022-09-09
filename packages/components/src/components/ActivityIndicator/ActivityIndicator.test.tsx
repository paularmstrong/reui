import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ActivityIndicator } from '.';

describe('ActivityIndicator', () => {
	test('renders an indeterminate progress indicator', async () => {
		render(<ActivityIndicator />);

		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});

	test('renders an indeterminate progress indicator with a label', async () => {
		render(<ActivityIndicator>Loading tacos</ActivityIndicator>);

		expect(screen.getByRole('progressbar', { name: 'Loading tacos' })).toBeInTheDocument();
	});
});
