import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import CounterContext from "./createContext";


function App() {

  const initValue = 0;

  return (
    <CounterContext.Provider value={initValue}>
      <React.Fragment>
        <Counter />
      </React.Fragment>
    </CounterContext.Provider>
  );
}

export default App;
