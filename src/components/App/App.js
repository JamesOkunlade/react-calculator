import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Milestone3-styling for React.js Calculator project</p>
        <div className = "calc-body">
          <Display />
          <ButtonPanel className = "button-panel"/>
        </div>

      </header>
    </div>
  );
}

export default App;
