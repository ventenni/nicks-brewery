import React from 'react';

import { Link } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchResults } from './../slices/brewerySlice';
import { useGetBreweriesWithAutoCompleteQuery } from './../services/brewery';

const SearchResults = ({ searchQuery }) => {
	// Get list of breweries using the search query
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesWithAutoCompleteQuery({
			searchQuery,
		});

	console.log({ data });
	return (
		<div>
			{data?.length === 0 && ''}
			{isLoading && <h3>...Loading</h3>}
			{isFetching && <h3>...Fetching</h3>}
			{error && <h3>{error}</h3>}
			{isSuccess && (
				<datalist id="breweries">
					{data.map((item) => {
						return (
							<Link to="breweryDetails" key={item.id}>
								<option value={item.name}>{item.name}</option>
							</Link>
						);
					})}
				</datalist>
			)}
		</div>
	);
};

export default SearchResults;
