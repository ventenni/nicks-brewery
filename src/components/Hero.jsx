import React from 'react';

// Hero image that takes an image url and heading
const Hero = ({ image, heading }) => {
	return (
		<div className="hero-image">
			<div
				className="hero-image__background"
				style={{ backgroundImage: `url(${image}` }}
			></div>
			{heading && (
				<div className="hero-image__content">
					<div className="hero-image__content__container">
						<h1 className="hero-heading">{heading}</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
