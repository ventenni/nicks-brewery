import { Link } from 'react-router-dom';

const SearchResultItem = ({ name, id }) => {
	return (
		<Link to={`/breweryDetails/${id}`} className="search-result-item">
			{name}
		</Link>
	);
};

export default SearchResultItem;
