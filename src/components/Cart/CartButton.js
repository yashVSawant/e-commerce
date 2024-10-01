import React ,{useContext} from "react";

import CartContext from "../Context/cart-Context";

import {Button} from "react-bootstrap";

const CartButton = (props)=>{
    const cartContext = useContext(CartContext);
    return (
        <React.Fragment>
            <Button style={{margin:'5px'}} onClick={props.onClick}>
                <span>Cart</span>
            </Button>
            <p style={{color:"white"}}>{cartContext.totalQuantity}</p>
        </React.Fragment>
    )
}

export default CartButton;