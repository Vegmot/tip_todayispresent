import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { data } from './data';

import './PresentsScreen.css';

const PresentsScreen = () => {
  // https://medium.com/swlh/a-comprehensive-guide-to-load-more-button-and-infinite-scrolling-in-react-js-bd88edf74d5a
  const presentsPerPage = 10;
  const [displayedPresents, setDisplayedPresents] = useState(
    data.slice(0, presentsPerPage)
  );
  const [loading, setLoading] = useState(false);

  const loadMoreHandler = () => {
    setLoading(true);

    // mocking API get request
    setTimeout(() => {
      setDisplayedPresents(prevState => [
        ...prevState,
        ...data.slice(prevState.length, prevState.length + presentsPerPage),
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      <div className='presents-list'>
        <h1>Presents List</h1>
        {displayedPresents.map(item => (
          <div className='present-item'>
            <div className='present-image'>
              <img src={item.image} alt={item.name} />
            </div>

            <div className='present-details'>
              <p className='present-name'>{item.name}</p>
              <p
                className='present-price-stock'
                style={{
                  color:
                    item.countInStock && item.countInStock > 0
                      ? '#000'
                      : '#aaa',
                }}
              >
                {item.price} -{' '}
                {item.countInStock && item.countInStock > 0
                  ? 'In stock'
                  : 'Out of stock'}
              </p>
              {item.id}
              <br />
              <small className='present-description'>
                {item.description &&
                  item.description.length > 70 &&
                  item.description.substring(0, 70).trim() + '...'}
              </small>
            </div>
          </div>
        ))}
      </div>
      {loading ? (
        <p className='text-center my-5 loading'>Loading...</p>
      ) : displayedPresents.length >= data.length ? (
        <p className='text-center my-5'>No more data</p>
      ) : (
        <button className='load-more-btn' onClick={loadMoreHandler}>
          Load More...
        </button>
      )}
    </>
  );
};

export default PresentsScreen;
