import React, { useContext } from 'react';
import CreateCounter from "./CreateCounter";

const CounterContext = () => {

    let counterValue = useContext(CreateCounter);
    return(
        <div>
            <h1>this is mood value {counterValue}</h1>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increament</button>
        </div>
    )
};

export default CounterContext;