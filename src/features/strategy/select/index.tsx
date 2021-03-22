import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './selectStrategyStyle.css';
import CurrencyInput from 'react-currency-input-field';


 const [array, setArray] = React.useState([])
setArray([‘’, ‘’, ‘’])
setArray(newArrayResponsiv)
array.map( (item) => {
  console.log(item,‘item’)
})

const filterMas = array.filter((item) => item == ‘text’);


const SelectStrategy = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="select-strategy">
      <div className="select-strategy-left">
      <div className="header-section">
        <button className="btnBack" id="Back" name="Back" value="Back" onClick={()=>console.log()}>Back</button>
        <div className="header-section-heading"> Select a Strategy</div>
        <div className="header-section-text">Fact: Interest rate on bank cash deposits will beat inflation</div>
      </div>
        <div className="form-section">
          <div className="container">
            <form className="selectStrategyForm">
              <div className="formRow">
                <input type="text" id="strategyName" name="strategySeacrh" placeholder="100TQQ" />

              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="create-stategy-right">
    <img src="/assets/images/strategy/strategy-2.png" />
  </div>
    </div>


      );
};
export default SelectStrategy;






