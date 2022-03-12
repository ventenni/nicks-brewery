import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const FourColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Container className="four-column">
			<Row>
				<Col xs={12} lg={3} style={styles}>
					{props.one}
				</Col>
				<Col xs={12} lg={3} style={styles}>
					{props.two}
				</Col>
				<Col xs={12} lg={3} style={styles}>
					{props.three}
				</Col>
				<Col xs={12} lg={3} style={styles}>
					{props.four}
				</Col>
			</Row>
		</Container>
	);
}
 
export default FourColumn;