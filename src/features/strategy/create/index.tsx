import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyInput from 'react-currency-input-field';
import CreateStrategy from './createStrategyForm';
import SelectStrategy from './selectStrategyForm';

const CreateStrategyForm = () => {
  const [selectStrategyStatus, setStrategyStatus] = useState(false);
  const toggleView = () => {setStrategyStatus(!selectStrategyStatus)};
  
  // setSta
  if (!selectStrategyStatus) {
    return (
      <div className="createStrategyPage">
        <CreateStrategy  toggleFun={()=>toggleView()} />
      </div>
    );
  } else {
    return (
      <div className="selecteStrategyPage">
        <SelectStrategy toggleFun={()=>toggleView()}  />
      </div>
    );
  }

};

export default CreateStrategyForm;
