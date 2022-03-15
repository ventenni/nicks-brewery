import React, { useState } from 'react';

// Components
import Button from './Button';
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
	const currentPage = useSelector((state) => state.brewery.currentPage);

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
			<table className="desktop-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>City</th>
						<th>Country</th>
						<th>Url</th>
						<th>Phone</th>
					</tr>
				</thead>

				<tbody>
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
				</tbody>
			</table>
		);
	};

	function handleButtonClick(type) {
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
			<div className="table__filter-inputs">
				<label>
					City
					<input
						type="text"
						value={cityFilter}
						onChange={(e) => setCityFilter(e.target.value)}
					/>
				</label>

				<label>
					Brewery Name
					<input
						type="text"
						value={breweryNameFilter}
						onChange={(e) => setBreweryNameFilter(e.target.value)}
					/>
				</label>

				<Button
					url="#table"
					click={() => handleFilterButtonClick()}
					className="btn-basic"
				>
					Go!
				</Button>
			</div>
		);
	};

	const handleFilterButtonClick = () => {
		const city = cityFilter.replace(' ', '_');
		const brewery = breweryNameFilter.replace(' ', '_');

		dispatch(setFilterVariables({ city, brewery }));
	};

	return (
		<div className="table">
			{isFetching && <h2>...Fetching</h2>}
			{isLoading && <h2>...Loading</h2>}
			{error && <h2>Something went wrong...</h2>}

			{isSuccess && (
				<>
					{getFilterInputs()}

					{data?.length > 0 && (
						<div id="table">
							<p>{`Results on this page: ${data.length}`}</p>
						</div>
					)}

					{isMobile && mobileView(data)}

					{!isMobile && desktopView(data)}
				</>
			)}

			{!error && (
				<div className="table__buttons">
					<Button
						disabled={
							data?.length < 15 && currentPage === 1
								? true
								: false
						}
						click={() => handleButtonClick('previous')}
						className="btn-basic"
					>
						Previous
					</Button>

					<Button
						disabled={data?.length < 15 ? true : false}
						click={() => handleButtonClick('next')}
						className="btn-basic"
						url="#table"
					>
						Next
					</Button>
				</div>
			)}
		</div>
	);
};

export default Table;
