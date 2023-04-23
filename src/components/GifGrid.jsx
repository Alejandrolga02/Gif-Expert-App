import PropTypes from "prop-types";

import { GifItem } from "./";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	console.log(isLoading);

	return (
		<>
			<h3>{category}</h3>
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
};
