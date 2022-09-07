import * as React from 'react';

interface IconContext {
	CheckIcon: React.ComponentType<React.ComponentProps<'svg'>>;
}

function Placeholder() {
	return <svg />;
}

const _iconContext = React.createContext<IconContext>({
	CheckIcon: Placeholder,
});

export const IconProvider = _iconContext.Provider;

export function useIcons() {
	return React.useContext(_iconContext);
}
