import React, { Component } from 'react';
import './App.css';
import Pokecard from './Pokecard';
import pokedex from './Pokedex'

class App extends Component {
  render() {
    console.table(pokedex)
    return (
      <div className="App">
        {pokedex.map((pokemon, i) => <Pokecard key={ i } pokemon={ pokemon } />)}
      </div>
    );
  }
}

export default App;
