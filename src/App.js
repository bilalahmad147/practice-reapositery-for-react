import React from 'react';
import "./App.css";
import Child from "./child";

const App = () => {

  const thingsList = [
    {name : "watch" , price: 1000},
    {name : "car" , price: 100000},
    {name : "glass" , price: 100},
    {name : "watch" , price: 1000},
    {name : "car" , price: 100000},
    {name : "glass" , price: 100},
  ]

  return(
    <div className="App">
      <h1>This is list for things</h1>
      {thingsList.map((obj,ind)=>{
        return <Child name={obj.name} price={obj.price} />
      })}
    </div>
  )
};

export default App;