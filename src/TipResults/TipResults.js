import React from 'react';
import ResultsLine from '../ResultsLine/ResultsLine';
import ResetButton from '../ResetButon/ResetButton';
import { convertValue } from '../Helpers.js';

const TipResults = ({totalPeople, totalBill, tipRate, setTotalBill, setTotalPeople}) => {
  
  totalPeople = (!totalPeople || totalPeople === '0') ? 1 : totalPeople;

  const tipTotal = convertValue.toNumber(totalBill) * tipRate;
  const costTotal = convertValue.toNumber(totalBill) + tipTotal;
  
  const displayTotalValue = convertValue.toCurrency(costTotal / totalPeople);
  const displayTotalTip = convertValue.toCurrency(tipTotal / totalPeople);
  
  return (  
    <div className="tipResults">
      <ResultsLine key="results_tip" title="Tip Amount" value={displayTotalTip} />
      <ResultsLine key="results_total" title="Total" value={displayTotalValue} />
      <ResetButton setTotalBill={setTotalBill} setTotalPeople={setTotalPeople} />
    </div>
  )
}

export default TipResults;