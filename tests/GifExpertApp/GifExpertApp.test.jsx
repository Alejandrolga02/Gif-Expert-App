import { render } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp/GifExpertApp";

describe("tests in <GifExpertApp/>", () => {
	test("onAddCategory should create a category", () => {
		render(<GifExpertApp />);
	});
});
