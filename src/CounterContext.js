import React, { useContext } from 'react';
import "./App.css";
import CreateCounter from "./CreateCounter";

const CounterContext = () => {

    let [isMood, setMood] = useContext(CreateCounter);
    return(
        <div className={` Bright ${isMood} === "Bright" ? "Dark":"Bright"`}>
            <h1>mood value is {isMood}</h1>
            <button onClick={()=>{setMood(isMood === "Bright" ? "Dark" : "Bright")}}>Change MOOD</button>
        </div>
    )
};

export default CounterContext;