import React,{useContext} from "react";

import CartItem from "./CartItem";
import CartContext from "../Context/cart-Context";

import {Row ,Col, Button} from "react-bootstrap";
import "../../styles/Cart.css"

const Cart = (props)=>{
    const cartContext = useContext(CartContext);
    const cartProducts = cartContext.items;
    const removeHandler = (id)=>{
        cartContext.removeItem(id);
    }
    return (
        <div className="cart-container" >
            <header className="cart-header">
                <Row><Col className="d-flex justify-content-center"><h2>Cart</h2></Col></Row>
                <Row xs={4} style={{height:"10vh"}}>
                    <Col xs={5} className="d-flex align-items-center"><h3>Item</h3></Col>
                    <Col className="d-flex align-items-center"><h3>Price</h3></Col>
                    <Col xs={4} className="d-flex align-items-center"><h3>Quantity</h3></Col>
                </Row>
            </header>
            <div className="cart-items">
                {cartProducts.map((item)=><CartItem item={item} onRemove={removeHandler}/>)}
            </div>
            <footer className="cart-bottom">
                <Row >
                    <Col>
                        <p>Total: {cartContext.totalPrice}</p>
                    </Col>
                    <Col>
                        <Button>Purchase</Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button onClick={props.onCloseCart}>Close</Button>
                    </Col>
                </Row>
            </footer>
            
        </div>
    )
}

export default Cart;