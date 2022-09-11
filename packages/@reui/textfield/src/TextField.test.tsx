import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '.';

describe('TextField', () => {
	test('renders a text field', async () => {
		render(<TextField label="Tacos" />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toBeInTheDocument();
	});

	test('can enter text into the field', async () => {
		const user = userEvent.setup();
		render(<TextField label="Tacos" />);

		await user.type(screen.getByRole('textbox', { name: 'Tacos' }), 'I like tacos');

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('I like tacos');
	});

	test('can be disabled', async () => {
		render(<TextField label="Tacos" isDisabled />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toBeDisabled();
	});

	test('can be readonly', async () => {
		const user = userEvent.setup();
		render(<TextField label="Tacos" isReadOnly />);

		await user.type(screen.getByRole('textbox', { name: 'Tacos' }), 'I like tacos');

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('');
	});

	test('can have a default value', async () => {
		render(<TextField label="Tacos" defaultValue="These are great" />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('These are great');
	});
});
