import React from 'react';


const TipRadio = ({rate}) => {
  return (
    <label className="tipForm__radio" for={`tip_${rate}`}>
      <input id={`tip_${rate}`} 
             className="tipFormRadio__input"
             type="radio" 
             name="tip-rate" 
             value={rate} />
      <span>{`${rate}%`}</span>
    </label>
  )
}

export default TipRadio;