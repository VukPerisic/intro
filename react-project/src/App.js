import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { useState, useEffect } from 'react';

function GeneratePost() {
  const [postIds, setPostIds] = useState([]);

  const handleClick = () => {
    const nextId = postIds.length + 1;
    setPostIds([...postIds, nextId]);
  };

  const Post = ({ id }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPost(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }, [id]);

    if (loading) {
      return <div className="post-loading">Loading post...</div>;
    }

    if (error) {
      return <div className="post-error">Error: {error}</div>;
    }

    return (
      <div className="post-container">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.body}</p>
      </div>
    );
  };

  return (
    <div className="generate-post-button-div">
      <Button variant="contained" className="generate-post-button" onClick={handleClick}>
        Generate Post
      </Button>
      {postIds.map((id) => (<Post key={id} id={id} />))}
    </div>
  );
}

export default GeneratePost;