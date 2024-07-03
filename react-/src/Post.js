import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error);
      }
    };

    fetchPost();
  }, [postId]);

  if (error) {
    return <div>Error fetching post: {error.message}</div>;
  }

  return (
    <div>
      {post ? (
        <div>
            <h3>Fetching post with ID: ${postId}</h3>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
