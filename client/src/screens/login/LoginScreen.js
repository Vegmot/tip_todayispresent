import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { SubmitBtn } from '../style';

import './LoginScreen.css';

const LoginScreen = () => {
  const loginHandler = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className='main-login-form'>
        <h1>Login</h1>
        <Form className='login-form' onSubmit={loginHandler}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label type='password'>Password</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <SubmitBtn type='submit'>Login</SubmitBtn>
          <p>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default LoginScreen;
