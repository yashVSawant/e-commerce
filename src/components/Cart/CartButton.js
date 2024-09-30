import React from "react";

import {Button} from "react-bootstrap";

const CartButton = ()=>{
    return (
        <React.Fragment>
            <Button style={{margin:'5px'}}>
                <span>Cart</span>
            </Button>
            <p style={{color:"white"}}>0</p>
        </React.Fragment>
    )
}

export default CartButton;