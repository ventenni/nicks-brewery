import React from 'react';

const Button = ({ children, rounded = false, className, click }) => {
	const roundedEdges = rounded ? 'btn-rounded' : '';

	return (
		<a
			// href="#"
			className={`button ${className} ${roundedEdges}`}
			onClick={() => click()}
		>
			{children}
		</a>
	);
};

export default Button;
