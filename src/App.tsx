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

			<div className="flex flex-col gap-2 max-w-sm">
				<input
					type="text"
					className="border p-2 mt-4"
					placeholder="input"
				/>
				<button className="border p-2">button</button>
			</div>

			<Modal open={isOpen} onClose={handleModal}>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Titre</ModalTitle>
						<ModalDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</ModalDescription>
					</ModalHeader>

					<form className="space-y-2">
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

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Quaerat explicabo dolor repellendus sed esse
						voluptatum velit. Voluptate at veniam corrupti nihil a
						aliquam omnis magnam, vitae aut expedita, earum illo!
					</p>

					<ModalFooter>
						<ModalClose>Fermer</ModalClose>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}
