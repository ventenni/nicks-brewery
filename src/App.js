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
import Footer from './components/Footer';

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
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					exact
					path="breweryDetails/:breweryId"
					element={<BreweryDetails />}
				/>
			</Routes>

			<Footer>
				<a href="www.github.com">Github</a>
			</Footer>
		</div>
	);
}

export default App;
