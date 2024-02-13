import {
	ReactNode,
	ReactPortal,
	forwardRef,
	useEffect,
	useMemo,
	useRef,
} from "react";
import { createPortal } from "react-dom";
import { FocusScope } from "react-aria";
import { useModalContext, ModalContext } from "../context/modal.context";
import { cn } from "@utils/twMerge";
import { Button } from "./Button";
import { Close } from "./icons/Close";
import { ChildrenProps, ModalProps } from "@types";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

/**
 * Creates a portal to render children into a different part of the DOM.
 */
function Portal({ children }: { children: ReactNode }): ReactPortal {
	return createPortal(children, document.body);
}

/**
 * A clickable background for the modal.
 * @param {ModalOverlayProps} props - The props for the ModalOverlay component.
 */
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

/**
 * A modal component.
 */
function Modal({
	children,
	open,
	autoFocus = true,
	restoreFocus = true,
	onClose,
	onCreate,
	onOpenChange,
	className,
}: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	// A Map containing the trigger event types and their handlers
	const keyListenersMap = useMemo(() => new Map([["Escape", onClose]]), []);

	useEffect(() => {
		if (!open || !modalRef.current) return;

		function keyListener(e: KeyboardEvent) {
			const listener = keyListenersMap.get(e.key);
			listener && listener();
		}
		document.addEventListener("keydown", keyListener);

		if (onCreate) {
			onCreate();
		}

		return () => document.removeEventListener("keydown", keyListener);
	}, [open, keyListenersMap]);

	useEffect(() => {
		if (onOpenChange) {
			onOpenChange(open);
		}
	}, [open]);

	if (!open) {
		return null;
	}

	return (
		<Portal>
			<FocusScope
				contain
				autoFocus={autoFocus}
				restoreFocus={restoreFocus}
			>
				<ModalContext.Provider value={{ onClose }}>
					<ModalOverlay />

					<div
						role="dialog"
						aria-modal="true"
						data-cy="modal"
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
							tabIndex={-1}
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

/**
 * A forward-ref component to wrap modal content.
 */
const ModalContent = forwardRef<HTMLDivElement, ChildrenProps>(
	function ModalContent({ children, className }, ref) {
		useLockBodyScroll();

		return (
			<div ref={ref} className={cn("flex flex-col gap-4", className)}>
				{children}
			</div>
		);
	},
);
ModalContent.displayName = "ModalContent";

/**
 * A forward-ref component that can contain the title and description of the modal window.
 */
const ModalHeader = forwardRef<HTMLDivElement, ChildrenProps>(
	function ModalHeader({ children, className }, ref) {
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
	},
);
ModalHeader.displayName = "ModalHeader";

/**
 * A forward-ref component that returns an h2, this component must be used in the <ModalHeader> for better semantics.
 */
const ModalTitle = forwardRef<HTMLHeadingElement, ChildrenProps>(
	function ModalTitle({ children, className }, ref) {
		return (
			<h2 ref={ref} className={cn("text-lg font-semibold", className)}>
				{children}
			</h2>
		);
	},
);
ModalTitle.displayName = "ModalTitle";

/**
 * A forward-ref component that returns a paragraph giving details of the modal's content.
 * This component should be used in the <ModalHeader> for better semantics.
 */
const ModalDescription = forwardRef<HTMLParagraphElement, ChildrenProps>(
	function ModalDescription({ children, className }, ref) {
		return (
			<p ref={ref} className={cn("text-sm text-neutral-600", className)}>
				{children}
			</p>
		);
	},
);
ModalDescription.displayName = "ModalDescription";

/**
 * A forward-ref component to wrap modal content.
 */
const ModalFooter = forwardRef<HTMLDivElement, ChildrenProps>(
	function ModalFooter({ children, className }, ref) {
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
	},
);
ModalFooter.displayName = "ModalFooter";

/**
 * A forward-ref component returns a button that can trigger the closure of the modal.
 */
const ModalClose = forwardRef<HTMLButtonElement, ChildrenProps>(
	function ModalClose({ children, className }, ref) {
		const { onClose } = useModalContext();

		return (
			<Button ref={ref} onClick={onClose} className={className}>
				{children}
			</Button>
		);
	},
);
ModalClose.displayName = "ModalClose";

export {
	Modal,
	ModalClose,
	ModalHeader,
	ModalTitle,
	ModalDescription,
	ModalContent,
	ModalFooter,
};
