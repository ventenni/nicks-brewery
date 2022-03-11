// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import breweryReducer from './../slices/brewerySlice';
import { breweryApi } from './../services/brewery';

export const store = configureStore({
	reducer: {
		brewery: breweryReducer,
		// Add the generated reducer as a specific top-level slice
		[breweryApi.reducerPath]: breweryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(breweryApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
