import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const pokemon = this.props.pokemon
    return (
      <div className="Pokecard">
        {pokemon.name}
      </div>
    );
  }
}

export default Pokecard;
