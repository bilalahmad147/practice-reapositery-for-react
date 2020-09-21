import React, { useState } from 'react';
import "./App.css";
import CounterContext from './CounterContext';
import CreateCounter from "./CreateCounter";

function App() {

  let mood = useState("Bright")

  return (
    <CreateCounter.Provider value={mood}>
      <div className="App">
        <CounterContext />
      </div>
    </CreateCounter.Provider>
  );
}

export default App;
