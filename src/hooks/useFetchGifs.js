import { useEffect, useState } from 'react';

import { getGifs } from "../helpers";

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log('render');

	useEffect(() => {
		const getImages = async () => {
			const newImages = await getGifs(category);
			setImages(newImages);
			setIsLoading(false);
		}
		console.log('fetch');

		getImages();
	}, [category]);

	return {
		images,
		isLoading
	}
}