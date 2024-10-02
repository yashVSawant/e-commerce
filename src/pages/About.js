import React from "react";
import { Container,Row ,Col ,Image} from "react-bootstrap";

import Info from "../components/About/Info";

const About = ()=>{
    return (<Container style={{paddingTop:"20vh"}}>
        <Row>
            <Col>
            <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" roundedCircle />
            </Col>
            <Col className="justify-content-center"><h1>About Us!</h1></Col>
        </Row>
        <Info/>
    </Container>)
}

export default About;