import React from 'react';
import TipRadio from '../TipRadio/TipRadio';
import TipInput from '../TipInput/TipInput';
import './TipForm.css';

const TipForm = ({ totalPeople, totalBill, setTotalBill }) => {
  
  const levels = [5, 10, 15, 25, 30, 50];
  
  const tipRadioButtons = levels.map( (val, idx) => {
    return <TipRadio key={`tip_${val}_${idx}`} rate={val} />
  });
  
  const handleRadioChange = ({target}) => {
     console.log(target.value);
  }
  
  
  return (
    <form id="tipForm" className="tipForm">
      <TipInput 
        key="input_bill" 
        label="Bill"
        placeholder="$0.00"
        value={totalBill}
        updateState={setTotalBill}
         />
      <label className="tipForm__label" for="tip-rate">Select Tip %</label>
      <fieldset onChange={handleRadioChange} id="tip-rate" className="tipForm__fieldset">
        {tipRadioButtons}
      </fieldset>
      <TipInput 
        key="input_people" 
        label="People" 
        placeholder="1"
       />
    </form>
  )
}

export default TipForm;