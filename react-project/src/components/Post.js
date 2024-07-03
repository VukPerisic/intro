// src/components/Post.js
import React, { useState, useEffect } from 'react';

function Post({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;