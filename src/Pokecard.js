import React, { Component } from 'react';
import './Pokecard.scss';

class Pokecard extends Component {
  render() {
    const pokemon = this.props.pokemon
    const pokemonId = pokemon.id.toString().padStart(3, '0')
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`
    return (
      <div className="Pokecard">
        <h2>{pokemon.name}</h2>
        <img src={img} alt={pokemon.name}/>
        <p>Type: {pokemon.type}</p>
        <p>Exp: {pokemon.base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
