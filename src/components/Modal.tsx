import { ReactNode, forwardRef, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { FocusScope } from "react-aria";
import { useModalContext, ModalContext } from "../context/modal.context";
import { cn } from "@utils/class";
import { Button } from "./Button";
import { Close } from "./icons/Close";
import { ChildrenProps, ModalProps } from "@types";

function Portal({ children }: { children: ReactNode }) {
	return createPortal(children, document.body);
}

function ModalOverlay({ className }: { className?: string }) {
	const { onClose } = useModalContext();

	return (
		<div
			className={cn(
				"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm",
				className,
			)}
			onClick={onClose}
			aria-hidden="true"
			data-testid="overlay"
		></div>
	);
}

export function Modal({ children, open, onClose, className }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	const keyListenersMap = useMemo(
		() => new Map([["Escape", onClose]]),
		[onClose],
	);

	useEffect(() => {
		if (!open || !modalRef.current) return;

		function keyListener(e: KeyboardEvent) {
			const listener = keyListenersMap.get(e.key);
			return listener;
		}
		document.addEventListener("keydown", keyListener);

		return () => document.removeEventListener("keydown", keyListener);
	}, [open, keyListenersMap]);

	if (!open) {
		return null;
	}

	return (
		<Portal>
			<FocusScope contain restoreFocus>
				<ModalContext.Provider value={{ onClose }}>
					<ModalOverlay />

					<div
						role="dialog"
						aria-modal="true"
						className={cn(
							"fixed left-1/2 top-1/2 z-50 flex flex-col w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border bg-white p-7 rounded-md",
							className,
						)}
						ref={modalRef}
					>
						<button
							onClick={onClose}
							className="place-self-end p-1 focus:outline-2 focus:outline-black focus:outline-double"
							data-testid="close"
						>
							<Close />
						</button>

						{children}
					</div>
				</ModalContext.Provider>
			</FocusScope>
		</Portal>
	);
}

Modal.Content = forwardRef<HTMLDivElement, ChildrenProps>(function ModalContent(
	{ children, className },
	ref,
) {
	useLockBodyScroll();

	return (
		<div ref={ref} className={cn("flex flex-col gap-4", className)}>
			{children}
		</div>
	);
});

Modal.Header = forwardRef<HTMLDivElement, ChildrenProps>(function ModalHeader(
	{ children, className },
	ref,
) {
	return (
		<div
			ref={ref}
			className={cn(
				"flex flex-col space-y-1.5 text-center sm:text-left",
				className,
			)}
		>
			{children}
		</div>
	);
});

Modal.Title = forwardRef<HTMLHeadingElement, ChildrenProps>(function ModalTitle(
	{ children, className },
	ref,
) {
	return (
		<h2 ref={ref} className={cn("text-lg font-semibold", className)}>
			{children}
		</h2>
	);
});

Modal.Description = forwardRef<HTMLParagraphElement, ChildrenProps>(
	function ModalDescription({ children, className }, ref) {
		return (
			<p ref={ref} className={cn("text-sm", className)}>
				{children}
			</p>
		);
	},
);

Modal.Footer = forwardRef<HTMLDivElement, ChildrenProps>(function ModalFooter(
	{ children, className },
	ref,
) {
	return (
		<div
			ref={ref}
			className={cn(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
				className,
			)}
		>
			{children}
		</div>
	);
});

Modal.Close = forwardRef<HTMLButtonElement, ChildrenProps>(function ModalClose(
	{ children, className },
	ref,
) {
	const { onClose } = useModalContext();

	return (
		<Button ref={ref} onClick={onClose} className={className}>
			{children}
		</Button>
	);
});
