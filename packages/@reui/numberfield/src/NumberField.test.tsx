import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberField } from '.';

describe('NumberField', () => {
	test('renders a text field', async () => {
		render(<NumberField label="Tacos" />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveAttribute('inputmode', 'numeric');

		expect(screen.getByRole('button', { name: 'Decrease Tacos' })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Increase Tacos' })).toBeInTheDocument();
	});

	test('can increase and decrease via buttons', async () => {
		render(<NumberField label="Tacos" defaultValue={4} />);
		const input = screen.getByRole('textbox', { name: 'Tacos' });
		const decrease = screen.getByRole('button', { name: 'Decrease Tacos' });
		const increase = screen.getByRole('button', { name: 'Increase Tacos' });

		fireEvent.click(increase);

		expect(input).toHaveValue('5');

		fireEvent.click(increase);
		fireEvent.click(increase);
		fireEvent.click(decrease);

		expect(input).toHaveValue('6');
	});

	test('can enter number text into the field', async () => {
		const user = userEvent.setup();
		render(<NumberField label="Tacos" />);

		await user.type(screen.getByRole('textbox', { name: 'Tacos' }), '56');

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('56');
	});

	test('can be disabled', async () => {
		render(<NumberField label="Tacos" isDisabled />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toBeDisabled();
	});

	test('can be readonly', async () => {
		const user = userEvent.setup();
		render(<NumberField label="Tacos" isReadOnly />);

		await user.type(screen.getByRole('textbox', { name: 'Tacos' }), '42');

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('');
	});

	test('can have a default value', async () => {
		render(<NumberField label="Tacos" defaultValue={42} />);

		expect(screen.getByRole('textbox', { name: 'Tacos' })).toHaveValue('42');
	});
});
