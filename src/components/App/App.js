import React from 'react';
import './App.css';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Milestone2-project-structure for React.js Calculator project</p>
        <Display />
        <ButtonPanel />
      </header>
    </div>
  );
}

export default App;
