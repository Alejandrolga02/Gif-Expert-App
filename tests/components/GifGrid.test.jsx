import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe("tests in <GifGrid/>", () => {
	const category = "One Punch";
	const gifs = [
		{
			id: "ABC",
			title: "Saitama",
			url: "https://localhost/saitama.gif",
		},
		{
			id: "CBA",
			title: "Goku",
			url: "https://localhost/goku.gif",
		},
	];

	test("should show the loading", () => {
		const deleteCategory = jest.fn();

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: true,
		});

		render(<GifGrid category={category} deleteCategory={deleteCategory} />);

		expect(screen.getByText("Cargando..."));
		expect(screen.getByText(category));
	});

	test("should show items when images are loaded", () => {
		const deleteCategory = jest.fn();

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid key={category} category={category} deleteCategory={deleteCategory} />);
		expect(screen.getAllByRole("img").length).toBe(2);
	});
});
