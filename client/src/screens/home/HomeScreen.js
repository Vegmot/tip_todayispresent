import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './HomeScreen.style';

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <section id='main-section' className='main-section'>
      <h1>Welcome home sweet home</h1>
      <Button>Click click</Button>

      <Link to='/login'>
        <h2>Login</h2>
      </Link>

      <Link to='/register'>
        <h2>Register</h2>
      </Link>

      <p>This is the home screen</p>
    </section>
  );
};

export default HomeScreen;
