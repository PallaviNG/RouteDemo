import './App.css';
import React from 'react';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import { Route } from 'react-router';

function App() {
  return (
    <>
      {/* <h4>Hello</h4> */}
      <Route path="/" component={ProductList} />
      <Route path="/add-product" component={AddProduct} />
    </>
  );
}

export default App;