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
			<div>
				<AddressIcon />
			</div>
			<div>
				<h3>{street}</h3>
				{address2 && <p>{address2}</p>}
				{address3 && <p>{address3}</p>}
				<p>{`${city} ${state}`}</p>
				<p>
					{' '}
					{province && `${province} `} {`${postcode}`}
				</p>
				<p>{`${country}`}</p>
			</div>
		</div>
	);
};

export default AddressCard;
