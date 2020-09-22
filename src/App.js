import React from 'react';
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseDetail from "./Components/ExpenseDetail";
import History from "./Components/History";
import Expense from "./Components/Expense";
import { TransProvider } from "./Components/ExpenseContext";

function App() {

  return (
    <TransProvider>
      <div className="App">
        <Balance />
        <ExpenseDetail />
        <h2>HISTORY</h2>
        <History />
        <Expense />
      </div>
    </TransProvider>
  );
}

export default App;
