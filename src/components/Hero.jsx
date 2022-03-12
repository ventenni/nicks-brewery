import React from 'react';

const Hero = ({ image, heading }) => {
	return (
		<div className="hero-image">
			<div
				className="hero-image__background"
				style={{ backgroundImage: `url(${image}` }}
			></div>
			{heading && (
				<div className="hero-image__content">
					<h2 className="hero-heading">{heading}</h2>
				</div>
			)}
		</div>
	);
};

export default Hero;
