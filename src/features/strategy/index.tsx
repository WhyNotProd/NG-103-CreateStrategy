import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getStrategies } from './strategySlice';
import { getAssets } from './assetSlice';
import CreateStrategy from './create';
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
      <CreateStrategy />
  );
};

export default Strategy;
