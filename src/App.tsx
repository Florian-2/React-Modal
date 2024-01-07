import { useState } from "react";
import { Button } from "@components/Button";
import { Modal, ModalContent, ModalClose } from "@components/Modal";

export default function AppModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<div className="p-4 h-[200vh]">
			<Button onClick={handleOpen}>Ouvrir la modale</Button>

			<Modal open={isOpen} onClose={handleClose}>
				<ModalContent>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Obcaecati voluptatem est, accusantium enim odit omnis
						eos provident libero distinctio commodi nisi deserunt?
						Tenetur sint, est ea aliquid dignissimos vero quos!
					</p>

					<ModalClose>Fermer</ModalClose>
				</ModalContent>
			</Modal>
		</div>
	);
}
