import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const OneColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Container className="one-column">
			<Row>
				<Col xs={12} style={styles}>
					{props.children}
				</Col>
			</Row>
		</Container>
	);
}
 
export default OneColumn;