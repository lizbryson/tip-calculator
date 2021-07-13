import React from 'react';

const TipInput = ({ label, placeholder, value, updateState }) => {
  const inputID = `${label.toLowerCase()}-total`;
  
  const handleInputChange = ({ target }) => {
    
    let num = target.value.replace(/[^0-9.,]/g, '');

    if (num[0] === '.') num = '0' + num;
    
    (num === '') ? updateState(0) : updateState(num);
    
  }

  const formatNumber = num => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  
  return (
    <div>
      <label className="tipForm__label" for="{inputID}">{label}</label>
      <input 
        className="tipForm__input" 
        id="{inputID}" 
        name="bill-total" 
        type="text"
        value={value === 0 ? '' : value}
        onChange={handleInputChange}
        placeholder={placeholder} />
    </div>
  )
}

export default TipInput;