// react-router
import { Routes, Route, Link } from 'react-router-dom';

// Routes
import BreweryDetails from './routes/BreweryDetails';
import Home from './routes/Home';

import { useGetBreweriesQuery } from './services/brewery';

function App() {
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
