import React, { useEffect } from 'react';
import { loadPosts } from './socialPostsSlice';
import Page from './Page';
import { useAppDispatch } from './store';

const Social = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <Page />
  );
};
export default Social;
