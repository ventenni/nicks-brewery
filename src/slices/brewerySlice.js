import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
	searchQuery: '',
	searchResults: [],
};

export const brewerySlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
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
} = brewerySlice.actions;

export default brewerySlice.reducer;
