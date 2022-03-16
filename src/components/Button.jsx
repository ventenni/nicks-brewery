// Custom button component that can be take functions as props
const Button = ({
	children,
	rounded = false,
	className,
	click = null,
	url,
	target,
	disabled = false,
}) => {
	const roundedEdges = rounded ? 'btn-rounded' : '';

	const onClickAction = () => {
		if (click !== null) {
			click();
		}
	};

	const isDisabled = disabled ? 'disabled' : '';

	return (
		<a
			href={url}
			className={`button ${className} ${roundedEdges} ${isDisabled}`}
			onClick={(e) => onClickAction(e)}
			target={target}
		>
			{children}
		</a>
	);
};

export default Button;
