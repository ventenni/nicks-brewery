import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const ThreeColumn = (props) => {
	const styles = props.background ? { background: props.background } : {};

	return (
		<Container className="three-column" style={styles}>
			<Row>
				<Col xs={12} md={6} lg={4} style={styles}>
					{props.one}
				</Col>
				<Col xs={12} md={6} lg={4} style={styles}>
					{props.two}
				</Col>
				<Col xs={12} md={6} lg={4} style={styles}>
					{props.three}
				</Col>
			</Row>
		</Container>
	);
};

export default ThreeColumn;
