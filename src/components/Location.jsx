import React from 'react';

// Custom components and utilities.

const Location = ({
	street,
	address2,
	address3,
	city,
	state,
	postcode,
	country,
	province,
	latitude,
	longitude,
}) => {
	const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=${latitude},${longitude}`;

	const formatAddress = () => {
		return (
			<div>
				<p>{street}</p>
				{address2 && <p>{address2}</p>}
				{address3 && <p>{address3}</p>}
				<p>{`${city} ${state}`}</p>
				<p>{postcode + province}</p>
				<p>{country}</p>
			</div>
		);
	};

	return (
		<article className="location">
			<div className="map-details">
				<article>
					<div>
						<h6>Address</h6>
						<div>{formatAddress()}</div>
					</div>
				</article>
			</div>

			<div className="map-container">
				<iframe
					title="Brewery Location"
					src={googleMapUrl}
					width="100%"
					height="auto"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</div>
		</article>
	);
};

export default Location;
