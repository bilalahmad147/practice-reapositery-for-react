import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const CountReducer = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0);

    return (
        <div>
            <h1>this is counter: {state}</h1>
            <button onClick={()=>dispatch("INC")}>+</button>
            <button onClick={()=>dispatch("DEC")}>-</button>
        </div>
    )
};

export default CountReducer;