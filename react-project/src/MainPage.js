// src/MainPage.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Post from './Post';

const MainPage = () => {
  const [postIds, setPostIds] = useState([]);

  const handleClick = () => {
    const newPostId = postIds.length + 1;
    setPostIds([...postIds, newPostId]);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generate Post
      </Button>
      {postIds.map((postId) => (
        <Post key={postId} id={postId} />
      ))}
    </div>
  );
};

export default MainPage;
