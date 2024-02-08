import { useState } from "react";
import { Button } from "@components/Button";
import { Modal, ModalContent, ModalClose } from "@components/Modal";

export default function AppModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => setIsOpen((prev) => !prev);

	return (
		<>
			<Button onClick={handleModal}>Ouvrir la modale</Button>
			<input type="text" name="" id="" />

			<Modal
				open={isOpen}
				onClose={handleModal}
				onOpenChange={(isOpen) => console.log(isOpen)}
			>
				<ModalContent>
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Obcaecati voluptatem est, accusantium enim odit omnis
						eos provident libero distinctio commodi nisi deserunt?
						Tenetur sint, est ea aliquid dignissimos vero quos!
					</p>

					<input type="text" className="border" placeholder="Email" />
					<input
						type="text"
						className="border"
						placeholder="Mot de passe"
					/>

					<ModalClose>Fermer</ModalClose>
				</ModalContent>
			</Modal>
		</>
	);
}
