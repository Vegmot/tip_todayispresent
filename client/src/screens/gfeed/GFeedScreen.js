import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

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
              <Card className='text-center'>
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
                    Gesture to <span className='post-users'>{post.to}!</span>
                  </p>

                  <h5>
                    <i class='far fa-comment'></i> {post.message}
                  </h5>
                  <small>Posted on {post.createdAt}</small>
                </Card.Footer>
              </Card>
            );
          })}
          <button className='load-more-btn'>Load More...</button>
        </section>
      </div>
    </>
  );
};

export default GFeedScreen;
