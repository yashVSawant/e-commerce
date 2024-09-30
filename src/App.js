import React from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import Products from './components/Products/Products';
import CartProvider from './components/Context/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header/>
      <Products/>
    </CartProvider>
  );
}

export default App;
