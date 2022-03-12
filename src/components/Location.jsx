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

	return (
		<article className={`location`} style={{ height: '200px' }}>
			<div className="map-details">
				<article>
					<div>
						<h6>Address</h6>
						<div>
							{street}
							{address2 +
								address3 +
								city +
								state +
								postcode +
								country +
								province +
								latitude +
								longitude}
						</div>
					</div>
				</article>
			</div>

			<div className="map-container">
				{
					// TODO Google map with coords
					<iframe
						title="Brewery Location"
						src={googleMapUrl}
						width="600"
						height="450"
						// style="border:0;"
						allowFullScreen=""
						loading="lazy"
					></iframe>
				}
			</div>
		</article>
	);
};

export default Location;
