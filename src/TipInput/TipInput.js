import React from 'react';

const TipInput = ({ label, placeholder, value, updateState }) => {
  const inputID = `${label.toLowerCase()}-total`;
  
  const handleInputChange = ({target}) => {
    updateState(target.value);
  }
  
  return (
    <div>
      <label className="tipForm__label" for="{inputID}">{label}</label>
      <input 
        className="tipForm__input" 
        id="{inputID}" 
        name="bill-total" 
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder} />
    </div>
  )
}

export default TipInput;