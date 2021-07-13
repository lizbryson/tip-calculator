import React from 'react';

const ResetButton = () => {
  const handleResetClick = () => {
    alert('reset clicked');
  }
  return (
    <button
      onClick={ handleResetClick }
      className="reset-button">Reset</button>
  )
}

export default ResetButton;