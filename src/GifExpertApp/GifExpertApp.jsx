import { useState } from "react";

import { AddCategory, GifGrid } from "../components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	const onAddCategory = (newCategory) => {
		// Add category
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	const deleteCategory = (category) => {
		setCategories((categories) => {
			return categories.filter((item) => item !== category);
		});
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} deleteCategory={deleteCategory} />
			))}
		</>
	);
};
