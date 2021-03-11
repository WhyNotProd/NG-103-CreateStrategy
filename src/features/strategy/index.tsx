import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getStrategies } from './strategySlice';
import { getAssets } from './assetSlice';
import CreateStrategy from './create';
import  Header  from '../header';
import './strategyStyle.css';

const Strategy = () => {
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(getStrategies());
    dispatch(getAssets());
  }, [dispatch]);

  return (
    <div className="strategy">
      <Header />
      <CreateStrategy />
    </div>
  );
};

export default Strategy;
