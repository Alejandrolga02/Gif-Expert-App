import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp/GifExpertApp";

describe("tests in <GifExpertApp/>", () => {
	test("should match with snapshot", () => {
		const { container } = render(<GifExpertApp />);
		expect(container).toMatchSnapshot();
	});

	test("btn-delete should delete a category", () => {
		render(<GifExpertApp />);

		const deleteButton = screen.getByLabelText("btn-delete");
		fireEvent.click(deleteButton);

		expect(document.getElementById("btn-delete")).toBeFalsy();
	});

	test("onAddCategory should create a category", () => {
		const newCategory = "Back to the Future"

		render(<GifExpertApp />);

		const inputElement = screen.getByRole("textbox", { name: "input" });
		const formElement = screen.getByRole('form');

		fireEvent.change(inputElement, {
			target: {
				value: newCategory,
			},
		});
		fireEvent.submit(formElement);

		const headingsElements = screen.getAllByRole("heading", {level:3})
		expect(headingsElements.length).toBe(2);

		screen.debug();
	});
});
