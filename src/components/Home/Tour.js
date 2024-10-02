import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Tour = (props)=>{
    const tour = props.tour;
    return(<Row xs={4}>
            <Col xs={2}>{tour.date}</Col>
            <Col xs={3}>{tour.city}</Col>
            <Col xs={4}>{tour.location}</Col>
            <Col><Button>BUY TICKETS</Button></Col>
            
    </Row>)
}

export default Tour;