import React,{useContext} from 'react';
import MoodContext from "./MoodContext"

const MoodToogler = () => {
    const [Mood, setMood] = useContext(MoodContext);
    return(
        <div>
            <h1>this is our mood {Mood}</h1>
            <button onClick={()=>{setMood(Mood == "bright" ? "dark" : "bright")}}>Change</button>
        </div>
    )
};

export default MoodToogler;