import React from 'react';
import styled from 'styled-components';

import {Add, Remove} from '@material-ui/icons';

import { mobile } from '../responsive';

import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: '10px' })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && '#fff'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })};
`;

const TopText = styled.span`
  text-decoration: underlane;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmoutContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmout = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: '5px 15px' })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${mobile({ marginBottom: '20px' })};
`;

const Hr = styled.hr`
  margin: 20px 0;
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weitght: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryTtemText = styled.span``;

const SummaryPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;


const Cart = () => {
  const cart = useSelector(state => state.cart);

  return(
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <TopText>You wishlidt (2)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              cart.products.map(product => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName><b>Product:</b> {product.title}</ProductName>
                        <ProductID><b>ID:</b> {product.id}</ProductID>
                        <ProductColor color={product.color} />
                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmoutContainer>
                        <Remove style={{cursor: 'pointer'}}/>
                        <ProductAmout>{product.quantity}</ProductAmout>
                        <Add style={{cursor: 'pointer'}}/>
                      </ProductAmoutContainer>
                      <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                </>
              ))
            }
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryTtemText>Subtotal</SummaryTtemText>
              <SummaryPrice>$ {cart.total}</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryTtemText>Estimated Shipping</SummaryTtemText>
              <SummaryPrice>$ 32</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryTtemText>Shipping Descount</SummaryTtemText>
              <SummaryPrice>$ -23</SummaryPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryTtemText>Total</SummaryTtemText>
              <SummaryPrice>$ {cart.total}</SummaryPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default Cart;