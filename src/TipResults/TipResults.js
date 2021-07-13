import React from 'react';
import ResultsLine from '../ResultsLine/ResultsLine';
import ResetButton from '../ResetButon/ResetButton';

const TipResults = ({totalPeople, totalBill, tipRate}) => {
  const tipTotal = parseInt(totalBill, 10) * tipRate;
  const displayTotalValue = '$' + ((parseInt(totalBill) + tipTotal) / 2);
  const displayTotalTip = '$' + (tipTotal / 2);
  
  return (  
    <div className="tipResults">
      <ResultsLine key="results_tip" title="Tip Amount" value={displayTotalTip} />
      <ResultsLine key="results_total" title="Total" value={displayTotalValue} />
      <ResetButton />
    </div>
  )
}

export default TipResults;