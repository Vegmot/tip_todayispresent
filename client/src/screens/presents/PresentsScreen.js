import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { data } from './data';

import './PresentsScreen.css';

const PresentsScreen = () => {
  return (
    <>
      {data.map(item => (
        <Row key={item.id} className='main-presents-list'>
          <Col className='main-presents'>
            <div className='item-image'>
              <img src={item.image} alt={item.name} />
            </div>

            <div className='item-details'>
              <h5>{item.name}</h5>
              <p>{item.price}</p>
              <p>{item.countInStock < 1 ? 'Out of stock' : 'In stock'}</p>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PresentsScreen;
