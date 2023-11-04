import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

export default function AppModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<div className="p-4 h-[200vh]">
			<Button onClick={handleOpen}>Ouvrir la modale</Button>

			<Modal isOpen={isOpen} onClose={handleClose}>
				<Modal.Content>
					<Modal.Header>
						<Modal.Title>Titre</Modal.Title>
						<Modal.Description>
							Make changes to your profile here.
						</Modal.Description>
					</Modal.Header>

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
						placeholder="Password"
					/>

					<Modal.Close>Fermer</Modal.Close>
				</Modal.Content>
			</Modal>
		</div>
	);
}
