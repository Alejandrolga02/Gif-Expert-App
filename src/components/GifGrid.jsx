import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { getGifs } from "../helpers/getGifs.js";
import { GifItem } from "./GifItem.jsx";

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
	};

	useEffect(() => {
		getImages();
	}, []);

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
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
