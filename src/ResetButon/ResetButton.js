import React from 'react';

const ResetButton = ({ setTotalBill, setTotalPeople }) => {
  const handleResetClick = () => {
    setTotalBill(0);
    setTotalPeople(1);
  }
  return (
    <button
      onClick={ handleResetClick }
      className="reset-button">Reset</button>
  )
}

export default ResetButton;