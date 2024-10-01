import React,{useState} from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import Products from './components/Products/Products';
import CartProvider from './components/Context/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [isCartOpne , setIsCartOpne] = useState(false);
  const cartHandler = ()=>{
    setIsCartOpne((prevValue)=>{
      return !prevValue
    })
  }
  return (
    <CartProvider>
      <Header onCartClick={cartHandler}/>
      {isCartOpne && <Cart onCloseCart={cartHandler}/>}
      <Products/>
    </CartProvider>
  );
}

export default App;
