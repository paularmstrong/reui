import * as React from 'react';
import { MenuButton, Item } from '@reui/reui';
import { useTheme } from '../context';
import type { ThemeMode } from '../context';

export function ThemeSwitcher() {
	const { setTheme } = useTheme();
	return (
		<MenuButton
			label="Theme"
			onAction={(key) => {
				setTheme(key as ThemeMode);
			}}
		>
			<Item key="dark">Dark</Item>
			<Item key="light">Light</Item>
			<Item key="system">Auto</Item>
		</MenuButton>
	);
}
