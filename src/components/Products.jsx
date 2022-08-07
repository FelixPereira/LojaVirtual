import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import Product from './Product';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({filters, category, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    try{
      const getProducts = async () => {
        const res = await axios.get(category 
          ? `http://localhost:5000/api/products/?${category}`
          : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      };
      getProducts();
    } catch(err) {
      console.log(err.message);
    }
  }, [category]);

  useEffect(() => {
    category &&
    setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) => item[key].includes(value)
      ))
    );
  }, [category, products, filters]);

  useEffect(() => {
    if(sort === 'newest') {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if(sort === 'asc') {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price));
    }

  }, [sort]);


  return(
    <Container>
      { category 
        ? filteredProducts.map(item => ( <Product item={item} key={item._id} />))
        : products.slice(0, 9).map(item => ( <Product item={item} key={item._id} />))
      }
    </Container>
  )
};

export default Products;