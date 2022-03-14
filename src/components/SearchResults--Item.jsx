import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { setSearchOpen } from '../slices/brewerySlice';

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
