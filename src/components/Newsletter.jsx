import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1PX solid lightgrey;
`;

const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 2;
  border: none;
  color: #fff;
  background-color: teal;
  padding: 20px;
  cursor: pointer;
`;

const Send = styled.div``;

const Newsletter = () => {
  return(
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Yout email' />
        <Button>
          <Send>Subscrever-se</Send>
        </Button>
      </InputContainer>
    </Container>
  )
};

export default Newsletter;