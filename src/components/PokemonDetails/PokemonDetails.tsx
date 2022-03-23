/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import getOnePokemon from '../../request/getOnePokemon';
import './pokemonDetails.scss';

type TPokemon = (number | string)[];
type Name = string;
const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<TPokemon>();
  const { name } = useParams<Name>();

  useEffect(() => {
    (async function () {
      const myNewPokemon = await getOnePokemon(name);
      setPokemon(myNewPokemon);
    })();
  }, []);

  if (!pokemon) {
    return null;
  }

  //console.log(pokemon);

  return (
    <div className="pokemon-details">
      <div>
        <h2>Détails de {pokemon[0]}</h2>
        <img src={`${pokemon[1]}`} alt={`${pokemon[0]}`} />
      </div>
      <div className="pokemon-details--progress">
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[2]}</p>
          <ProgressBar value={pokemon[3]} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[4]}</p>
          <ProgressBar value={pokemon[5]} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[6]}</p>
          <ProgressBar value={pokemon[7]} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[8]}</p>
          <ProgressBar value={pokemon[9]} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[10]}</p>
          <ProgressBar value={pokemon[11]} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon[12]}</p>
          <ProgressBar value={pokemon[13]} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonDetails);
