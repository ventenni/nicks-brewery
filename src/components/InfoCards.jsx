import { useState } from 'react';
import AddressCard from './AddressCard';
import PhoneCard from './PhoneCard';
import TypeCard from './TypeCard';

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
	const [cardHeight, setCardHeight] = useState(0);

	function getTallestCardHeight(value) {
		console.log('tallest card height', value);
		if (value > cardHeight) {
			setCardHeight(value);
		}
	}

	return (
		<div className="info-cards">
			<div>
				<TypeCard
					type={type}
					getTallestCardHeight={getTallestCardHeight}
					cardHeight={cardHeight}
					url={url}
				/>
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
					getTallestCardHeight={getTallestCardHeight}
					cardHeight={cardHeight}
				/>
			</div>
			<div>
				<PhoneCard
					phone={phone}
					getTallestCardHeight={getTallestCardHeight}
					cardHeight={cardHeight}
				/>
			</div>
		</div>
	);
};

export default InfoCards;
