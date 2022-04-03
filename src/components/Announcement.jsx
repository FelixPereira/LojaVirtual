import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
`;

const Announcement = () => {
  return(
    <Container>Super Deal! Free Shipping on Orders Over $50.</Container>
  )
};

export default Announcement;