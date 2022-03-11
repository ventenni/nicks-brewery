import React from 'react';

const TableRow = ({ name, type, city, country, url, phone }) => {
	return (
		<tr>
			<td>{name}</td>
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
