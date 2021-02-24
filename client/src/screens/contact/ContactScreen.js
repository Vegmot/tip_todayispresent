import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { SubmitBtn } from '../style';

const ContactScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const contactSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <Row id='contact-form' className='contact-form text-center mt-5'>
        <Col md={5} className='contact-form-left'>
          <div className='contact-form-present mt-4'>
            <h4>Present</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              quaerat rem nemo quasi tenetur odio iusto.
            </p>
            <SubmitBtn smaller>Details</SubmitBtn>
          </div>

          <div className='contact-form-account mt-5'>
            <h4>Account</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem
              cum? Doloremque dolores eaque vel excepturi?
            </p>
            <SubmitBtn smaller>Details</SubmitBtn>
          </div>
        </Col>

        <Col md={{ span: 4, offset: 3 }}>
          <Form
            id='contact-form-right'
            className='contact-form-right'
            onSubmit={contactSubmitHandler}
          >
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                name='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type='text'
                name='comment'
                value={comment}
                onChange={e => setComment(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <SubmitBtn>Submit</SubmitBtn>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ContactScreen;
