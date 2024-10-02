import React from "react";

import { Button, Container,Row ,Col  } from "react-bootstrap";

import Tours from "../components/Home/Tours";

import "../styles/Home.css"

const Home = ()=>{
    return (
        <Container style={{paddingTop:"20vh"}} className=" d-flex-column justify-content-center">
            <Row>
                <Col className=" d-flex justify-content-center"><Button>Get our latest Album</Button></Col>
            </Row>
            <hr/>
            <Row className="mt-5">
                <Tours/>
            </Row>
        </Container>
        
    )
}

export default Home;