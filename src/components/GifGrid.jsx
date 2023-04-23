import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs.js";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
	useEffect(() => {
		getGifs(category);
	}, []);

	return (
		<>
			<h3 onClick={getGifs}>{category}</h3>
			{}
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
