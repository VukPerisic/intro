import React, { useState, useEffect } from 'react';

const Post = ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
