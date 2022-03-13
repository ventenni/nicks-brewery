import { ReactComponent as BeerIcon } from './../assets/icons/beer.svg';

const TypeCard = ({ type }) => {
	return (
		<div className=" card">
			<div>
				<BeerIcon />
			</div>

			<h3>{`${type} Brewery`}</h3>
		</div>
	);
};

export default TypeCard;
