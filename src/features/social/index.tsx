import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPosts } from './socialPostsSlice';
import Page from './Page';

const Social = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Page />
  );
};
export default Social;
