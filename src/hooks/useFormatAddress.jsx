function useFormatAddress(
	street,
	address2,
	address3,
	city,
	state,
	postcode,
	country,
	province
) {
	return (
		<div>
			<h4>{`${street}, ${city} ${state}`}</h4>
			<p>{postcode}</p>
		</div>
	);
}
export default useFormatAddress;
