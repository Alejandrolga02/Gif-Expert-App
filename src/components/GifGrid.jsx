import PropTypes from "prop-types";

import { GifItem } from "./";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category, deleteCategory }) => {
	const { images, isLoading } = useFetchGifs(category);

	const onDeleteCategory = () => {
		deleteCategory(category);
	};

	return (
		<>
			<div className="heading-container">
				<h3>{category}</h3>
				<button aria-label="btn-delete" onClick={onDeleteCategory} className="btn-delete">
					Delete
				</button>
			</div>
			<div className="card-grid">
				{isLoading && <h2>Cargando...</h2>}
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
	deleteCategory: PropTypes.func.isRequired,
};
