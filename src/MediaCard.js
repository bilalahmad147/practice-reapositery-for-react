import React, { useState } from "react";
import "./App.css";

const MediaCard = () => {

    let [isCount, setCount] = useState(10);

    return (
        <div>
            <h1>this is time of {isCount}</h1>
            <button onClick={()=>{setCount(++isCount)}} >Increament</button>
        </div>
    )
};

export default MediaCard;