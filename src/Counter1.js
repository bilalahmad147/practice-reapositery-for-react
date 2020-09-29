import React, { useContext, useState } from 'react';
import CounterContext from './createContext';

const Counter1 = () => {

  let Counter = useContext(CounterContext);

  const formatCount = () => {
    return Counter[0] === 0 ? "Zero" : Counter[0];
  };

  let classes = "badge m-2 badge-";
  classes += (Counter[0] === 0) ? "warning" : "primary";



  return (
    <React.Fragment>
      <span style={{ fontSize: 20, fontWeight: "bold" }} className={classes}>{formatCount()}</span>
      <button onClick={() => { Counter[1](++Counter[0]) }} className="btn btn-secondary btn-sm m-2">INCREMENT</button>
      <button onClick={() => { Counter[1](--Counter[0]) }} className="btn btn-secondary btn-sm m-2">DECREMENT</button>
    </React.Fragment>
  );
}

export default Counter1;
