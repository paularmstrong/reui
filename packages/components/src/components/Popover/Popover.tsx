import * as React from 'react';
import { useOverlay, DismissButton, FocusScope } from 'react-aria';

interface PopoverProps {
	position?: React.CSSProperties;
	children: React.ReactNode;
	isOpen?: boolean;
	onClose: () => void;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover({ position, ...props }, ref) {
	const { isOpen, onClose, children } = props;

	const { overlayProps } = useOverlay(
		{
			isOpen,
			onClose,
			shouldCloseOnBlur: true,
			isDismissable: false,
		},
		ref as React.RefObject<HTMLDivElement>
	);

	// @ts-ignore strip off left because useOverlayPosition adds 12px for no reason
	const { left, ...style } = position;

	return (
		<FocusScope restoreFocus>
			<div
				{...overlayProps}
				style={style}
				ref={ref}
				className="absolute z-10 mt-2 w-full overflow-auto rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
			>
				{children}
				<DismissButton onDismiss={onClose} />
			</div>
		</FocusScope>
	);
});
