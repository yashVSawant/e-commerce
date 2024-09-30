import React from "react";

import Product from "./Product";
import { Container ,Row ,Col} from "react-bootstrap";

const Products = ()=>{
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

        const addToCartHandler = (id)=>{
            console.log(id)
        }
    return (
    <Container style={{paddingTop:"20vh"}}>
            <Row className="justify-content-center">
                <Col xs="auto" style={{margin:"10px"}}><h3>Music</h3></Col>
            </Row>
            <Row>{productsArr.map((p,i)=><Product product={p} key={'product'+i} onAddToCart={addToCartHandler}/>)}</Row>
    </Container>)
}

export default Products;