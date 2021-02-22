import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <header>Posts for G-Feed</header>

        <section>
          {posts.map(post => (
            <div
              key={post.id}
              style={{
                border: '1px solid #000',
                margin: '5px',
                padding: '5px',
              }}
            >
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

                <h5
                  style={{
                    display: 'inline',
                    marginLeft: '5px',
                    paddingTop: '2px',
                  }}
                >
                  {post.from} ({post.owner_id}) sent a Gesture to {post.to}
                </h5>
              </div>

              <p>{post.message}</p>
              <small style={{ display: 'block' }}>
                Posted on {post.createdAt}
              </small>
              <small style={{ display: 'block' }}>Post ID: {post.id}</small>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default GFeedScreen;
