import { ComponentPropsWithRef, PropsWithChildren } from "react";

/**
 * Props for a modal component.
 */
export type ModalProps = PropsWithChildren & {
	/**
	 * Determines if the modal is open or closed.
	 */
	open: boolean;

	/**
	 * Triggers when the modal window closes.
	 */
	onClose: () => void;

	/**
	 * Trigger when component is create.
	 */
	onCreate?: () => void;

	/**
	 * Trigger when the open state of the dialog changes.
	 */
	onOpenChange?: (isOpen: boolean) => void;

	/**
	 * Focus the first focusable element in the modal.
	 */
	autoFocus?: boolean;

	/**
	 * Restores focus on base element after closing modal
	 */
	restoreFocus?: boolean;

	/**
	 * Add CSS classes
	 */
	className?: string;
};

export type ChildrenProps = PropsWithChildren & {
	/**
	 * Add CSS classes
	 */
	className?: string;
};

export type ButtonProps = ComponentPropsWithRef<"button">;
