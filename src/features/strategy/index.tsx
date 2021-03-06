import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getStrategies } from './strategySlice';
import { getAssets } from './assetSlice';

const Strategy = () => {
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(getStrategies());
    dispatch(getAssets());
  }, [dispatch]);

  return (
    <div>
      Strategy Home Page if id is passed in load the strategy page for id:{params.id ? params.id : 0},
     if not load the strategy home page
     </div>
  );
};

export default Strategy;
