import React, { useState } from "react";
import "./App.css";

const MediaCard = () => {

    const [isDay, setDay] = useState();

    return (
        <div className={isDay ? "day":"night"}>
            <h1>this is time of {isDay? "Morning" : "Night"}</h1>
            <button onClick={()=> setDay(!isDay)}>Change Mood</button>
        </div>
    )
};

export default MediaCard;