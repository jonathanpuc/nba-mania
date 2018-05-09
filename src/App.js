import React, { Component } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import Player from './components/Player';
const theme = {
  blue: '#006BB6'
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Player />
      </ThemeProvider>
    );
  }
}


export default App;
