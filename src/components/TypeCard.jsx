import { ReactComponent as BeerIcon } from './../assets/icons/beer.svg';
import Button from './Button';

// Simple card component that displays the address of the selected brewery.
// Used in the Info Cards component
const TypeCard = ({ type, url }) => {
	return (
		<div className="type-card card">
			<div className="card__body">
				<h3>{`${type} Brewery`}</h3>
				<BeerIcon />
			</div>

			{url && (
				<Button
					className={'btn-basic--outline'}
					url={url}
					target="_blank"
				>
					Visit Website
				</Button>
			)}
		</div>
	);
};

export default TypeCard;
