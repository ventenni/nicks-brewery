import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { setSearchOpen } from '../slices/brewerySlice';

// Simple component that displays a search result.
// Used in the SearchResults component
const SearchResultItem = ({ name, id }) => {
	const dispatch = useDispatch();

	return (
		<Link
			to={`/breweryDetails/${id}`}
			className="search-result-item"
			onClick={() => dispatch(setSearchOpen(false))}
		>
			<div>{name}</div>
		</Link>
	);
};

export default SearchResultItem;
