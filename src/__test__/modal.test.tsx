import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Modal } from "@components/Modal";

describe("When the modal is open", () => {
	test("Then the contents of the modal should be visible", () => {
		const { getByRole, getByText } = render(
			<Modal open onClose={() => null}>
				<p>Lorem</p>
			</Modal>,
		);

		expect(getByRole("dialog")).toBeInTheDocument();
		expect(getByText(/lorem/i)).toBeInTheDocument();
	});

	test("Then the modal should close when I click on the cross", () => {
		const onClose = jest.fn();
		const { getByTestId, queryByRole, rerender } = render(
			<Modal open onClose={onClose}>
				<p>click on the cross</p>
			</Modal>,
		);

		const btnClose = getByTestId(/close/i);
		fireEvent.click(btnClose);

		rerender(
			<Modal open={false} onClose={() => null}>
				<p>click on the cross</p>
			</Modal>,
		);

		expect(onClose).toHaveBeenCalledTimes(1);
		expect(queryByRole("dialog")).not.toBeInTheDocument();
	});

	test("Then the modal should close when I click on the overlay", () => {
		const onClose = jest.fn();
		const { getByTestId, queryByRole, rerender } = render(
			<Modal open onClose={onClose}>
				<p>click on the overlay</p>
			</Modal>,
		);

		const overlay = getByTestId(/overlay/i);
		fireEvent.click(overlay);

		rerender(
			<Modal open={false} onClose={() => null}>
				<p>click on the overlay</p>
			</Modal>,
		);

		expect(onClose).toHaveBeenCalledTimes(1);
		expect(queryByRole("dialog")).not.toBeInTheDocument();
	});

	test("Then the modal should close when I press the Esc key", () => {
		const onClose = jest.fn();
		render(
			<Modal open onClose={onClose}>
				<p>Lorem</p>
			</Modal>,
		);

		fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

		expect(onClose).toHaveBeenCalledTimes(1);
	});
});

describe("When the modal is close", () => {
	test("Then the contents of the modal should be invisible", () => {
		const { queryByRole } = render(
			<Modal open={false} onClose={() => null}>
				<p>Invisible</p>
			</Modal>,
		);

		expect(queryByRole("dialog")).not.toBeInTheDocument();
	});
});
