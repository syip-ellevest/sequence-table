import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SequenceTable from './SequenceTable/SequenceTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sequence Table Sandbox</h1>
        </header>

        <SequenceTable />
      </div>
    );
  }
}

export default App;
