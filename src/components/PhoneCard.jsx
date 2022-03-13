import { ReactComponent as PhoneIcon } from './../assets/icons/phone.svg';

const PhoneCard = ({ phone }) => {
	return (
		<div className=" card">
			<div>
				<PhoneIcon />
			</div>
			<h3>
				Contact the brewery on:
				<br />
				<a href={`tel:${phone}`}>{phone}</a>
			</h3>
		</div>
	);
};

export default PhoneCard;
