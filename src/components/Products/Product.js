import React from "react";

const Product = (props)=>{
    const product = props.product;
    return (<li>
        <h3>{product.title}</h3>
        <img scr={product.imageUrl} alt="product"></img>
        <p>{product.price}</p>
    </li>)
}

export default Product;