import React from 'react';

// react router
import { Link } from 'react-router-dom';

const TableRow = ({ id, name, type, city, country, url, phone }) => {
	return (
		<tr>
			<td>
				<Link to={`/breweryDetails/${id}`}>{name}</Link>
			</td>
			<td>{type}</td>
			<td>{city}</td>
			<td>{country}</td>
			<td>
				<a href={url}>{url}</a>
			</td>
			<td>
				<a href={`tel:${phone}`}>{phone}</a>
			</td>
		</tr>
	);
};

export default TableRow;
