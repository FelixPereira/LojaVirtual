import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router';

import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import { mobile } from '../responsive'; 
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import {popularProducts} from '../data';
// import {publiqueRequest} from '../requestMethods';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: '10px', flexDirection: 'column' })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: '40vh' })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: '10px' })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;

  ${mobile({ width: '100%' })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 29px;
  font-weight: 200; 
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  ${mobile({ width: '100%' })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border 1px solid teal;
  display: flex; 
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 5px
`;

// const Add = styled.span``;

const Buttom = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    background-color: #f8f4f4;
  }
`;


const ProductPage = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  let [quantity, setQuantity] = useState(1);
  let [size, setSize] = useState("");
  let [color, setColor] = useState("");
  const productFinded = popularProducts.find(item => item.id === productId);

  useEffect(() => {
    setProduct(productFinded);
    /*
        const getProduct = async () => {
          try {
            const res = await publiqueRequest.get(`products/find/${productId}`);
            setProduct(res.data);
          } catch(err) {
            console.log(err);
          }
        }
        getProduct();
    */
  }, [productId, productFinded]);

  const handleAddToCart = () => {

  }

  return(
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product.colors?.map(color => (
                  <FilterColor 
                    color={color} 
                    key={color} 
                    onClick={() => setColor(color)}
                  />
                ))
              }
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {
                  product.sizes?.map(size => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                  ))
                }
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove 
                style={{cursor: 'pointer'}}
                onClick={() => setQuantity(quantity > 1 ? --quantity : quantity)}
              />
              <Amount>{quantity}</Amount>
              <Add 
                style={{cursor: 'pointer'}}
                onClick={() => setQuantity(prev => ++prev)} 
              />
            </AmountContainer>
            <Buttom onClick={handleAddToCart}>Add to cart</Buttom>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default ProductPage;