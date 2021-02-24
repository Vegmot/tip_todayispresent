import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { SubmitBtn } from '../style';

import './RegisterScreen.css';

const RegisterScreen = () => {
  const registerHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className='main-register-form'>
        <h1>Register</h1>
        <Form className='register-form' onSubmit={registerHandler}>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control type='text'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password'></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type='password'></Form.Control>
          </Form.Group>

          <SubmitBtn type='submit'>Register</SubmitBtn>
          <p className='mt-2'>
            Have an account already?{' '}
            <Link to='/login' className='link-to-login'>
              Login
            </Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default RegisterScreen;
