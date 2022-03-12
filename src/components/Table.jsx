import React, { useState } from 'react';

// Components
import TableRowMobile from './TableRow--Mobile';

// redux
import {
	nextPage,
	previousPage,
	setFilterVariables,
} from './../slices/brewerySlice';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';

const Table = ({ data, error, isLoading, isFetching, isSuccess }) => {
	const [cityFilter, setCityFilter] = useState('');
	const [breweryNameFilter, setBreweryNameFilter] = useState('');
	const dispatch = useDispatch();
	const isMobile = useSelector((state) => state.brewery.isMobile);

	function breweriesFiltered() {
		let breweries = [];

		if (data) {
			breweries = data;
		}

		return breweries;
	}

	const mobileView = (items) => {
		return items.map((brewery) => {
			return (
				<TableRowMobile
					key={brewery.id}
					id={brewery.id}
					name={brewery.name}
					type={brewery.brewery_type}
					city={brewery.city}
					country={brewery.country}
					phone={brewery.phone}
					url={brewery.website_url}
				/>
			);
		});
	};

	const desktopView = (items) => {
		return (
			<table>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>City</th>
					<th>Country</th>
					<th>Url</th>
					<th>Phone</th>
				</tr>

				{items.map((brewery) => (
					<TableRow
						key={brewery.id}
						id={brewery.id}
						name={brewery.name}
						type={brewery.brewery_type}
						city={brewery.city}
						country={brewery.country}
						phone={brewery.phone}
						url={brewery.website_url}
					/>
				))}
			</table>
		);
	};

	function handleButtonClick(type, e) {
		e.preventDefault();

		switch (type) {
			case 'next':
				dispatch(nextPage());
				break;
			case 'previous':
				dispatch(previousPage());
				break;

			default:
				break;
		}
	}

	const getFilterInputs = () => {
		return (
			<div>
				<label>
					City
					<input
						type="text"
						value={cityFilter}
						onChange={(e) => setCityFilter(e.target.value)}
						style={{ display: 'block' }}
					/>
				</label>

				<label>
					Brewery Name
					<input
						type="text"
						value={breweryNameFilter}
						onChange={(e) => setBreweryNameFilter(e.target.value)}
						style={{ display: 'block' }}
					/>
				</label>

				<button onClick={(e) => handleFilterButtonClick(e)}>Go!</button>
			</div>
		);
	};

	const handleFilterButtonClick = (e) => {
		e.preventDefault();
		const city = cityFilter.replace(' ', '_');
		const brewery = breweryNameFilter.replace(' ', '_');

		dispatch(setFilterVariables({ city, brewery }));
	};

	const items = breweriesFiltered();

	return (
		<div>
			{isFetching && <h2>...Fetching</h2>}
			{isLoading && <h2>...Loading</h2>}
			{error && <h2>Something went wrong...</h2>}

			{isSuccess && (
				<>
					{getFilterInputs()}
					{isMobile && mobileView(items)}

					{!isMobile && desktopView(items)}
				</>
			)}

			{!error && (
				<>
					<button onClick={(e) => handleButtonClick('previous', e)}>
						Previous
					</button>

					<button onClick={(e) => handleButtonClick('next', e)}>
						Next
					</button>
				</>
			)}
		</div>
	);
};

export default Table;
