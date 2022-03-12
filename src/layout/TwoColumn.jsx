import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const TwoColumn = (props) => {
	const styles = props.background ? { background: props.background } : {};
	return (
		<Container>
			<Row>
				<Col className="col" xs={12} md={6}>
					{props.one}
				</Col>
				<Col className="col" xs={12} md={6}>
					{props.two}
				</Col>
			</Row>
		</Container>
	);
};

export default TwoColumn;
