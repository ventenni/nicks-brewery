import { useEffect } from 'react';

// hooks
import useCheckMobile from './hooks/useCheckMobile';

// react-router
import { Routes, Route, Link } from 'react-router-dom';

// Routes
import BreweryDetails from './routes/BreweryDetails';
import Home from './routes/Home';

// redux
import { useDispatch } from 'react-redux';
import { setMobile } from './slices/brewerySlice';

function App() {
	const dispatch = useDispatch();
	function HandleMobileChange() {
		let mobile = useCheckMobile(768);
		dispatch(setMobile({ isMobile: mobile }));
	}

	useEffect(() => {
		HandleMobileChange();
		window.addEventListener('resize', HandleMobileChange);

		return () => window.removeEventListener('resize', HandleMobileChange);
	});
	return (
		<div className="App">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/breweryDetails">Brewery Details</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="breweryDetails" element={<BreweryDetails />} />
			</Routes>
		</div>
	);
}

export default App;
