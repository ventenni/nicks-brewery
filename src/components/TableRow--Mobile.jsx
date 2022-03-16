import React from 'react';

// react router
import { Link } from 'react-router-dom';

// Mobile version of the table row.
// Used in the Table component
const TableRowMobile = ({ id, name, type, city, country, phone, url }) => {
	return (
		<div className="table-mobile-card" id="table">
			<div className="table-mobile-card__heading">
				<Link to={`/breweryDetails/${id}`}>
					<h4>{name}</h4>
				</Link>
			</div>

			<div className="table-mobile-card__body">
				<p className="table-mobile-card__body__type">{type} Brewery</p>

				<p className="table-mobile-card__body__location">{`${city}, ${country}`}</p>

				<p className="table-mobile-card__body__phone">
					Phone: <a href={`tel:${{ phone }}`}>{phone}</a>
				</p>

				{url && (
					<p className="table-mobile-card__body__website">
						Website: <a href={url}>{url}</a>
					</p>
				)}
			</div>
		</div>
	);
};

export default TableRowMobile;
