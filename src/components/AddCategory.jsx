import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => setInputValue(target.value);

	const onSubmit = (event) => {
		event.preventDefault();

		const cleanCategory = inputValue.trim();

		if (cleanCategory.trim().length <= 2) return;

		onNewCategory(cleanCategory);
		setInputValue("");
	};

	return (
		<form onSubmit={onSubmit} aria-label="form">
			<input type="text" aria-label="input" placeholder="Search Gifs" value={inputValue} onChange={onInputChange} />
			<button type="submit" aria-label="button" className="btn-search">
				Search GIFs
			</button>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func,
};
