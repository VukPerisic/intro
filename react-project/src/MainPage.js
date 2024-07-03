import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Post from './Post';

const MainPage = () => {
  const [postIds, setPostIds] = useState([]);

  const handleClick = () => {
    setPostIds([...postIds, postIds.length + 1]);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Generate Post
      </Button>
      {postIds.map((id) => (
        <Post key={id} id={id} />
      ))}
    </div>
  );
};

export default MainPage;
