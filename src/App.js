import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from 'styled-components';

const theme = {
  blue: '#006BB6'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
