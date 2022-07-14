import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductPage from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="//product/:productId" element={<ProductPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
};

export default App;