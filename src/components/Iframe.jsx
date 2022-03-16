// Simple iframe component that takes a url and title
// to be easily reused.
const Iframe = ({ iframeUrl, iframeTitle }) => {
	return (
		<iframe
			title={iframeTitle}
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
