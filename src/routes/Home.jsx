import React, { useEffect } from 'react';

// components
import Hero from './../components/Hero';
import Section from './../layout/Section';
import Table from './../components/Table';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { saveTableResults } from './../slices/brewerySlice';
import { useGetBreweriesQuery } from '../services/brewery';

const Home = () => {
	const currentPage = useSelector((state) => state.brewery.currentPage);
	const cityName = useSelector((state) => state.brewery.cityName);
	const breweryName = useSelector((state) => state.brewery.breweryName);
	const tableResults = useSelector((state) => state.brewery.tableResults);
	const dispatch = useDispatch();

	// Get list of breweries on page load
	// Uses getBreweriesWithAutoComplete endpoint in brewery.js
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweriesQuery({ currentPage, cityName, breweryName });

	useEffect(() => {
		dispatch(saveTableResults({ tableResults: data }));
	}, [data]);

	return (
		<div>
			<Hero
				heading="Nick's Brewery"
				image="https://images.unsplash.com/photo-1559526642-c3f001ea68ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
			/>

			<Section>
				<Table
					data={tableResults}
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
