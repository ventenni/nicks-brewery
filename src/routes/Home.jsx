import React from 'react';

// components
import SearchInput from './../components/SearchInput';
import Table from './../components/Table';

// redux
import { useSelector } from 'react-redux';
import { useGetBreweriesQuery } from '../services/brewery';

const Home = () => {
	const currentPage = useSelector((state) => state.brewery.currentPage);
	// Get list of breweries on page load
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesQuery({ currentPage });

	return (
		<div>
			<h1>Home</h1>

			<section>
				<SearchInput />
			</section>

			<section>
				<Table
					data={data}
					error={error}
					isFetching={isFetching}
					isLoading={isLoading}
					isSuccess={isSuccess}
				/>
			</section>
		</div>
	);
};

export default Home;
