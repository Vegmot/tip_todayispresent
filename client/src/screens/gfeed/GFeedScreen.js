import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

import './GFeedScreen.css';

const GFeedScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://us-central1-gesture-dev.cloudfunctions.net/feed_api'
      );
      setPosts(res.data.data);
      console.log(res.data);
      console.log(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <section>
          {posts.map(post => {
            return (
              <Card className='main-card'>
                <Card.Header className='post-sender'>
                  <img
                    src={post.sub_image}
                    alt={post.from}
                    className='main-sub-image'
                  />
                  <h5>{post.from}</h5>
                </Card.Header>

                <Card.Body>
                  <img
                    src={post.main_image}
                    alt={post.to}
                    className='main-main-image'
                  />
                </Card.Body>

                <Card.Footer className='post-message'>
                  <p className='post-text'>
                    <span className='post-users'>{post.from}</span> sent a
                    Gesture to <span className='post-users'>{post.to}:</span>
                  </p>

                  <h5>
                    <i class='fas fa-quote-left'></i> {post.message}{' '}
                    <i class='fas fa-quote-right'></i>
                  </h5>
                  <small>Posted on {post.createdAt}</small>
                </Card.Footer>
              </Card>
            );
          })}
          <Button id='load-more-btn' className='btn load-more-btn'>
            Load More...
          </Button>
        </section>
      </div>
    </>
  );
};

export default GFeedScreen;
