import React from 'react';

// components
import SearchInput from './../components/SearchInput';
import Section from './../layout/Section';
import Table from './../components/Table';

// redux
import { useSelector } from 'react-redux';
import { useGetBreweriesQuery } from '../services/brewery';

const Home = () => {
	const currentPage = useSelector((state) => state.brewery.currentPage);
	const cityName = useSelector((state) => state.brewery.cityName);
	const breweryName = useSelector((state) => state.brewery.breweryName);
	// Get list of breweries on page load
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesQuery({ currentPage, cityName, breweryName });

	return (
		<div>
			<h1>Home</h1>

			<Section>
				<SearchInput />
			</Section>

			<Section>
				<Table
					data={data}
					error={error}
					isFetching={isFetching}
					isLoading={isLoading}
					isSuccess={isSuccess}
				/>
			</Section>
		</div>
	);
};

export default Home;
