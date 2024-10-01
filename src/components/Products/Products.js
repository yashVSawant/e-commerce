import React ,{useContext} from "react";

import Product from "./Product";
import { Container ,Row ,Col} from "react-bootstrap";
import CartContext from "../Context/cart-Context";

const Products = ()=>{
    const cartContext = useContext(CartContext);
    const productsArr = [
        {
        id:10,
        title: 'Colors', 
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        id:12,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        id:13,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        id:14,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]

        const addToCartHandler = (id)=>{
            const product = productsArr.find((p)=>p.id === id);
            if(product)cartContext.addItem({...product ,quantity:1});
        }
    return (
    <Container style={{paddingTop:"20vh"}}>
            <Row className="justify-content-center">
                <Col xs="auto" style={{margin:"10px"}}><h3>Music</h3></Col>
            </Row>
            <Row>{productsArr.map((p)=><Product product={p} onAddToCart={addToCartHandler}/>)}</Row>
    </Container>)
}

export default Products;