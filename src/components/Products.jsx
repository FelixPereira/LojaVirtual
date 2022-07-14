import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import { popularProducts } from '../data';
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
    setProducts(popularProducts);
    /*
      try{
      const getProducts = async () => {
        const res = await axios.get(category 
          ? `http://localhost:5000/products/${category}`
          : "http://localhost:5000/products"
        );
        // setProducts(res.data);
      };
      getProducts();
    } catch(err) {
      console.log(err);
    }
    */
  }, [category]);

  useEffect(() => {
    category &&
    setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) => item[key].includes(value)
      ))
    );
  }, [category, products, filters]);

  return(
    <Container>
      {
        filteredProducts.map(item => (
          <Product item={item} key={item.id} />
        ))
      }
    </Container>
  )
};

export default Products;