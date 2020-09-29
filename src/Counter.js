import React, { useContext, useState } from 'react';
import CounterContext from './createContext';

const Counter = () => {

  let Counter = useContext(CounterContext);
  let [isCount, setCount] = useState(Counter[0]);

  const formatCount = () => {
    return isCount === Counter[0] ? "Zero" : isCount;
  };

  let classes = "badge m-2 badge-";
  classes += (isCount === 0) ? "warning" : "primary";



  return (
    <React.Fragment>
      <h1>{isCount}</h1>
      <span style={{ fontSize: 20, fontWeight: "bold" }} className={classes}>{formatCount()}</span>
      <button onClick={() => { setCount(++isCount) }} className="btn btn-secondary btn-sm m-2">INCREMENT</button>
      <button onClick={() => { setCount(--isCount) }} className="btn btn-secondary btn-sm m-2">DECREMENT</button>
      <button onClick={() => { setCount(Counter[0]) }} className="btn btn-secondary btn-sm m-2">RESET</button>
    </React.Fragment>
  );
}

export default Counter;
