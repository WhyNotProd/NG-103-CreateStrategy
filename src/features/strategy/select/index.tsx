import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './selectStrategyStyle.css';
import Select from 'react-select';
import { ArrowBack } from '@material-ui/icons';
import {getAssets} from "../assetSlice";
import {RootState} from "../../../store/rootReducer";


interface strategyItem {
    label: string,
    value: string,
}

const SelectStrategy = () => {

  const dispatch = useDispatch();

  const getStrategies = (state: RootState) => state.strategy;
  const strategies = useSelector(getStrategies);

  const [optionsStrategies, setOptionsStrategies] = useState<strategyItem[]>([]);

  useEffect(() => {
      strategies.strategies.map((item) => {
          console.log(item.strategy.strategyName);
          console.log(item.strategy.strategyID);
      })
  }, [strategies]);

  useEffect(() => {
      dispatch(getAssets());
  }, [dispatch]);

  return (
    <div className="select-strategy">
      <div className="select-strategy-left">
          <div className="header-section">
            <button className="btnBack" id="Back" name="Back" value="Back" onClick={() => console.log(strategies.strategies[0].strategy)}>
                <ArrowBack/>
                Back
            </button>
            <div className="header-section-heading">Select a Strategy</div>
            <div className="header-section-text">Fact: Interest rate on bank cash deposits will beat inflation</div>
          </div>
        <div className="form-section">
          <div className="container">
            <form className="selectStrategyForm">
              <div className="formRow">
                  <Select
                      placeholder="Select a Strategy"
                      options={optionsStrategies}
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="create-stategy-right">
        <img src="/assets/images/strategy/strategy-2.png"  alt={'strategy-2'}/>
        </div>
    </div>


      );
};
export default SelectStrategy;






