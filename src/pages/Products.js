import React, { useEffect } from "react";
import { Container ,Image ,Row ,Col } from "react-bootstrap";
import axios from "axios";

import { useParams } from "react-router-dom";

const Products = ()=>{
    const {productId} = useParams();
    useEffect(()=>{
        const apiCall = async()=>{
            try {
                const productFetch = await axios.get(`https://movie-9cc84-default-rtdb.asia-southeast1.firebasedatabase.app/product/${productId}.json`)
                console.log(productFetch)
            } catch (err) {
               console.log(err) 
            }
            
        }
        apiCall();
    } ,[productId])
    return (
        <Container style={{paddingTop:"20vh"}}>
            <Row>
                <Col>
                    <Image src=""/>
                </Col>
                <Col>
                    <p>
                        info
                    </p>
                    <p>
                        reviews
                    </p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Products;