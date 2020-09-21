import React from 'react';
import "./App.css";
import MoodContext from "./MoodContext";
import MoodToogler from './MoodToogler';

function App() {

  return (
    <MoodContext.Provider value="bright">
      <div className="App">
        <MoodToogler />
      </div>
    </MoodContext.Provider>
  );
}

export default App;
