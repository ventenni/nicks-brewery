import React from 'react';

// react router
import { useParams } from 'react-router-dom';

// Components
import Hero from './../components/Hero';
import Section from './../layout/Section';
// import SquareImage from './../components/SquareImage';

// redux
import { useGetBreweryByIdQuery } from '../services/brewery';
import InfoCards from '../components/InfoCards';
import Iframe from '../components/Iframe';
import useFormatAddress from '../hooks/useFormatAddress';

const BreweryDetails = () => {
	const { breweryId } = useParams();

	const { data, error, isLoading, isFetching, isSuccess } =
		useGetBreweryByIdQuery({ breweryId });

	console.log({ data });

	const iframeUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=${data?.latitude},${data?.longitude}`;

	const formattedAddress = useFormatAddress(
		data?.street,
		data?.address_2,
		data?.address_3,
		data?.city,
		data?.state,
		data?.postal_code,
		data?.country,
		data?.county_province
	);

	return (
		<>
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
						<InfoCards
							street={data?.street}
							address2={data?.address_2}
							address3={data?.address_3}
							city={data?.city}
							state={data?.state}
							postcode={data?.postal_code}
							country={data?.country}
							province={data?.county_province}
							phone={data?.phone}
							type={data?.brewery_type}
							url={data?.website_url}
						/>
					</Section>

					{/* 
					<Section>
						<div className="square-images">
							<div>
								<SquareImage
									title={'Brewery Type'}
									subtitle={data?.brewery_type}
									url={data?.website_url}
									image={
										'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
									}
								/>
							</div>
							<div>
								<SquareImage
									title={'Phone'}
									subtitle={data?.phone}
									url={`tel:${data?.phone}`}
									image={
										'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
									}
								/>
							</div>
							<div>
								<SquareImage
									title={'Address'}
									subtitle={formattedAddress}
									image={
										'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
									}
								/>
							</div>
						</div>
					</Section> */}

					<Section>
						<Iframe iframeUrl={iframeUrl} />
					</Section>
				</>
			)}
		</>
	);
};

export default BreweryDetails;
