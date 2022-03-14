import { ReactComponent as AddressIcon } from './../assets/icons/location.svg';

const AddressCard = ({
	street,
	address2,
	address3,
	city,
	state,
	postcode,
	country,
	province,
}) => {
	return (
		<div className="address-card card">
			<div className="card__body">
				<h3>Address</h3>
				<AddressIcon />
			</div>
			<div>
				<h4>{`${street}, ${city} ${state}`}</h4>
				<p>
					{province && `${province} `} {`${postcode}`}
				</p>
				<p>{`${country}`}</p>
			</div>
		</div>
	);
};

export default AddressCard;
