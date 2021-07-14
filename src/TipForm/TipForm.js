import React from 'react';
import TipRadio from '../TipRadio/TipRadio';
import TipInput from '../TipInput/TipInput';
import './TipForm.css';

const TipForm = ({ totalPeople, totalBill, setTotalBill, setTotalPeople, setTipRate, tipRate}) => {
  
  const levels = [15, 20, 25, 30];
  const tipRadioButtons = levels.map((val, idx) => {    
    return <TipRadio key={`tip_${val}_${idx}`} rate={val} checked={(tipRate * 100) === val}/>
  });
  
  const handleRadioChange = ({ target }) => {
    setTipRate(target.value);
  }
  
  
  return (
    <form id="tipForm" className="tipForm">
      <TipInput 
        key="input_bill" 
        label="Bill Total"
        placeholder="$0.00"
        value={totalBill}
        updateState={setTotalBill}
         />
      <label className="tipForm__label" htmlFor="tip-rate">Select Tip %</label>
      <fieldset onChange={handleRadioChange} id="tip-rate" className="tipForm__fieldset">
        {tipRadioButtons}
      </fieldset>
      <TipInput 
        key="input_people"
        label="People"
        placeholder="1"
        value={totalPeople}
        updateState={ setTotalPeople }
       />
    </form>
  )
}

export default TipForm;