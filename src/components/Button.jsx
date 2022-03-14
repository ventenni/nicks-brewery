import React from 'react';

const Button = ({
	children,
	rounded = false,
	className,
	click = null,
	url,
	target,
}) => {
	const roundedEdges = rounded ? 'btn-rounded' : '';

	const onClickAction = () => {
		if (click !== null) {
			click();
		}
	};

	return (
		<a
			href={url}
			className={`button ${className} ${roundedEdges}`}
			onClick={() => onClickAction()}
			target={target}
		>
			{children}
		</a>
	);
};

export default Button;
