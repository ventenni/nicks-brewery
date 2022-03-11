import React from 'react';

const TableRowMobile = ({ name, type, city, country, phone, url }) => {
	const Tag = url?.length > 0 ? 'a' : 'div';

	return (
		<div>
			<Tag href={url} target="_blank">
				<h2>{name}</h2>
			</Tag>

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
