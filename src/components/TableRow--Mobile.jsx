import React from 'react';

// react router
import { Link } from 'react-router-dom';

const TableRowMobile = ({ id, name, type, city, country, phone, url }) => {
	return (
		<div>
			<div>
				<Link to={`/breweryDetails/${id}`}>
					<h2>{name}</h2>
				</Link>
			</div>
			<p>{type}</p>

			<div>
				<p>
					{city} {country}
				</p>
			</div>

			<div>
				<a href={`tel:${{ phone }}`}>{phone}</a>
			</div>

			{url && (
				<div>
					<a href={url}>{url}</a>
				</div>
			)}
		</div>
	);
};

export default TableRowMobile;
