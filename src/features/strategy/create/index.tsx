import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CreateStrategy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>Create Strategy Page</div>
  );
};

export default CreateStrategy;
