import React from 'react';
import "./App.css";
import Child from "./child";

const App = () => {

  const thingsList = [
    {name : "watch" , price: 1000, id:1},
    {name : "car" , price: 100000, id:2},
    {name : "glass" , price: 100, id:3},
    {name : "watch" , price: 1000, id:4},
    {name : "car" , price: 100000, id:5},
  ]

  return(
    <div className="App">
      <h1>This is list for things</h1>
      {thingsList.map((obj,ind)=>{
        return <Child id={obj.id} key={ind} name={obj.name} price={obj.price} />
      })}
    </div>
  )
};

export default App;