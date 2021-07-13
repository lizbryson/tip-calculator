import React from 'react';
import ResultsLine from '../ResultsLine/ResultsLine';
import ResetButton from '../ResetButon/ResetButton';

const TipResults = ({totalPeople, totalBill}) => {
  
  const displayValue = '$' + parseInt(totalBill) / 2;
  
  return (
    <div className="tipResults">
      <ResultsLine key="results_tip" title="Tip Amount" value="" />
      <ResultsLine key="results_total" title="Total" value={displayValue} />
      <ResetButton />
    </div>
  )
}

export default TipResults;