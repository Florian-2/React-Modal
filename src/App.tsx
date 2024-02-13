import { useState } from "react";
import { Button } from "@components/Button";
import {
	Modal,
	ModalContent,
	ModalClose,
	ModalTitle,
	ModalHeader,
	ModalDescription,
	ModalFooter,
} from "@components/Modal";

export default function AppModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => setIsOpen((prev) => !prev);

	return (
		<>
			<Button onClick={handleModal}>Ouvrir la modale</Button>
			<input type="text" name="" id="" />

			<Modal open={isOpen} onClose={handleModal}>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Titre</ModalTitle>
						<ModalDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</ModalDescription>
					</ModalHeader>

					<form>
						<div>
							<label htmlFor="email">Email</label>
							<input type="text" placeholder="email" id="email" />
						</div>

						<div>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								placeholder="password"
								id="password"
							/>
						</div>
					</form>

					<ModalFooter>
						<ModalClose>Fermer</ModalClose>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
