import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("One Punch");

	const onInputChange = ({ target }) => setInputValue(target.value);

	const onSubmit = (event) => {
		event.preventDefault();

		const cleanCategory = inputValue.trim();

		if (cleanCategory.trim().length <= 2) return;

		onNewCategory(cleanCategory);
		setInputValue("");
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
			<button type="submit">Add Category</button>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func,
};
