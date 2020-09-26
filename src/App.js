import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let initialValue = 0;

  const formatCount = () => {
    return initialValue === 0 ? "Zero" : initialValue;
  };

  let classes = "badge m-2 badge-";
  classes += (initialValue === 0) ? "warning" : "primary"

  return (
    <React.Fragment>
      <span style={{fontSize : 20}} className={classes}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm m-2">+</button>
      <button className="btn btn-secondary btn-sm m-2">-</button>
      <button className="btn btn-secondary btn-sm m-2">DELETE</button>
    </React.Fragment>
  );
}

export default App;
