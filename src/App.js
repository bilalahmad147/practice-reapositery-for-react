import React, { useState } from 'react';
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseDetail from "./Components/ExpenseDetail";
import History from "./Components/History";
import Expense from "./Components/Expense";

function App() {

  let mood = useState("Bright")

  return (
      <div className="App">
      <Balance />
      <ExpenseDetail />
      <h2>HISTORY</h2>
      <History />
      <Expense />
    </div>
  );
}

export default App;
