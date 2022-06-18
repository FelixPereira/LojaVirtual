import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../assets/cart-add.svg';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F5FAFD;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return(
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which don't look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <CartIcon style={{width: '27px', height: '27px'}} />
          </SocialIcon>
          <SocialIcon>
            <CartIcon style={{width: '27px', height: '27px'}} />
          </SocialIcon>
          <SocialIcon>
            <CartIcon style={{width: '27px', height: '27px'}} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Menu</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <CartIcon style={{width: '27px', height: '27px', marginRight: '10px'}} /> Luanda, Angola
        </ContactItem>
        <ContactItem>
          <CartIcon style={{width: '27px', height: '27px', marginRight: '10px'}} /> +244 954 343 433
        </ContactItem>
        <ContactItem>
          <CartIcon style={{width: '27px', height: '27px', marginRight: '10px'}} /> info@lama.ao
        </ContactItem>
      </Right>
    </Container>
  )
};

export default Footer;