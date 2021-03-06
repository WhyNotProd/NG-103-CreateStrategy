import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './socialPostsSlice';

const Social = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>Social Page</div>
  );
};

export default Social;
