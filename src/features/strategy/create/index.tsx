import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './createStrategyStyle.css';
import CurrencyInput from 'react-currency-input-field';

const CreateStrategy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="create-stategy">
      <div className="create-stategy-left">
        <div className="header-section">
          <div className="header-section-heading"> Create a Strategy</div>
          <div className="header-section-text">Fact: Interest rate on bank cash deposits will beat inflation</div>
        </div>
        <div className="form-section">
          <div className="container">
            <form className="createStrategyForm">
              <div className="formRow">
                <label htmlFor="addStrategy">Select a Strategy</label>
                <button className="btnAddStrategy" id="addStrategy" name="addStrategy" value="Add a strategy">Add a strategy</button>
              </div>
              <div className="formRow">
                <label htmlFor="strategyName">Strategy Name</label>
                <input type="text" id="strategyName" name="strategyName" placeholder="Strategy Name" />
              </div>
              <div className="formRow">
                <label htmlFor="strategyCapital">Starting Capital</label>
                <CurrencyInput
                  className="inputStrategyCapital"
                  prefix="$"
                  id="strategyCapital"
                  name="strategyCapital"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value, name) => console.log(value, name)}
                />
              </div>
              <div className="formRow">
                <label htmlFor="strategyAssets">Select assets</label>
                <select id="strategyAssets" name="stratstrategyAssetsegyAssets">
                  <option value="">Select assets</option>
                  <option value="123">123</option>
                  <option value="456">456</option>
                  <option value="789">789</option>
                </select>
              </div>
              <div className="formRow">
                <label htmlFor="">Select a date range</label>
                <div className="divDateRange" id="dateRange">
                  <select id="startDate" name="startDate" style={{float: "left"}}>
                    <option value="">Start Date</option>
                  </select>
                  <select id="endDate" name="endDate" style={{float: "right"}}>
                    <option value="">End Date</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
          <div className="create-stategy-right">
            <img src="/assets/strategy/strategy-1.png" />
          </div>
        </div>
  );
};

export default CreateStrategy;
