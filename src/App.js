import React,{useState} from 'react';
import { BrowserRouter as Router,Route,Routes , } from 'react-router-dom';
import './App.css';
import Header from './components/Layouts/Header';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
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
      <Router>
      <Header onCartClick={cartHandler}/>
      {isCartOpne && <Cart onCloseCart={cartHandler}/>}
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/store"  element={<Store/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
