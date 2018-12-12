import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Philosophy from './components/Philosophy'

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Philosophy />
      </div>
    );
  }
}

export default App;
