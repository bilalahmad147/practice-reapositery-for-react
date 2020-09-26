import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let initialValue = 0;
  let [isCount, setCount] = useState(initialValue);

  const formatCount = () => {
    return isCount === initialValue ? "Zero" : isCount;
  };

  let classes = "badge m-2 badge-";
  classes += (isCount === 0) ? "warning" : "primary";



  return (
    <React.Fragment>
      <h1>{isCount}</h1>
      <span style={{ fontSize: 20, fontWeight: "bold" }} className={classes}>{formatCount()}</span>
      <button onClick={() => { setCount(++isCount) }} className="btn btn-secondary btn-sm m-2">INCREMENT</button>
      <button onClick={() => { setCount(--isCount) }} className="btn btn-secondary btn-sm m-2">DECREMENT</button>
      <button onClick={() => { setCount(initialValue) }} className="btn btn-secondary btn-sm m-2">RESET</button>
    </React.Fragment>
  );
}

export default App;
