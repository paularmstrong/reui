import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-aria';
import { IconProvider } from '@reui/reui';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

export default function ReUIDocs({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<IconProvider value={{ CheckIcon, ChevronDownIcon, ChevronUpIcon, ChevronUpDownIcon }}>
				<Component {...pageProps} />
			</IconProvider>
		</SSRProvider>
	);
}
