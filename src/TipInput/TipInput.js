import React from 'react';
import { convertValue } from '../Helpers.js';


const TipInput = ({ label, placeholder, value, updateState }) => {
  
  const inputID = `${label.toLowerCase()}-total`;
  
  const handleInputChange = ({ target }) => {
    
    const num = convertValue.stripCurrency(target.value);
    
    if (label === 'Bill Total') {
      (num === '') ? updateState(0) : updateState('$' + num);
    } else {
      (num === '') ? updateState(0) : updateState(num);
    }
  }

  return (
    <div>
      <label className="tipForm__label" htmlFor="{inputID}">{label}</label>
      <input 
        className="tipForm__input" 
        id={inputID}
        name="bill-total" 
        type="text"
        value={value === 0 ? '' : value}
        onChange={handleInputChange}
        placeholder={placeholder} />
    </div>
  )
}

export default TipInput;