import React ,{useState} from 'react';
import CartContext from "./cart-Context"

const CartProvider = (props)=>{
    const [items , setItems] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0);
    const [totalQuantity , setTotalQuantity] = useState(0);

    const addItemHandler = (item)=>{
        const getItem = items.find(i=>i.id === item.id);
        if(!getItem)setItems([...items , item]);
        else{
            getItem.quantity += item.quantity;
            setItems([...items]);
        }
        setTotalPrice((prevValue)=>{
            return prevValue + item.quantity*item.price
        });
        
        setTotalQuantity(totalQuantity + item.quantity);
    }

    const removeItemHandler = (id)=>{
        const getItem = items.find(i=>i.id === id);
        let filteredItem = items;
        if(!getItem)return;
        if(getItem.quantity >1){
            getItem.quantity -= 1;
        }else{
            filteredItem = items.filter((i)=>i.id !== id);
        } 
        const amountAvailable = filteredItem.reduce((currentValue ,i)=>{return currentValue + +i.price*i.quantity},0);
        setTotalPrice(amountAvailable);
        setItems([...filteredItem]);
        setTotalQuantity(totalQuantity -1);
    }

    const cartContext = {
        items:items,
        totalPrice:totalPrice,
        totalQuantity:totalQuantity,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;