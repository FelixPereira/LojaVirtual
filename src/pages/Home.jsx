import React from 'react';
import styled from 'styled-components';

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Container = styled.div``;

const Home = () => {
  return(
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </Container>
  )
};

export default Home;