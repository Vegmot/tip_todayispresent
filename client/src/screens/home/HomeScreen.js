import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './HomeScreen.style';
import { store } from '../../utils/firebase';

import './HomeScreen.css';

const HomeScreen = () => {
  const [presents, setPresents] = useState([]);

  const showPresentsList = () => {
    store
      .collection('presents')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          const present = doc.data();
          return (
            <>
              <p>
                <strong>Present name: </strong> {present.name}
              </p>
              <p>
                <strong>Price: </strong> ${present.price}
              </p>
              <p>
                <strong>Description: </strong> {present.description}
              </p>
              <p>
                <strong>Created at: </strong> {present.createdAt}
              </p>
            </>
          );
        });
      });
  };

  showPresentsList();

  return (
    <>
      <section id='main-section' className='main-section'>
        <h1>Home sweet home</h1>
        <Button>Click click</Button>

        <Link to='/login'>
          <h2>Login</h2>
        </Link>

        <Link to='/register'>
          <h2>Register</h2>
        </Link>

        <p>This is the home screen</p>

        {showPresentsList()}
      </section>
    </>
  );
};

export default HomeScreen;
