import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import { useParams } from "react-router-dom";
import strategyReducer, { getStrategies } from './strategySlice';
import { getAssets } from './assetSlice';
import CreateStrategy from './create';
import './strategyStyle.css';
import SelectStrategy from "./select";
import PropTypes from "prop-types";
import {RootState} from "../../store/rootReducer";


const Strategy = (state: RootState) => {

  const [selectStrategy, setSelectStrategy] = useState(true)
  const dispatch = useDispatch();
  let params = useParams();
  useEffect(() => {
    dispatch(getStrategies());
    dispatch(getAssets());
  }, [dispatch]);

  const changeStrategy = () => {
    setSelectStrategy(false)
  }
  return (
    <div className="strategy">
      {console.log(state, 'ttttttt')}
      {!selectStrategy ? (
          <CreateStrategy />
      ): (
          <SelectStrategy closeSelectStrategy={changeStrategy} />
      )}
    </div>
  );
};

Strategy.prototype = {
  strategies: PropTypes.array
}

const mapStateToProps = state => ({
  strategies: state.strategies,
});

export default connect(mapStateToProps, null)(Strategy);
