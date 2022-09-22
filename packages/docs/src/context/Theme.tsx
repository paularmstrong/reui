import * as React from 'react';
import { get as getPersistent, set as setPersistent } from 'idb-keyval';

export type ThemeMode = 'system' | 'light' | 'dark';

interface Context {
	theme: ThemeMode;
	persisted: ThemeMode;
	setTheme: (mode: ThemeMode) => void;
}

const Theme = React.createContext<Context>({ theme: 'system', persisted: 'system', setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [persisted, setPersisted] = React.useState<ThemeMode>('system');
	const [theme, setTheme] = React.useState<ThemeMode>(persisted);

	function setAndPersist(theme: ThemeMode) {
		setPersisted(theme);
		setPersistent('theme', theme);
		setTheme(theme);
	}

	React.useEffect(() => {
		async function load() {
			const mode = await getPersistent('theme');
			setAndPersist(mode || 'system');
		}
		load();
	}, []);

	React.useEffect(() => {
		if (persisted !== 'system') {
			return;
		}

		function matchMedia({ matches }: MediaQueryListEvent | MediaQueryList) {
			if (matches) {
				setAndPersist('dark');
			} else {
				setAndPersist('light');
			}
		}

		const query = window.matchMedia('(prefers-color-scheme: dark)');
		query.addEventListener('change', matchMedia);
		matchMedia(query);

		return () => {
			query.removeEventListener('change', matchMedia);
		};
	}, [persisted]);

	return (
		<Theme.Provider value={{ theme, persisted, setTheme: setAndPersist }}>
			<div className={theme === 'dark' ? 'dark' : undefined}>{children}</div>
		</Theme.Provider>
	);
}

export function useTheme() {
	return React.useContext(Theme);
}
