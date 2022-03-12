import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentPage: 1,
	cityName: '',
	breweryName: '',
	isMobile: false,
	searchQuery: '',
	searchResults: [],
};

export const brewerySlice = createSlice({
	name: 'breweries',
	initialState,
	reducers: {
		nextPage: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.currentPage += 1;
		},
		previousPage: (state) => {
			if (state.currentPage > 1) {
				state.currentPage -= 1;
			}
		},
		saveSearchResults: (state, action) => {
			state.searchResults = action.payload.data;
		},
		saveSearchQuery: (state, action) => {
			state.searchQuery = action.payload.searchQuery;
			console.log(
				`state: ${state.searchQuery}, payload: ${action.payload.searchQuery}`
			);
		},
		saveBreweriesFromSearchResults: (state, action) => {
			state.searchResults = action.payload.searchResults;
		},
		setMobile: (state, action) => {
			console.log(action.payload.isMobile);
			state.isMobile = action.payload.isMobile;
		},
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
	saveBreweriesFromSearchResults,
	saveSearchQuery,
	saveSearchResults,
	nextPage,
	previousPage,
	setMobile,
	setFilterVariables,
} = brewerySlice.actions;

export default brewerySlice.reducer;
