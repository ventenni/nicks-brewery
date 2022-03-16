import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentPage: 1,
	cityName: '',
	breweryName: '',
	isMobile: false,
	searchOpen: false,
	searchQuery: '',
	searchResults: [],
};

export const brewerySlice = createSlice({
	name: 'breweries',
	initialState,
	reducers: {
		// Used for the table on the home page.
		// The table component has some code to ensure that a user cannot increment beyond
		// the returned results.
		nextPage: (state) => {
			//
			state.currentPage += 1;
		},
		// Used for the table on the home page.
		// A simple check to ensure that a user cannot go below 1 as it would cause issues
		// with the API call
		previousPage: (state) => {
			if (state.currentPage > 1) {
				state.currentPage -= 1;
			}
		},

		// Used to keep the search results available in the search component.
		// Handy for someone who is looking for a specific brewery and doesn't
		// have to repeatedly enter the search query.
		saveSearchQuery: (state, action) => {
			state.searchQuery = action.payload.searchQuery;
			console.log(
				`state: ${state.searchQuery}, payload: ${action.payload.searchQuery}`
			);
		},

		// Used by components to render certain views/components for a better
		// experience.
		setMobile: (state, action) => {
			console.log(action.payload.isMobile);
			state.isMobile = action.payload.isMobile;
		},

		// Used to keep track of the search status.
		// The component is opened and closed from 2 different components. This ensures
		// that there is no needless props drilling.
		setSearchOpen: (state, action) => {
			state.searchOpen = action.payload.searchOpen;
		},

		// Used by the table component.
		// Keeps track of the filter queries a user searches for.
		setFilterVariables: (state, action) => {
			state.cityName = action.payload.city;
			state.breweryName = action.payload.brewery;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	increment,
	decrement,
	incrementByAmount,
	saveSearchQuery,
	nextPage,
	previousPage,
	setMobile,
	setFilterVariables,
	setSearchOpen,
} = brewerySlice.actions;

export default brewerySlice.reducer;
