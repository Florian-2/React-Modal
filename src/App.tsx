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
		<div className="m-5">
			<Button onClick={handleModal}>Ouvrir la modale</Button>

			<input
				type="text"
				className="border p-2 mt-4"
				placeholder="input"
			/>

			<Modal open={isOpen} onClose={handleModal} autoFocus={false}>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Title</ModalTitle>
						<ModalDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</ModalDescription>
					</ModalHeader>

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Quas eum sapiente repellendus libero labore
						expedita, distinctio laborum quam esse illo nam tempore
						natus tenetur quasi quos, laudantium consequatur veniam
						cum?
					</p>
				</ModalContent>
			</Modal>
		</div>
	);
}
