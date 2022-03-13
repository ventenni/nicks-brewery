import React from 'react';

const Section = (props) => {
	return (
		<section className="section">
			<div className="section__container">{props.children}</div>
		</section>
	);
};

export default Section;
