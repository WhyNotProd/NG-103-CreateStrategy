import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyInput from 'react-currency-input-field';
import CreateStrategyForm from './createStrategyForm';
import SelectStrategyFrom from './selectStrategyFrom';

const CreateStrategy = () => {
  const [selectStrategyStatus, setStrategyStatus] = useState(false);
  const toggleView = () => {setStrategyStatus(!selectStrategyStatus)};
  
  // setSta
  if (selectStrategyStatus == false) {
    return (
      <div className="createStrategyPage">
        <CreateStrategyForm  toggleFun={()=>toggleView()} />
      </div>
    );
  } else {
    return (
      <div className="selecteStrategyPage">
        <SelectStrategyFrom  toggleFun={()=>toggleView()}  />
      </div>
    );
  }

};

export default CreateStrategy;
