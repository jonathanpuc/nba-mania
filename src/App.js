import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Player />
      </div>
    );
  }
}

export default App;
