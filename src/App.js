import React, { useState } from 'react';
import "./App.css";
import CounterContext from './CounterContext';
import CreateCounter from "./CreateCounter";
import CountReducer from "./CountReducer";

function App() {

  let mood = useState("Bright")

  return (
    <CreateCounter.Provider value={mood}>
      <div className="App">
        <CounterContext />
        <br />
        <br />
        <CountReducer />
      </div>
    </CreateCounter.Provider>
  );
}

export default App;
