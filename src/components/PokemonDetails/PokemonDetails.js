/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import './pokemonDetails.scss';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState('');
  const { name } = useParams();

  const resultPokemon = async () => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(result.data);
  };

  useEffect(() => {
    resultPokemon();
  }, []);

  if (!pokemon) {
    return null;
  }

  //console.log(pokemon);

  return (
    <div className="pokemon-details">
      <div>
        <h2>Détails de {pokemon.name}</h2>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="pokemon-details--progress">
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[0].stat.name}</p>
          <ProgressBar value={pokemon.stats[0].base_stat} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[1].stat.name}</p>
          <ProgressBar value={pokemon.stats[1].base_stat} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[2].stat.name}</p>
          <ProgressBar value={pokemon.stats[2].base_stat} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[3].stat.name}</p>
          <ProgressBar value={pokemon.stats[3].base_stat} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[4].stat.name}</p>
          <ProgressBar value={pokemon.stats[4].base_stat} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.stats[5].stat.name}</p>
          <ProgressBar value={pokemon.stats[5].base_stat} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonDetails);
