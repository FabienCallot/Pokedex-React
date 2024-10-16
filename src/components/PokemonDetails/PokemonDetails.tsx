import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import getOnePokemon from "../../request/getOnePokemon";
import pokeball from "../../docs/img/pokeball.png";
import "./pokemonDetails.scss";
import type { TPokemon } from "../../request/getOnePokemon";

type Name = string;

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<TPokemon>();
  const { name } = useParams<Name>();

  useEffect(() => {
    (async function () {
      const myNewPokemon = await getOnePokemon(name);
      setPokemon(myNewPokemon);
    })();
  }, [name]);
  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemon-details">
      <div>
        <h2>Détails de {pokemon.name}</h2>

        <img
          src={pokemon.image !== "null" ? pokemon.image : pokeball}
          alt={`${pokemon.name}`}
        />
      </div>
      <div className="pokemon-details--progress">
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat1}</p>
          <ProgressBar value={pokemon.stat1} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat2}</p>
          <ProgressBar value={pokemon.stat2} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat3}</p>
          <ProgressBar value={pokemon.stat3} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat4}</p>
          <ProgressBar value={pokemon.stat4} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat5}</p>
          <ProgressBar value={pokemon.stat5} />
        </div>
        <div className="pokemon-details--progress-stats">
          <p>{pokemon.name_stat6}</p>
          <ProgressBar value={pokemon.stat6} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonDetails);
