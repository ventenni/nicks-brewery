import React from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchQuery } from './../slices/brewerySlice';
import SearchResults from './SearchResults';

const SearchInput = () => {
	const searchQuery = useSelector((state) => state.brewery.searchQuery);
	const dispatch = useDispatch();

	function searchDebounced(func, timeout = 500) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				console.log(args);
				func.apply(this, args);
			}, timeout);
		};
	}

	// Variable used in input field to start the debounced search
	const processSearch = searchDebounced((value) =>
		dispatch(saveSearchQuery({ searchQuery: value }))
	);

	return (
		<div className="search-input" style={{ minHeight: '100px' }}>
			<label>
				Brewery Search
				<input
					autoComplete="on"
					type="text"
					list="breweries"
					onKeyUp={(e) => {
						processSearch(e.target.value);
					}}
					style={{ display: 'block' }}
				/>
			</label>

			{searchQuery.length > 0 && (
				<SearchResults searchQuery={searchQuery} />
			)}
		</div>
	);
};

export default SearchInput;
