import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../assets/cart-add.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

const Container = styled.div`
  heigth: 60px;
  padding: 10px 30px; 
`;

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  width: 220px;

  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  curso: pointer;
  margin-left: 25px;
  cursor: pointer;
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ItemsQuantity = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: blue;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: #fff;
  text-align: center;
`;


const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{width: '13px', height: '13px'}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem as={ShoppingContainer}>
            <CartIcon style={{width: '27px', height: '27px'}} />
            <ItemsQuantity>4</ItemsQuantity>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navbar;