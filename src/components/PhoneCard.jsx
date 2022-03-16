import { ReactComponent as PhoneIcon } from './../assets/icons/phone.svg';
import Button from './Button';

// Simple card component that displays the phone number of the selected brewery.
// Used in the Info Cards component
const PhoneCard = ({ phone }) => {
	return (
		<div className="card">
			<div className="card__body">
				<h3>Contact</h3>
				<PhoneIcon />
			</div>

			{phone && (
				<Button url={`tel:${phone}`} className="btn-basic--outline">
					{phone}
				</Button>
			)}
		</div>
	);
};

export default PhoneCard;
