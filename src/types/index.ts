import { ComponentPropsWithRef, PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren & {
	open: boolean;
	onClose: () => void;
	className?: string;
};

export type ChildrenProps = PropsWithChildren & {
	className?: string;
};

export type ButtonProps = ComponentPropsWithRef<"button">;
