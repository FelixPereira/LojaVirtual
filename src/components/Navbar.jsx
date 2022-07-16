import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../assets/cart-add.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { mobile } from '../responsive';

const Container = styled.div`
  heigth: 60px;

  ${mobile({ height: '50px' })};
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px; 
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: '10px 0' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: 'none' })};
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;

  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  ${mobile({ width: '50px' })};
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  ${mobile({ fontSize: '24px' })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: '2', justifyContent: 'center' })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  curso: pointer;
  margin-left: 25px;
  cursor: pointer;

  ${mobile({ fontSize: '12px', marginLeft: '10px' })};
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
  const quantity = useSelector(state => state.cart.quantity);

  return(
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
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
            <Link to='/cart'>
              <CartIcon style={{width: '27px', height: '27px'}} />
              <ItemsQuantity>{quantity}</ItemsQuantity>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navbar;