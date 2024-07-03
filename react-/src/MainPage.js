import React, { useState } from 'react';
import Post from './Post';
import Button from '@mui/material/Button';
import './Main.css'

const MainPage = () => {
  const [postIDs, setPostIDs] = useState([]);

  const addPost = () => {
    const newPostId = postIDs.length + 1;
    setPostIDs([...postIDs, newPostId]);
  };

  const postComponents = [];
  postIDs.forEach((postId) => {
    postComponents.push(<Post key={postId} postId={postId} />);
  });

  return (
    <div className='container'>
      <Button variant="contained" size="large" onClick={addPost}>
        Generate Post
      </Button>
      {postComponents}
    </div>
  );
};

export default MainPage;
