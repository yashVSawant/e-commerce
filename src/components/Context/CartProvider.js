import React ,{useState} from 'react';
import CartContext from "./cart-Context"

const CartProvider = (props)=>{
    const [items , setItems] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0);

    const addItemHandler = (item)=>{
        setItems(prevValue =>{
            const getItem = prevValue.find(i=>i.id === item.id);
            setTotalPrice((prevValue)=>{
                return prevValue + item.quantity*item.price
            })
            if(!getItem)return [...prevValue , item];
            getItem.quantity += item.quantity;
            return [...prevValue , getItem];
        })
    }

    const removeItemHandler = (id)=>{
        setItems(prevValue =>{
            const getItem = prevValue.find(i=>i.id === id);
            let filteredItem = prevValue;
            if(!getItem)return [...prevValue];
            if(getItem.quantity >1){
                getItem.quantity -= 1;
            }else{
               filteredItem = prevValue.filter((i)=>i.id !== id);
            } 
            const amountAvailable = filteredItem.reduce((currentValue ,i)=>{return currentValue + +i.price*i.amount},0);
            setTotalPrice(amountAvailable);
            return [...filteredItem];
        })
    }

    const cartContext = {
        items:items,
        totalPrice:totalPrice,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;