import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

// redux
import { useGetBreweriesWithAutoCompleteQuery } from './../services/brewery';

const SearchResults = ({ searchQuery }) => {
	// Get list of breweries using the search query
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesWithAutoCompleteQuery({
			searchQuery,
		});

	return (
		<div>
			{/* {data?.length === 0 && ''} */}
			{isLoading && <h3>...Loading</h3>}
			{isFetching && <h3>...Fetching</h3>}
			{error && <h3>{error}</h3>}
			{isSuccess && (
				<datalist
					id="breweries"
					onChange={() => console.log('datalist click')}
				>
					{data.map((item) => {
						return (
							<Link to="breweryDetails" key={item.id}>
								<option
									value={item.name}
									onClick={() =>
										console.log('clicked the option')
									}
								>
									{item.name}
								</option>
							</Link>
						);
					})}
				</datalist>
			)}
		</div>
	);
};

export default SearchResults;
