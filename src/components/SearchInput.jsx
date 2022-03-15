import React, { useEffect, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchQuery, setSearchOpen } from './../slices/brewerySlice';
import SearchResults from './SearchResults';

// Initially I was going to use a datalist for the search results
// Due to a bug on Firefox I opted to return the results below the
// input as separate components.
const SearchInput = () => {
	const [searchStatus, setSearchStatus] = useState('closed');
	const searchOpen = useSelector((state) => state.brewery.searchOpen);
	const dispatch = useDispatch();

	useEffect(() => {
		if (searchOpen) {
			setTimeout(() => {
				setSearchStatus('open');
			}, 450);
			setSearchStatus('opening');
		} else {
			setTimeout(() => {
				setSearchStatus('closed');
			}, 450);
			setSearchStatus('closing');
		}
	}, [searchOpen]);

	const searchQuery = useSelector((state) => state.brewery.searchQuery);

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
		<div className={`search search--${searchStatus}`}>
			<div className="search__nav">
				<a href="#" onClick={() => dispatch(setSearchOpen(false))}>
					<div className="close" />
				</a>
			</div>

			<div className="search__container">
				<label>
					Brewery Search
					<input
						autoComplete="on"
						type="text"
						list="breweries"
						onKeyUp={(e) => {
							processSearch(e.target.value);
						}}
					/>
				</label>

				{searchQuery.length > 0 && (
					<SearchResults searchQuery={searchQuery} />
				)}
			</div>
		</div>
	);
};

export default SearchInput;
