import React from 'react';

// components
import SearchResultItem from './SearchResults--Item';

// redux
import { useGetBreweriesWithAutoCompleteQuery } from './../services/brewery';

// Container component for the search results items.
// Handles the call to the api endpoint.
const SearchResults = ({ searchQuery }) => {
	// Get list of breweries using the search query
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesWithAutoCompleteQuery({
			searchQuery,
		});

	return (
		<div className="search-results">
			{isLoading && <h3>...Loading</h3>}

			{isFetching && <h3>...Fetching</h3>}

			{error && <h3>{error}</h3>}

			{isSuccess &&
				data.map((item) => {
					return (
						<SearchResultItem
							key={item.id}
							id={item.id}
							name={item.name}
						/>
					);
				})}
		</div>
	);
};

export default SearchResults;
