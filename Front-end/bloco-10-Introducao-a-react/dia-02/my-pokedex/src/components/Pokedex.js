import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const array = this.props.pokemons;
    return (
      <div className="list-pokemons">
        {array.map(obj => (
          <Pokemon pokemon={obj} />
        ))}
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
};

export default Pokedex;
