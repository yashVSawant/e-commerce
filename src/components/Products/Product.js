import React from "react";
import {Card ,Button ,Col} from "react-bootstrap"

const Product = (props)=>{
    const product = props.product;
    const onClickHandler = (id)=>{
        return ()=>{
            props.onAddToCart(id)
        }
    }
    return (
    <Col xs={4} style={{marginBlock:"15px"}}>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={product.imageUrl}/>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={onClickHandler(2)}>Add To Cart</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Product;