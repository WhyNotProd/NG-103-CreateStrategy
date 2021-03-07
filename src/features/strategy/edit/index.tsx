import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const EditStrategy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>Edit Strategy Page</div>
  );
};

export default EditStrategy;
