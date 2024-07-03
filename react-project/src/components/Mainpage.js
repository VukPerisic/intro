// src/components/MainPage.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Post from './Post';

function MainPage() {
  const [postIds, setPostIds] = useState([]);

  const handleClick = () => {
    // Generate a random post ID between 1 and 100
    const newPostId = Math.floor(Math.random() * 100) + 1;
    setPostIds(prevIds => [...prevIds, newPostId]);
  };

  return (
    <div>
      <div>
        <h1>REACT INTRO</h1>
      </div>
      <Button variant="contained" onClick={handleClick}>
        Generate Post
      </Button>
      {postIds.map(id => (
        <Post key={id} postId={id} />
      ))}
    </div>
  );
}

export default MainPage;