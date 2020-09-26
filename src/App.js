import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

function App() {

  return (
    <React.Fragment>
      <Counter />
      <Counter />
    </React.Fragment>
  );
}

export default App;
