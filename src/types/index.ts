import { ComponentPropsWithRef, ReactNode } from "react";

export type ModalProps = {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	className?: string;
};

export type ChildrenProps = {
	children: ReactNode;
	className?: string;
};

export type ButtonProps = ComponentPropsWithRef<"button">;
