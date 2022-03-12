import React from 'react';

// react router
import { useParams } from 'react-router-dom';

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
		</>
	);
};

export default BreweryDetails;
