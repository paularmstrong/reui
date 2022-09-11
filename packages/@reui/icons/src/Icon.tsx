import * as React from 'react';

export type IconContext = {
	CheckIcon: React.ComponentType<React.ComponentProps<'svg'>>;
	ChevronDownIcon: React.ComponentType<React.ComponentProps<'svg'>>;
	ChevronUpIcon: React.ComponentType<React.ComponentProps<'svg'>>;
	ChevronUpDownIcon: React.ComponentType<React.ComponentProps<'svg'>>;
	[key: string]: React.ComponentType<React.ComponentProps<'svg'>>;
};

function Placeholder() {
	return <svg />;
}

const _iconContext = React.createContext<IconContext>({
	CheckIcon: Placeholder,
	ChevronDownIcon: Placeholder,
	ChevronUpIcon: Placeholder,
	ChevronUpDownIcon: Placeholder,
});

export const IconProvider = _iconContext.Provider;

export function useIcons() {
	return React.useContext(_iconContext);
}
