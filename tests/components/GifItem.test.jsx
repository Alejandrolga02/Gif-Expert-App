import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("tests in GifItem", () => {
	const id = "asdfasdf";
	const title = "One Punch";
	const url = "https://upload.wikimedia.org/wikipedia/commons/0/09/One_Punch_Man_logo.svg";

	test("should make match with snapshot", () => {
		const { container } = render(<GifItem title={title} id={id} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test("should show an image with the url and alt apropiated", () => {
		// expect(screen.getByRole("img").src).toBe(url);
		render(<GifItem title={title} id={id} url={url} />);
		const { src, alt } = screen.getByRole("img");
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test("should show title in the component", () => {
		render(<GifItem title={title} id={id} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
