// React
import React from 'react';

const SquareImage = ({ title, subtitle, image, url }) => {
	return (
		<article className="square-image">
			<a href={url} target="_blank" rel="noreferrer">
				<div
					className="square-image__image"
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className="square-image__title">{title}</div>
				<div className="square-image__subtitle">{subtitle}</div>
			</a>
		</article>
	);
};

export default SquareImage;
