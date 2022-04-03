import React, { useState } from 'react';
import styled from 'styled-components'; 
import { slideItems } from '../slideItems';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f780;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  cursor: pointer;
  z-index: 2;
`; 

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === 'right' ) {
      setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1 );
    } else {
      setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1);
    }
  }; 

  return(
    <Container>
      <ArrowContainer onClick={() => handleClick('left')} direction='left'>
        <span>&#10094;</span>
      </ArrowContainer>

      <Wrapper slideIndex={slideIndex}>
        {
          slideItems.map((item, index) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))
        }
      </Wrapper>

      <ArrowContainer onClick={() => handleClick('right')} direction='right'>
        <span>&#10095;</span>
      </ArrowContainer>
    </Container>
  )
};

export default Slider;