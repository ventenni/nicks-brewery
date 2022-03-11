import React from 'react';

// Components
import TableRowMobile from './TableRow--Mobile';

// redux
import { nextPage, previousPage } from './../slices/brewerySlice';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';

const Table = ({ data, error, isLoading, isFetching, isSuccess }) => {
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

	const items = breweriesFiltered();

	return (
		<div>
			{isFetching && <h2>...Fetching</h2>}
			{isLoading && <h2>...Loading</h2>}
			{error && <h2>Something went wrong...</h2>}

			{isSuccess && (
				<>
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
