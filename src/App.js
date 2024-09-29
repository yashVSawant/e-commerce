import React from 'react';
import './App.css';
import Header from './components/Layouts/Header';
import Products from './components/Products/Products';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Products/>
    </React.Fragment>
  );
}

export default App;
