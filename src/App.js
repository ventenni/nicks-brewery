import { useEffect } from 'react';

// hooks
import useCheckMobile from './hooks/useCheckMobile';

// react-router
import { Routes, Route } from 'react-router-dom';

// Routes
import BreweryDetails from './routes/BreweryDetails';
import Home from './routes/Home';

// redux
import { useDispatch } from 'react-redux';
import { setMobile } from './slices/brewerySlice';

// Components
import Nav from './components/Nav';

function App() {
	const dispatch = useDispatch();

	function HandleMobileChange() {
		let mobile = useCheckMobile(992);
		dispatch(setMobile({ isMobile: mobile }));
	}

	useEffect(() => {
		HandleMobileChange();
		window.addEventListener('resize', HandleMobileChange);

		return () => window.removeEventListener('resize', HandleMobileChange);
	});

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					exact
					path="breweryDetails/:breweryId"
					element={<BreweryDetails />}
				/>
			</Routes>
		</div>
	);
}

export default App;
