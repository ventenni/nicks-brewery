// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const breweryApi = createApi({
	reducerPath: 'breweryApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openbrewerydb.org/' }),
	endpoints: (builder) => ({
		// endpoint used to populate the home page table
		// it is able to be filtered by passing in a city name and/or brewery name.
		// If the results contain more than 15 breweries it is possible to also
		// increment the page number to cycle through all results.
		getBreweries: builder.query({
			query: ({ currentPage, cityName, breweryName }) =>
				`breweries?page=${currentPage}&per_page=15&by_city=${cityName}&by_name=${breweryName}`,
		}),

		// endpoint used to populate the BreweryDetails page.
		getBreweryById: builder.query({
			query: ({ breweryId }) => `breweries/${breweryId}`,
		}),

		// endpoint used by the Search component.
		// The calling of this endpoint is debounced to avoid too many api calls.
		getBreweriesWithAutoComplete: builder.query({
			query: ({ searchQuery }) =>
				`breweries/autocomplete?query=${searchQuery}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetBreweriesQuery,
	useGetBreweryByIdQuery,
	useGetBreweriesWithAutoCompleteQuery,
} = breweryApi;
