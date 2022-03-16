import React, { useEffect, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchQuery, setSearchOpen } from '../slices/brewerySlice';
import SearchResults from './SearchResults';

// Initially I was going to use a datalist for the search results
// Due to a bug on Firefox I opted to return the results below the
// input as separate components.
const Search = () => {
	const [searchStatus, setSearchStatus] = useState('closed');
	const searchOpen = useSelector((state) => state.brewery.searchOpen);
	const dispatch = useDispatch();

	// This handles the animation when opening the search bar.
	// It is triggered whenever the searchOpen global state variable is updated.
	// Each class plays a part in the smooth opening animation.
	useEffect(() => {
		if (searchOpen) {
			setTimeout(() => {
				setSearchStatus('open');
			}, 150);
			setSearchStatus('opening');
		} else {
			setTimeout(() => {
				setSearchStatus('closed');
			}, 150);
			setSearchStatus('closing');
		}
	}, [searchOpen]);

	const searchQuery = useSelector((state) => state.brewery.searchQuery);

	// Used to only start the search functionality once a user has finished typing their query
	// Each keystroke clears and then starts a timer to then perform the state update.
	function searchDebounced(func, timeout = 500) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}

	// Variable used in input tag to start the debounced search
	const processSearch = searchDebounced((value) =>
		dispatch(saveSearchQuery({ searchQuery: value }))
	);

	return (
		<div className={`search search--${searchStatus}`}>
			<div className="search__nav">
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href="#" onClick={() => dispatch(setSearchOpen(false))}>
					<div className="close" />
				</a>
			</div>

			<div className="search__container">
				<label>
					<h3>Brewery Search</h3>
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

export default Search;
