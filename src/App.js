import React from 'react';
import "./App.css";

function App() {

  const childs = [{name: "bilal",age : 12},
  {name: "zubi",age : 21},
  {name: "ali",age : 5}];

  return (
    <div className="App">
      <ul>
        {childs.map((item,ind) => {
          return <li key={ind}>{item.name}</li> })}
      </ul>
    </div>
  );
}

export default App;
