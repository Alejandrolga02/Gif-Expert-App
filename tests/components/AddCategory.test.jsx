import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("tests in AddCategory", () => {
	const inputValue = "Saitama";
	const wrongInput = "  ad   ";

	test("should change the input value", () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole("textbox");

		fireEvent.input(input, {
			target: {
				value: inputValue,
			},
		});

		expect(input.value).toBe(inputValue);
	});

	test("should call onNewCategory if input has a valid value", () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox", { name: "input" });
		const form = screen.getByRole("form", { name: "form" });

		fireEvent.input(input, {
			target: {
				value: inputValue,
			},
		});
		fireEvent.submit(form);

		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test("should not call onNewCategory if input is not valid", () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole("textbox", { name: "input" });
		const form = screen.getByRole("form", { name: "form" });

		fireEvent.input(input, {
			target: {
				value: wrongInput,
			},
		});
		fireEvent.submit(form);

		screen.debug();

		expect(input.value).toBe(wrongInput);
		expect(onNewCategory).not.toHaveBeenCalled();
	});
});
