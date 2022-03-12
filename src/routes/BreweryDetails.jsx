import React, { useEffect } from 'react';

// react router
import { useParams } from 'react-router-dom';

// Components
import Button from '../components/Button';
import Hero from './../components/Hero';
import Location from '../components/Location';
import Section from './../layout/Section';

// redux
import { useGetBreweryByIdQuery } from '../services/brewery';

const BreweryDetails = () => {
	const { breweryId } = useParams();

	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweryByIdQuery({ breweryId });

	return (
		<>
			{data?.name}
			{breweryId}
			<h1>Brewery Details</h1>

			{data?.brewery_type}
			{data?.phone}
			{data?.website_url}
			{data?.updated_at}
			{data?.created_at}

			{isFetching && <h2>...Fetching</h2>}
			{isLoading && <h2>...Loading</h2>}
			{error && <h2>Something went wrong...</h2>}
			{isSuccess && (
				<>
					<Hero
						image={
							'https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
						}
						heading={data?.name}
					/>

					<Section>
						<Location
							street={data?.street}
							address2={data?.address_2}
							address3={data?.address_3}
							city={data?.city}
							state={data?.state}
							postcode={data?.postal_code}
							country={data?.country}
							province={data?.county_province}
							longitude={data?.longitude}
							latitude={data?.latitude}
						/>
					</Section>

					<Section>
						<Button
							className={'btn-basic--outline'}
							click={() => console.log('click button')}
						>
							Visit Website
						</Button>
					</Section>
				</>
			)}
		</>
	);
};

export default BreweryDetails;
