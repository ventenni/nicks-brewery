// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const breweryApi = createApi({
	reducerPath: 'breweryApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openbrewerydb.org/' }),
	endpoints: (builder) => ({
		getBreweries: builder.query({
			query: ({ currentPage }) =>
				`breweries?page=${currentPage}&per_page=15`,
		}),
		getBreweryById: builder.query({
			query: (name) => `breweries/${name}`,
		}),
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
