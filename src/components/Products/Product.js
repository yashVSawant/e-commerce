import React from "react";
import {Card ,Button ,Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = (props)=>{
    const navigate = useNavigate();
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
                <Button variant="primary" onClick={onClickHandler(product.id)}>Add To Cart</Button>
                <Button variant="primary" onClick={()=>{navigate("/store/product.id")}}>View</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Product;