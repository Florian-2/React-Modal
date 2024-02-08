import { ComponentPropsWithRef, PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren & {
	open: boolean;
	onClose: () => void;
	onCreate?: () => void;
	onOpenChange?: (isOpen: boolean) => void;
	autoFocus?: boolean;
	restoreFocus?: boolean;
	className?: string;
};

export type ChildrenProps = PropsWithChildren & {
	className?: string;
};

export type ButtonProps = ComponentPropsWithRef<"button">;
