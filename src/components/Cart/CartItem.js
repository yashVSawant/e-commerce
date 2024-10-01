import React from "react";
import { Col,Row ,Image, Button} from "react-bootstrap";

const CartItem = (props)=>{
    const item = props.item;
    const removeHandler = (id)=>{
        return ()=>{
            props.onRemove(id)
        }
    }
    return (
        <Row xs={4} className="p-1 m-0" style={{ height: '10vh' }}>
            <Col xs={5} className="d-flex align-items-center p-1">
                <Image src={item.imageUrl} width="50px" height="40px" rounded className="m-2" />
                <p>{item.title}</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <p>{item.price}</p>
            </Col>
            <Col xs={4} className="d-flex  align-items-center">
                <p>{item.quantity || 1}</p>
                <Button className="m-2" variant="danger" onClick={removeHandler(item.id)}>Remove</Button>
            </Col>
        </Row>
    )
}

export default CartItem;