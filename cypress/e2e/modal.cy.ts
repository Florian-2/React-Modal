const MODAL_SELECTOR = "[data-cy='modal']";

describe("Opening modal", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.get("button").realClick();
	});

	it("should open the modal", () => {
		cy.get(MODAL_SELECTOR).should("exist");
	});

	it("should focus on the close button (cross icon)", () => {
		const closeBtn = cy.get(MODAL_SELECTOR).find("button").first();
		closeBtn.should("exist").focused();
	});

	it("should disable scrolling on the page when the modal is open", () => {
		cy.get("body").should("have.css", "overflow", "hidden");
	});
});

describe("Closing Modal", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.get("button").realClick();
	});

	it("should close after clicking on the close button (cross icon)", () => {
		const modal = cy.get(MODAL_SELECTOR);
		const closeBtn = modal.find("button").first();

		closeBtn.realClick();
		modal.should("not.exist");
	});

	it("should close after pressing the Escape key", () => {
		const modal = cy.get(MODAL_SELECTOR);
		modal.realPress("Escape");
		modal.should("not.exist");
	});
});
