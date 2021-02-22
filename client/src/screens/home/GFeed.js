import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://us-central1-gesture-dev.cloudfunctions.net/feed_api'
      );
      setPosts(res.data.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <header>Posts for G-Feed</header>

        <section>
          {posts.map(post => (
            <div key={post.id} style={{ border: '1px solid #000' }}>
              <img
                src={post.main_image}
                alt={post.to}
                style={{ width: '100px' }}
              />

              <div>
                <img
                  src={post.sub_image}
                  alt={post.to}
                  style={{ width: '20px' }}
                />

                <h3 style={{ display: 'inline' }}>
                  {post.from} sent a Gesture to {post.to}
                </h3>
              </div>

              <h3>{post.message}</h3>
              <small>{post.createdAt}</small>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default GFeed;
