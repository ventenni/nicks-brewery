import { ReactComponent as PhoneIcon } from './../assets/icons/phone.svg';
import Button from './Button';

const PhoneCard = ({ phone }) => {
	return (
		<div className="card">
			<div className="card__body">
				<h3>Contact</h3>
				<PhoneIcon />
			</div>

			<Button url={`tel:${phone}`} className="btn-basic--outline">
				{phone}
			</Button>
		</div>
	);
};

export default PhoneCard;
