import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('renders a button', async () => {
		render(<Button>Tacos</Button>);

		expect(screen.getByRole('button', { name: 'Tacos' })).toBeInTheDocument();
	});
});
