import { ReactComponent as AddressIcon } from './../assets/icons/location.svg';

const AddressCard = ({ street, city, state, postcode, country, province }) => {
	return (
		<div className="address-card card">
			<div className="card__body">
				<h3>Address</h3>
				<AddressIcon />
			</div>
			<div className="address">
				<p className="address__street">{`${street}, ${city} ${state}, ${postcode}`}</p>
				<p>{province && `${province} `}</p>
				<p>{`${country}`}</p>
			</div>
		</div>
	);
};

export default AddressCard;
