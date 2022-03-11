// react-router
import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Routes
import BreweryDetails from './routes/BreweryDetails';
import Home from './routes/Home';

// redux
import { useSelector } from 'react-redux';

import { useGetBreweriesQuery } from './services/brewery';

function App() {
	// useEffect(() => {}, []);
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
