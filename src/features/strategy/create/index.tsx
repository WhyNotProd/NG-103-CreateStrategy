import React, { useEffect, useState } from 'react';
import CreateStrategy from './createStrategyForm';
import SelectStrategy from './selectStrategyForm';

const CreateStrategyForm = () => {
  const [selectStrategyStatus, setStrategyStatus] = useState(false);
  const [strategy, setStrategy] = useState(false);
  const toggleView = () => {setStrategyStatus(!selectStrategyStatus)};

  const onStrategySelect = (data) => {
      setStrategy(data);
  };

  // setSta
  if (!selectStrategyStatus) {
    return (
      <div className="createStrategyPage">
        <CreateStrategy strategy={strategy} toggleFun={()=>toggleView()} />
      </div>
    );
  } else {
    return (
      <div className="selecteStrategyPage">
        <SelectStrategy onStrategySelect={onStrategySelect} toggleFun={()=>toggleView()}  />
      </div>
    );
  }

};

export default CreateStrategyForm;
