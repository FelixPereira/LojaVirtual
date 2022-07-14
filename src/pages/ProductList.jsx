import React, { useState } from 'react';

import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;

  ${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({ marginRight: '0' })};
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;

  ${mobile({ margin: '10px 0' })};
`;

const Option = styled.option`
  margin-bottom: 20px;
`;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const category = useParams().category;

  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFilters({
      ...filters,
      [name]: value
    });
  }


  return(
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} defaultValue="Color">
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters} defaultValue="Size">
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (ASC)</Option>
            <Option value="desc">Price (DESC)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} sort={sort} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default ProductList;