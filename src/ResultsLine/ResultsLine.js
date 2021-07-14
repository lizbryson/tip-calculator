import React from 'react';


const ResultsLine = ({ title, value }) => {
  return (
    <div className="tipResults__section">
      <div className="tipResults__labels">
         <h3 className="tipResults__title">{title}</h3>
         <p className="tipResults__subtitle">/ person</p>
      </div>
      <div className="tipResults__amount">
        <h2 className="tipResults__total">{value}</h2>
      </div>
    </div>
  )
}

export default ResultsLine;