import React, { useState } from 'react';
import TipForm from '../TipForm/TipForm';
import TipResults from '../TipResults/TipResults';
import './App.css';

const App = () => {
  
  const [tipRate, setTipRate] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPeople, setTotalPeople] = useState(1);
  const [totalBill, setTotalBill] = useState(0);

  return (
    <div className="tipCalculator">
      <TipForm 
        totalPeople={totalPeople} 
        totalBill={totalBill}
        setTotalBill={setTotalBill}
        setTotalPeople={setTotalPeople} />
      <TipResults
        totalPeople={totalPeople}
        totalBill={totalBill} 
        />
    </div>
  )
  
}

export default App;
