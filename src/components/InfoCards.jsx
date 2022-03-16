import { useState } from 'react';
import AddressCard from './AddressCard';
import PhoneCard from './PhoneCard';
import TypeCard from './TypeCard';

// Container for the Type Card, Address Card and Phone card.
const InfoCards = ({
	street,
	address2,
	address3,
	city,
	state,
	postcode,
	country,
	province,
	phone,
	type,
	url,
}) => {
	return (
		<div className="info-cards">
			<div>
				<TypeCard type={type} url={url} />
			</div>
			<div>
				<AddressCard
					street={street}
					address2={address2}
					address3={address3}
					city={city}
					state={state}
					postcode={postcode}
					country={country}
					province={province}
				/>
			</div>
			<div>
				<PhoneCard phone={phone} />
			</div>
		</div>
	);
};

export default InfoCards;
