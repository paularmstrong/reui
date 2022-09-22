import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-aria';
import { IconProvider } from '@reui/reui';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { ThemeProvider } from '../context';
import { ThemeSwitcher } from '../components';

export default function ReUIDocs({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<ThemeProvider>
				<div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50">
					<IconProvider value={{ CheckIcon, ChevronDownIcon, ChevronUpIcon, ChevronUpDownIcon }}>
						<ThemeSwitcher />
						<Component {...pageProps} />
					</IconProvider>
				</div>
			</ThemeProvider>
		</SSRProvider>
	);
}
