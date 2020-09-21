import React, { useState } from 'react';
import "./App.css";
import CounterContext from './CounterContext';
import CreateCounter from "./CreateCounter";

function App() {

  let count = useState(0)

  return (
    <CreateCounter.Provider value={count}>
      <div className="App">
        <CounterContext />
      </div>
    </CreateCounter.Provider>
  );
}

export default App;
