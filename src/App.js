import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import Counter1 from './Counter1';
import CounterContext from "./createContext";


function App() {

  const countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
      <React.Fragment>
        <h1>{countState}</h1>
        <Counter />
        <br />
        <Counter1 />
      </React.Fragment>
    </CounterContext.Provider>
  );
}

export default App;
