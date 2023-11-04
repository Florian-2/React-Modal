import {
	ReactNode,
	forwardRef,
	useCallback,
	useEffect,
	useMemo,
	useRef,
} from "react";
import { createPortal } from "react-dom";
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
		></div>
	);
}

export function Modal({ children, isOpen, onClose, className }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleTabKey = useCallback(
		(e: KeyboardEvent, elementsInModal: HTMLElement[]) => {
			if (!modalRef.current) return;
			e.preventDefault();

			let index = elementsInModal.findIndex(
				(el) => el === document.activeElement,
			);

			if (e.shiftKey) {
				index--;
			} else {
				index++;
			}

			if (index >= elementsInModal.length) {
				index = 0;
			}
			if (index < 0) {
				index = elementsInModal.length - 1;
			}

			elementsInModal[index].focus();
		},
		[],
	);

	const keyListenersMap = useMemo(
		() =>
			new Map([
				["Escape", onClose],
				["Tab", handleTabKey],
			]),
		[onClose, handleTabKey],
	);

	useEffect(() => {
		if (!isOpen || !modalRef.current) return;

		const focusableModalElements = Array.from(
			modalRef.current.querySelectorAll(
				"a, button, textarea, input, select",
			),
		) as HTMLElement[];

		function keyListener(e: KeyboardEvent) {
			const listener = keyListenersMap.get(e.key);
			return listener && listener(e, focusableModalElements);
		}
		document.addEventListener("keydown", keyListener);

		return () => document.removeEventListener("keydown", keyListener);
	}, [isOpen, keyListenersMap]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<Portal>
			<ModalContext.Provider value={{ onClose }}>
				<ModalOverlay />

				<div
					role="dialog"
					aria-modal="true"
					className={cn(
						"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-white text-slate-900 p-7 rounded-md",
						className,
					)}
					ref={modalRef}
				>
					<button
						autoFocus
						onClick={onClose}
						className="absolute right-4 top-4 p-1 focus:outline-2 focus:outline-black focus:outline-double"
					>
						<Close />
					</button>

					{children}
				</div>
			</ModalContext.Provider>
		</Portal>
	);
}

Modal.Content = forwardRef<HTMLDivElement, ChildrenProps>(function ModalContent(
	{ children, className },
	ref,
) {
	return (
		<div ref={ref} className={cn("mt-3 flex flex-col gap-4", className)}>
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
		<h2
			ref={ref}
			className={cn(
				"text-lg font-semibold leading-none tracking-tight",
				className,
			)}
		>
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
