const Iframe = ({ iframeUrl }) => {
	return (
		<iframe
			title="Brewery Location"
			src={iframeUrl}
			width="100%"
			height="auto"
			style={{ border: 0 }}
			allowFullScreen=""
			loading="lazy"
		></iframe>
	);
};

export default Iframe;
