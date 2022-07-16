import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../assets/cart-add.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  align-items: center; 
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all .5s;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
  return(
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <IconContainer>
          <CartIcon style={{width: '30px', height: '30px'}} />
        </IconContainer>
        <Link to={`/product/${item.id}`}>
          <IconContainer>
            <Search style={{width: '20px', height: '20px'}} />
          </IconContainer>
        </Link>
        <IconContainer>
          <HeartIcon style={{width: '20px', height: '20px'}} />
        </IconContainer>
      </Info>
    </Container>
  )
};

export default Product;