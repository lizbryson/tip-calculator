import React from 'react';


const TipRadio = ({rate, checked}) => {
  return (
    <label className="tipForm__radio" for={`tip_${rate}`}>
      <input id={`tip_${rate}`}
        className="tipFormRadio__input"
        type="radio"
        name="tip-rate"
        value={rate / 100}
        checked={checked} />
      <span>{`${rate}%`}</span>
    </label>
  )
}

export default TipRadio;