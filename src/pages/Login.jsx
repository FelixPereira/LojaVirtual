import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.2), pink);
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;

  ${mobile({ width: '75%' })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weitgh: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padDing: 15PX 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const {value, name} =  event.target;
    setUser({...user, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, user);
  }

  return(
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input 
            name='username' 
            placeholder='username'
            value={user.username}
            onChange={handleChange} />
          <Input 
            name='password' 
            placeholder='password'
            value={user.password}
            onChange={handleChange} />
          <Button>LOGIN</Button>
          <Link>REMEMBER PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
};

export default Login;